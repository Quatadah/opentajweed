import React, { useState, useContext, useEffect } from 'react';
import { Sidebar } from './Sidebar';
import { ContentDisplay } from './ContentDisplay';
import { content } from '../constants/content';
import { MenuIcon, SettingsIcon, ArrowLeftIcon, ArrowRightIcon, ShareIcon } from './Icons';
import { LanguageContext } from '../contexts/LanguageContext';
import { SettingsModal } from './SettingsModal';
import { Chapter } from '../types';
import { SettingsContext } from '../contexts/SettingsContext';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Separator } from '@/components/ui/separator';

type BookKey = 'hafs' | 'warsh';

interface LearningInterfaceProps {
    selectedBook: BookKey;
    onGoBack: () => void;
}

export const LearningInterface: React.FC<LearningInterfaceProps> = ({ selectedBook, onGoBack }) => {
  const { language, t } = useContext(LanguageContext);
  const { isSequentialUnlockEnabled } = useContext(SettingsContext);
  
  const bookContent = content[selectedBook];
  const tajweedContent = (bookContent[language as keyof typeof bookContent] || bookContent.ar) as Chapter[];
  const progressKey = `tajweed-progress-${selectedBook}`;

  const getInitialChapterIndex = () => {
    const savedProgress = localStorage.getItem(progressKey);
    if (savedProgress) {
        const parsedIndex = parseInt(savedProgress, 10);
        if (!isNaN(parsedIndex) && parsedIndex >= 0 && parsedIndex < tajweedContent.length) {
            return parsedIndex;
        }
    }
    return 0;
  };

  const [activeChapterIndex, setActiveChapterIndex] = useState(getInitialChapterIndex);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSettingsOpen, setSettingsOpen] = useState(false);
  const [unlockedChapterIndex, setUnlockedChapterIndex] = useState(getInitialChapterIndex);
  
  useEffect(() => {
      const initialIndex = getInitialChapterIndex();
      const newActiveIndex = activeChapterIndex >= tajweedContent.length ? tajweedContent.length -1 : activeChapterIndex
      setActiveChapterIndex(newActiveIndex < 0 ? 0 : newActiveIndex);
      setUnlockedChapterIndex(initialIndex);
  }, [selectedBook, language, tajweedContent.length]);


  useEffect(() => {
    localStorage.setItem(progressKey, unlockedChapterIndex.toString());
  }, [unlockedChapterIndex, progressKey]);
  
  const handleSelectChapter = (index: number) => {
    setActiveChapterIndex(index);
    setIsSidebarOpen(false);
  };

  const handleChapterComplete = () => {
    if (activeChapterIndex === unlockedChapterIndex && unlockedChapterIndex < tajweedContent.length - 1) {
      setUnlockedChapterIndex(prevIndex => prevIndex + 1);
    }
  };

  const handleNextChapter = () => {
    if (activeChapterIndex < tajweedContent.length - 1) {
      setActiveChapterIndex(activeChapterIndex + 1);
    }
  };

  useEffect(() => {
    const currentChapter = tajweedContent[activeChapterIndex];
    if (currentChapter && (!currentChapter.exercises || currentChapter.exercises.length === 0)) {
       if (activeChapterIndex === unlockedChapterIndex && unlockedChapterIndex < tajweedContent.length - 1) {
         setUnlockedChapterIndex(activeChapterIndex + 1);
       }
    }
  }, [activeChapterIndex, unlockedChapterIndex, tajweedContent]);

  const activeChapter = tajweedContent[activeChapterIndex];

  const handleShare = async () => {
    const shareData: ShareData = {
      title: t('shareMessageTitle'),
      text: t('shareMessageText', { chapterTitle: activeChapter.title }),
    };

    if (window.location.protocol.startsWith('http')) {
      shareData.url = window.location.href;
    }
    
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        alert(t('shareNotSupported'));
      }
    } catch (err) {
      if (err instanceof Error && err.name === 'AbortError') {
        // User cancelled the share, do nothing.
      } else {
        console.error("Error sharing:", err);
      }
    }
  };

  if (!activeChapter) {
    // This guard prevents a crash if the active index is out of bounds during a content change.
    // The useEffect hook will correct the index on the next render.
    return null;
  }
  
  const effectiveUnlockedChapterIndex = isSequentialUnlockEnabled ? unlockedChapterIndex : tajweedContent.length - 1;

  const totalProgress = tajweedContent.length > 1 ? (effectiveUnlockedChapterIndex / (tajweedContent.length - 1)) * 100 : (effectiveUnlockedChapterIndex > 0 ? 100 : 0);

  const bookTitle = selectedBook === 'hafs' ? t('bookHafsTitle') : t('bookWarshTitle');

  return (
    <TooltipProvider>
      <>
        <div
          className="flex h-screen flex-col bg-muted/40"
          dir={language === 'ar' ? 'rtl' : 'ltr'}
        >
          <header className="sticky top-0 z-20 border-b border-border/60 bg-background/80 backdrop-blur-md">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-4 sm:py-5">
              <div
                className="flex flex-wrap items-center justify-between gap-4"
              >
                <div
                  className={cn(
                    'flex items-center gap-3',
                    'order-1'
                  )}
                >
                  {language === 'ar' ? (
                    <>
                      <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
                        <SheetTrigger asChild>
                          <Button
                            variant="outline"
                            size="icon"
                            className="lg:hidden"
                            aria-label={t('openMenu')}
                          >
                            <MenuIcon className="h-5 w-5" />
                          </Button>
                        </SheetTrigger>
                        <SheetContent
                          side="right"
                          className="w-[85vw] max-w-sm"
                          dir="rtl"
                        >
                          <SheetHeader className="text-right">
                            <SheetTitle>{t('tableOfContents')}</SheetTitle>
                          </SheetHeader>
                          <div className="mt-6 h-[calc(100%-4rem)]">
                            <Sidebar
                              chapters={tajweedContent}
                              activeChapterIndex={activeChapterIndex}
                              unlockedChapterIndex={effectiveUnlockedChapterIndex}
                              onSelectChapter={(index) => {
                                handleSelectChapter(index);
                                setIsSidebarOpen(false);
                              }}
                            />
                          </div>
                        </SheetContent>
                      </Sheet>
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary shadow-inner overflow-hidden p-0">
                          <img src="/logo.png" alt={t('appTitle')} className="h-full w-full object-contain" />
                        </div>
                        <div
                          className={cn(
                            'flex flex-col gap-1',
                            'items-end text-right'
                          )}
                        >
                          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground text-right">
                            {t('appTitle')}
                          </p>
                          <div className="flex items-center gap-2">
                            <h1 className="text-lg font-semibold sm:text-xl text-right">{bookTitle}</h1>
                            <Badge variant="outline" className="text-xs">
                              {Math.round(totalProgress)}%
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
                        <SheetTrigger asChild>
                          <Button
                            variant="outline"
                            size="icon"
                            className="lg:hidden"
                            aria-label={t('openMenu')}
                          >
                            <MenuIcon className="h-5 w-5" />
                          </Button>
                        </SheetTrigger>
                        <SheetContent
                          side="left"
                          className="w-[85vw] max-w-sm"
                          dir="ltr"
                        >
                          <SheetHeader className="text-left">
                            <SheetTitle>{t('tableOfContents')}</SheetTitle>
                          </SheetHeader>
                          <div className="mt-6 h-[calc(100%-4rem)]">
                            <Sidebar
                              chapters={tajweedContent}
                              activeChapterIndex={activeChapterIndex}
                              unlockedChapterIndex={effectiveUnlockedChapterIndex}
                              onSelectChapter={(index) => {
                                handleSelectChapter(index);
                                setIsSidebarOpen(false);
                              }}
                            />
                          </div>
                        </SheetContent>
                      </Sheet>
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary shadow-inner overflow-hidden p-0">
                          <img src="/logo.png" alt={t('appTitle')} className="h-full w-full object-contain" />
                        </div>
                        <div
                          className={cn(
                            'flex flex-col gap-1',
                            'items-start text-left'
                          )}
                        >
                          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground text-left">
                            {t('appTitle')}
                          </p>
                          <div className="flex items-center gap-2">
                            <h1 className="text-lg font-semibold sm:text-xl text-left">{bookTitle}</h1>
                            <Badge variant="outline" className="text-xs">
                              {Math.round(totalProgress)}%
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                <div
                  className={cn(
                    'flex items-center gap-2',
                    'order-2',
                    'justify-end'
                  )}
                >
                  {language === 'ar' ? (
                    <>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-muted-foreground hover:text-foreground"
                            onClick={handleShare}
                            aria-label={t('shareProgress')}
                          >
                            <ShareIcon className="h-5 w-5" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>{t('shareProgress')}</TooltipContent>
                      </Tooltip>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-muted-foreground hover:text-foreground"
                            onClick={() => setSettingsOpen(true)}
                            aria-label={t('settings')}
                          >
                            <SettingsIcon className="h-5 w-5" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>{t('settings')}</TooltipContent>
                      </Tooltip>
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-2 flex-row-reverse"
                        onClick={onGoBack}
                      >
                        <ArrowLeftIcon className="h-4 w-4" />
                        <span className="hidden sm:inline">{t('changeBook')}</span>
                      </Button>
                    </>
                  ) : (
                    <>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-muted-foreground hover:text-foreground"
                            onClick={handleShare}
                            aria-label={t('shareProgress')}
                          >
                            <ShareIcon className="h-5 w-5" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>{t('shareProgress')}</TooltipContent>
                      </Tooltip>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-muted-foreground hover:text-foreground"
                            onClick={() => setSettingsOpen(true)}
                            aria-label={t('settings')}
                          >
                            <SettingsIcon className="h-5 w-5" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>{t('settings')}</TooltipContent>
                      </Tooltip>
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-2"
                        onClick={onGoBack}
                      >
                        <ArrowLeftIcon className="h-4 w-4" />
                        <span className="hidden sm:inline">{t('changeBook')}</span>
                      </Button>
                    </>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Progress value={Math.round(totalProgress)} className="h-2 flex-1 bg-muted" />
                <span className="text-xs font-medium text-muted-foreground">
                  {Math.round(totalProgress)}%
                </span>
              </div>
            </div>
          </header>

          <div className="mx-auto flex w-full max-w-6xl flex-1 overflow-hidden">
            <aside className="hidden h-full w-80 flex-shrink-0 border-r border-border/50 bg-background px-4 py-6 lg:block xl:w-96">
              <Sidebar
                chapters={tajweedContent}
                activeChapterIndex={activeChapterIndex}
                unlockedChapterIndex={effectiveUnlockedChapterIndex}
                onSelectChapter={handleSelectChapter}
              />
            </aside>

            <main className="flex-1 overflow-y-auto bg-muted/20 px-4 py-6 sm:px-6 lg:px-10">
              <div className="mx-auto max-w-4xl space-y-8">
                <ContentDisplay
                  chapter={activeChapter}
                  onChapterComplete={handleChapterComplete}
                  activeChapterIndex={activeChapterIndex}
                  totalChapters={tajweedContent.length}
                  onNextChapter={handleNextChapter}
                />
              </div>
              <Separator className="my-10 opacity-60" />
              <footer className="pb-8 text-center text-sm text-muted-foreground">
                <p>{t('footerText')}</p>
              </footer>
            </main>
          </div>
        </div>
        <SettingsModal
          isOpen={isSettingsOpen}
          onClose={() => setSettingsOpen(false)}
          selectedBook={selectedBook}
        />
      </>
    </TooltipProvider>
  );
};