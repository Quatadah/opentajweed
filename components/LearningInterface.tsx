import React, { useState, useContext, useEffect } from 'react';
import { Sidebar } from './Sidebar';
import { ContentDisplay } from './ContentDisplay';
import { content } from '../constants/content';
import { MenuIcon, BookOpenIcon, SettingsIcon, ArrowLeftIcon, ShareIcon } from './Icons';
import { LanguageContext } from '../contexts/LanguageContext';
import { SettingsModal } from './SettingsModal';
import { Chapter } from '../types';
import { SettingsContext } from '../contexts/SettingsContext';

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

  return (
    <>
      <div className="flex flex-col h-screen" dir={language === 'ar' ? 'rtl' : 'ltr'}>
        <header className="bg-background/80 backdrop-blur-lg border-b border-border p-4 flex justify-between items-center sticky top-0 z-20">
            <div className="flex items-center gap-4">
                <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="lg:hidden text-muted-foreground">
                    <MenuIcon className="h-6 w-6" />
                </button>
                <div className="flex items-center gap-2">
                    <BookOpenIcon className="h-8 w-8 text-primary" />
                    <h1 className="text-xl font-bold text-foreground">{t('appTitle')}</h1>
                </div>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={handleShare} className="p-2 rounded-full hover:bg-accent text-muted-foreground">
                  <ShareIcon className="h-6 w-6" />
              </button>
              <button onClick={() => setSettingsOpen(true)} className="p-2 rounded-full hover:bg-accent text-muted-foreground">
                  <SettingsIcon className="h-6 w-6" />
              </button>
              <button onClick={onGoBack} className="p-2 rounded-full hover:bg-accent text-muted-foreground flex items-center gap-1.5 text-sm">
                  <ArrowLeftIcon className="h-5 w-5"/>
                  <span className="hidden sm:inline">{t('changeBook')}</span>
              </button>
            </div>
        </header>

        <div className="flex flex-1 overflow-hidden">
            {/* Sidebar for large screens */}
            <aside className="hidden lg:block w-80 xl:w-96 flex-shrink-0 overflow-y-auto p-4">
                <div className="h-full rounded-lg bg-card border-border">
                    <Sidebar
                        chapters={tajweedContent}
                        activeChapterIndex={activeChapterIndex}
                        unlockedChapterIndex={effectiveUnlockedChapterIndex}
                        onSelectChapter={handleSelectChapter}
                    />
                </div>
            </aside>

            {/* Mobile Sidebar */}
            {isSidebarOpen && (
                <div className="fixed inset-0 z-30" onClick={() => setIsSidebarOpen(false)}>
                    <div className="absolute inset-0 bg-foreground/50 dark:bg-background/80 backdrop-blur-sm" />
                    <aside className="absolute left-0 top-0 h-full w-80 bg-background p-4">
                        <Sidebar
                            chapters={tajweedContent}
                            activeChapterIndex={activeChapterIndex}
                            unlockedChapterIndex={effectiveUnlockedChapterIndex}
                            onSelectChapter={handleSelectChapter}
                        />
                    </aside>
                </div>
            )}

            <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 bg-secondary">
                <div className="max-w-4xl mx-auto">
                    <ContentDisplay 
                      chapter={activeChapter} 
                      onChapterComplete={handleChapterComplete}
                      activeChapterIndex={activeChapterIndex}
                    />
                </div>
                <footer className="text-center py-8 text-muted-foreground text-sm mt-8">
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
  );
};