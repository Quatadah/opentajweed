import React, { useContext, useState, useEffect } from 'react';
import { Chapter } from '../types';
import { LanguageContext } from '../contexts/LanguageContext';
import { SettingsContext } from '../contexts/SettingsContext';
import { Quiz } from './Quiz';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

interface ContentDisplayProps {
  chapter: Chapter;
  onChapterComplete: () => void;
  activeChapterIndex: number;
  totalChapters: number;
  onNextChapter?: () => void;
}

export const ContentDisplay: React.FC<ContentDisplayProps> = ({ chapter, onChapterComplete, activeChapterIndex, totalChapters, onNextChapter }) => {
  const { language, t } = useContext(LanguageContext);
  const { isSequentialUnlockEnabled } = useContext(SettingsContext);
  const hasExercises = Boolean(chapter.exercises && chapter.exercises.length > 0);
  const [activeTab, setActiveTab] = useState('lesson');

  // Reset to lesson tab when chapter changes
  useEffect(() => {
    setActiveTab('lesson');
  }, [activeChapterIndex]);

  return (
    <Card className="border border-border/70 shadow-xl">
      <CardHeader
        className={cn(
          'space-y-3',
          language === 'ar' ? 'items-end text-right' : 'items-start text-left'
        )}
      >
        <Badge
          variant="secondary"
          className="text-xs font-semibold uppercase tracking-wider w-fit self-start"
        >
          {`${t('chapterLabel')} ${activeChapterIndex + 1}`}
        </Badge>
        {language === 'ar' ? (
          <>
            <CardTitle className={cn("text-3xl font-bold leading-tight w-full", language === 'ar' ? 'text-right' : 'text-left')}>
              {chapter.arabicTitle || chapter.title}
            </CardTitle>
          </>
        ) : (
          <>
            <CardTitle className={cn("text-3xl font-bold leading-tight w-full", language === 'ar' ? 'text-right' : 'text-left')}>
              {chapter.title}
            </CardTitle>
            <CardDescription
              dir="rtl"
              className="text-3xl font-serif text-primary"
            >
              {chapter.arabicTitle}
            </CardDescription>
          </>
        )}
      </CardHeader>
      <CardContent className="space-y-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full space-y-6" dir={language === 'ar' ? 'rtl' : 'ltr'}>
          <TabsList>
            {language === 'ar' ? (
              <>
                <TabsTrigger value="lesson">
                  {t('lessonTab')}
                </TabsTrigger>
                {hasExercises && (
                  <TabsTrigger value="practice">
                    {t('practiceTab')}
                  </TabsTrigger>
                )}
              </>
            ) : (
              <>
                <TabsTrigger value="lesson">
                  {t('lessonTab')}
                </TabsTrigger>
                {hasExercises && (
                  <TabsTrigger value="practice">
                    {t('practiceTab')}
                  </TabsTrigger>
                )}
              </>
            )}
          </TabsList>

          <TabsContent value="lesson" className="space-y-10">
            {chapter.sections.map((section, index) => (
              <section key={index} className="space-y-4">
                <div className={`space-y-2 ${language === 'ar' ? 'text-right' : ''}`}>
                  <h3 className="text-2xl font-semibold text-foreground">{section.title}</h3>
                  <Separator className="opacity-60" />
                </div>
                <div
                  className={`prose max-w-none text-card-foreground prose-blockquote:border-l-4 prose-blockquote:border-primary/70 prose-blockquote:bg-accent/40 prose-blockquote:text-foreground prose-headings:text-foreground prose-strong:text-foreground prose-code:rounded-md prose-code:bg-muted prose-code:px-2 prose-code:py-1 dark:prose-invert ${language === 'ar' ? 'text-right prose-ul:pr-4 prose-ol:pr-4' : ''}`}
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
              </section>
            ))}
            {isSequentialUnlockEnabled && hasExercises && (
              <div className={cn(
                "rounded-xl border border-amber-500/50 bg-amber-500/10 p-4 shadow-sm",
                language === 'ar' ? 'text-right' : 'text-left'
              )}>
                <p className="text-sm font-medium text-foreground">
                  {t('practiceAlert')}{' '}
                  <span
                    onClick={() => setActiveTab('practice')}
                    className="text-primary underline cursor-pointer hover:text-primary/80"
                  >
                    {t('goToPractice')}
                  </span>
                </p>
              </div>
            )}
          </TabsContent>

          {hasExercises && (
            <TabsContent value="practice">
              <Quiz 
                exercises={chapter.exercises!} 
                onQuizComplete={onChapterComplete}
                hasNextChapter={activeChapterIndex < totalChapters - 1}
                onNextChapter={onNextChapter}
              />
            </TabsContent>
          )}
        </Tabs>
      </CardContent>
    </Card>
  );
};