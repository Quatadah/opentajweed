import React, { useContext, useState, useEffect } from 'react';
import { ArrowRightIcon, ArrowLeftIcon, LanguagesIcon, SparklesIcon } from './Icons';
import { Github } from 'lucide-react';
import { LanguageContext } from '../contexts/LanguageContext';
import { content } from '../constants/content';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

type BookKey = 'hafs' | 'warsh';

interface BookSelectionProps {
  onSelectBook: (book: BookKey) => void;
}

interface Progress {
  hafs: number;
  warsh: number;
}

export const BookSelection: React.FC<BookSelectionProps> = ({ onSelectBook }) => {
  const { t, language, setLanguage } = useContext(LanguageContext);
  const [progress, setProgress] = useState<Progress>({ hafs: 0, warsh: 0 });

  useEffect(() => {
    const calculateProgress = (bookKey: BookKey): number => {
      const bookContent = content[bookKey];
      // Use 'ar' content for total as it's guaranteed to exist for both
      const totalChapters = bookContent.ar.length;
      const progressRaw = localStorage.getItem(`tajweed-progress-${bookKey}`);
      const unlockedIndex = progressRaw ? parseInt(progressRaw, 10) : 0;

      if (totalChapters <= 1) {
        // If there's 1 or 0 chapters, consider it 100% complete if accessed.
        return unlockedIndex >= 0 ? 100 : 0;
      }

      // Progress is based on the index of the highest unlocked chapter.
      // Reaching the last index (totalChapters - 1) means 100% progress.
      const percentage = (unlockedIndex / (totalChapters - 1)) * 100;
      return Math.min(100, percentage);
    };

    setProgress({
      hafs: calculateProgress('hafs'),
      warsh: calculateProgress('warsh'),
    });
  }, []);

  const handleLanguageChange = (lang: 'fr' | 'ar') => {
    setLanguage(lang);
  };

  return (
    <main
      className="min-h-screen bg-gradient-to-br from-background via-background to-primary/10 text-foreground flex flex-col items-center justify-center px-4 py-8"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="absolute inset-x-0 top-0 h-[320px] bg-primary/5 blur-3xl opacity-70 pointer-events-none" aria-hidden="true" />
      <div className="relative z-10 w-full max-w-5xl space-y-6">
        <header
          className={cn(
            'flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between',
            language === 'ar' ? 'lg:flex-row-reverse' : ''
          )}
        >
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-[26px] bg-primary/15 text-primary shadow-inner shadow-primary/10 overflow-hidden p-0">
              <img src="/logo.png" alt={`${t('appTitle')} - ${t('footerText')}`} className="h-full w-full object-contain" />
            </div>
            <div
              className={cn(
                'flex flex-col gap-2',
                language === 'ar' ? 'items-end text-right' : 'items-start text-left'
              )}
            >
              <Badge variant="muted" className="flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                <SparklesIcon className="h-4 w-4" aria-hidden="true" />
                {t('appTitle')}
              </Badge>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                {t('selectBook')}
              </h1>
              <p className="max-w-xl text-sm text-muted-foreground sm:text-base">
                {t('footerText')}
              </p>
            </div>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2 text-sm font-semibold">
                <LanguagesIcon className="h-5 w-5" />
                <span>{language === 'ar' ? 'العربية' : 'Français'}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align={language === 'ar' ? 'end' : 'start'}
              dir={language === 'ar' ? 'rtl' : 'ltr'}
            >
              <DropdownMenuLabel>{t('changeLanguage')}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onSelect={() => handleLanguageChange('fr')}
                className={language === 'fr' ? 'bg-accent text-accent-foreground' : ''}
              >
                Français
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() => handleLanguageChange('ar')}
                className={language === 'ar' ? 'bg-accent text-accent-foreground' : ''}
              >
                العربية
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>

        <Separator className="my-8 opacity-70" aria-hidden="true" />

        <section className="grid gap-6 md:grid-cols-2" aria-label={t('selectBook')}>
          <Card className="relative overflow-hidden border-border/70" role="article" aria-labelledby="hafs-title">
            <div
              className={cn(
                'absolute inset-x-6 top-6 flex items-center justify-between text-xs font-medium text-muted-foreground',
                language === 'ar' ? 'flex-row-reverse text-right' : ''
              )}
            >
              <Badge variant="secondary">{t('bookHafsTitle')}</Badge>
              <span className="text-xs uppercase tracking-widest text-primary">
                {t('progressLabel')}
              </span>
            </div>
            <CardHeader
              className={cn(
                'pt-16',
                language === 'ar' ? 'items-end text-right' : 'items-start text-left'
              )}
            >
              <CardTitle id="hafs-title" className="text-2xl font-semibold">{t('bookHafsTitle')}</CardTitle>
              <CardDescription className="text-base leading-relaxed text-muted-foreground">
                {t('bookHafsDescription')}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div
                className={cn(
                  'flex items-center justify-between text-sm',
                  language === 'ar' ? 'flex-row-reverse text-right' : ''
                )}
              >
                <span className="font-medium text-muted-foreground">
                  {t('progressLabel')}
                </span>
                <span className="font-semibold text-primary">
                  {Math.round(progress.hafs)}%
                </span>
              </div>
              <Progress value={progress.hafs} />
            </CardContent>
            <CardFooter className="mt-auto">
              <Button className="w-full group" onClick={() => onSelectBook('hafs')}>
                <span>{t('startLearning')}</span>
                {language === 'ar' ? (
                  <ArrowLeftIcon className={cn("h-5 w-5 transition-transform", "group-hover:-translate-x-1.5")} />
                ) : (
                  <ArrowRightIcon className={cn("h-5 w-5 transition-transform", "group-hover:translate-x-1.5")} />
                )}
              </Button>
            </CardFooter>
          </Card>

          <Card className="relative overflow-hidden border-border/70" role="article" aria-labelledby="warsh-title">
            <div
              className={cn(
                'absolute inset-x-6 top-6 flex items-center justify-between text-xs font-medium text-muted-foreground',
                language === 'ar' ? 'flex-row-reverse text-right' : ''
              )}
            >
              <Badge variant="secondary">{t('bookWarshTitle')}</Badge>
              <span className="text-xs uppercase tracking-widest text-primary">
                {t('progressLabel')}
              </span>
            </div>
            <CardHeader
              className={cn(
                'pt-16',
                language === 'ar' ? 'items-end text-right' : 'items-start text-left'
              )}
            >
              <CardTitle id="warsh-title" className="text-2xl font-semibold">{t('bookWarshTitle')}</CardTitle>
              <CardDescription className="text-base leading-relaxed text-muted-foreground">
                {t('bookWarshDescription')}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div
                className={cn(
                  'flex items-center justify-between text-sm',
                  language === 'ar' ? 'flex-row-reverse text-right' : ''
                )}
              >
                <span className="font-medium text-muted-foreground">
                  {t('progressLabel')}
                </span>
                <span className="font-semibold text-primary">
                  {Math.round(progress.warsh)}%
                </span>
              </div>
              <Progress value={progress.warsh} />
            </CardContent>
            <CardFooter className="mt-auto">
              <Button className="w-full group" onClick={() => onSelectBook('warsh')}>
                <span>{t('startLearning')}</span>
                {language === 'ar' ? (
                  <ArrowLeftIcon className={cn("h-5 w-5 transition-transform", "group-hover:-translate-x-1.5")} />
                ) : (
                  <ArrowRightIcon className={cn("h-5 w-5 transition-transform", "group-hover:translate-x-1.5")} />
                )}
              </Button>
            </CardFooter>
          </Card>
        </section>

        <aside className={cn(
          "mt-8",
          language === 'ar' ? 'text-right' : 'text-left'
        )} aria-label={t('openSourceTitle')}>
          <Card className="border-primary/20 bg-primary/5">
          <CardHeader
            className={cn(
              'text-center',
              language === 'ar' ? 'items-end' : 'items-start'
            )}
          >
            <CardTitle className={cn(
              "text-xl font-semibold flex items-center gap-2",
              language === 'ar' ? 'justify-center flex-row-reverse' : 'justify-center'
            )}>
              <SparklesIcon className="h-5 w-5 text-primary" />
              {t('openSourceTitle')}
            </CardTitle>
            <CardDescription className="text-base mt-2">
              {t('openSourceDescription')}
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-sm text-muted-foreground mb-4">
              {t('contributeDescription')}
            </p>
            <Button
              asChild
              variant="default"
              className={cn(
                "gap-2 group",
                language === 'ar' ? 'flex-row-reverse' : ''
              )}
            >
              <a
                href="https://github.com/Quatadah/opentajweed"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <Github className="h-5 w-5" />
                <span>{t('contributeText')}</span>
              </a>
            </Button>
          </CardContent>
          </Card>
        </aside>

        <footer className="mt-12 text-center text-sm text-muted-foreground">
          <p>{t('footerText')}</p>
        </footer>
      </div>
    </main>
  );
};