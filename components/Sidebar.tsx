import React, { useContext, useState, useMemo } from 'react';
import { Chapter } from '../types';
import { LanguageContext } from '../contexts/LanguageContext';
import { LockIcon, SearchIcon } from './Icons';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface SidebarProps {
  chapters: Chapter[];
  activeChapterIndex: number;
  unlockedChapterIndex: number;
  onSelectChapter: (index: number) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ chapters, activeChapterIndex, onSelectChapter, unlockedChapterIndex }) => {
  const { t, language } = useContext(LanguageContext);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredChapters = useMemo(() => {
    if (!searchTerm) {
      return chapters.map((chapter, index) => ({ ...chapter, originalIndex: index }));
    }
    const lowercasedTerm = searchTerm.toLowerCase();
    return chapters
      .map((chapter, index) => ({ ...chapter, originalIndex: index }))
      .filter(chapter =>
        chapter.title.toLowerCase().includes(lowercasedTerm) ||
        chapter.arabicTitle.toLowerCase().includes(lowercasedTerm) ||
        chapter.sections.some(section =>
          section.title.toLowerCase().includes(lowercasedTerm) ||
          section.content.toLowerCase().includes(lowercasedTerm)
        )
      );
  }, [chapters, searchTerm]);

  return (
    <div className="flex h-full flex-col rounded-2xl border border-border/60 bg-card/80 p-4 backdrop-blur">
      <div className={`${language === 'ar' ? 'text-right' : 'text-left'}`}>
        <h2 className="text-lg font-semibold text-foreground">{t('tableOfContents')}</h2>
        <p className="text-xs text-muted-foreground">{t('progressLabel')}</p>
      </div>

      <div className="relative mt-4">
        <span
          className={cn(
            'pointer-events-none absolute inset-y-0 flex items-center',
            language === 'ar' ? 'right-3' : 'left-3'
          )}
        >
          <SearchIcon className="h-5 w-5 text-muted-foreground" />
        </span>
        <Input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={t('searchChapters')}
          className={cn(
            language === 'ar' ? 'pr-10 pl-4 text-right' : 'pl-10 pr-4'
          )}
          dir={language === 'ar' ? 'rtl' : 'ltr'}
        />
      </div>

      <ScrollArea className="mt-4 h-full">
        <div className="space-y-2 pr-1">
          {filteredChapters.length > 0 ? (
            filteredChapters.map((chapter) => {
              const isLocked = chapter.originalIndex > unlockedChapterIndex;
              const isActive = activeChapterIndex === chapter.originalIndex;
              return (
                <button
                  key={chapter.originalIndex}
                  onClick={() => onSelectChapter(chapter.originalIndex)}
                  disabled={isLocked}
                  className={cn(
                    'flex w-full flex-col gap-2 rounded-xl border border-transparent p-4 text-start transition-all',
                    language === 'ar' ? 'items-end text-right' : 'items-start text-left',
                    isActive &&
                      'border-primary/50 bg-primary/10 text-primary shadow-sm backdrop-blur',
                    !isActive &&
                      !isLocked &&
                      'hover:border-border/60 hover:bg-accent/50 hover:text-accent-foreground',
                    isLocked && 'cursor-not-allowed border-dashed border-border/60 bg-muted/50 text-muted-foreground/70'
                  )}
                >
                  <div className={cn(
                    "flex w-full items-center gap-3",
                    language === 'ar' ? 'flex-row-reverse' : ''
                  )}>
                    <span className={cn(
                      "text-sm font-semibold flex-1",
                      language === 'ar' ? 'text-right' : 'text-left'
                    )}>{chapter.title}</span>
                    {isLocked && (
                      <LockIcon className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                    )}
                    <Badge variant={isActive ? 'default' : 'outline'} dir="rtl" className="flex-shrink-0">
                      {chapter.arabicTitle}
                    </Badge>
                  </div>
                  <div className={cn(
                    "flex w-full items-center gap-2 text-xs text-muted-foreground",
                    language === 'ar' ? 'flex-row-reverse' : ''
                  )}>
                    <span className={cn(
                      "line-clamp-2",
                      language === 'ar' ? 'text-right' : 'text-left'
                    )}>
                      {chapter.sections[0]?.title || chapter.title}
                    </span>
                  </div>
                </button>
              );
            })
          ) : (
            <div className="rounded-xl border border-dashed border-border/70 bg-muted/40 px-4 py-6 text-center text-sm text-muted-foreground">
              {t('noResultsFound')}
            </div>
          )}
        </div>
      </ScrollArea>
    </div>
  );
};