import React, { useContext, useState, useMemo } from 'react';
import { Chapter } from '../types';
import { LanguageContext } from '../contexts/LanguageContext';
import { LockIcon, SearchIcon } from './Icons';

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
    <nav className="p-4 bg-card rounded-lg shadow-sm border border-border h-full flex flex-col">
      <h2 className="text-lg font-semibold text-foreground mb-4 px-2">{t('tableOfContents')}</h2>
      
      <div className="relative mb-4">
        <span className={`absolute inset-y-0 flex items-center ${language === 'ar' ? 'right-3' : 'left-3'}`}>
          <SearchIcon className="h-5 w-5 text-muted-foreground" />
        </span>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={t('searchChapters')}
          className={`w-full bg-background border border-input rounded-md py-2 text-sm focus:ring-ring focus:border-primary ${language === 'ar' ? 'pr-10 pl-4 text-right' : 'pl-10 pr-4'}`}
        />
      </div>

      <ul className="flex-grow overflow-y-auto">
        {filteredChapters.length > 0 ? (
          filteredChapters.map((chapter) => {
            const isLocked = chapter.originalIndex > unlockedChapterIndex;
            return (
              <li key={chapter.originalIndex}>
                <button
                  onClick={() => onSelectChapter(chapter.originalIndex)}
                  disabled={isLocked}
                  className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium transition-colors duration-150 ${
                    activeChapterIndex === chapter.originalIndex
                      ? 'bg-primary/20 text-primary'
                      : isLocked
                      ? 'text-muted-foreground bg-muted cursor-not-allowed'
                      : 'text-card-foreground hover:bg-accent hover:text-accent-foreground'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div className={`flex items-center gap-2 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                      {isLocked && <LockIcon className="h-4 w-4 text-muted-foreground flex-shrink-0" />}
                      <span className={`${language === 'ar' ? 'text-right' : 'text-left'} ${isLocked ? 'opacity-70' : ''}`}>{chapter.title}</span>
                    </div>
                    <span dir="rtl" className={`text-primary/80 font-serif ${isLocked ? 'opacity-50' : ''}`}>{chapter.arabicTitle}</span>
                  </div>
                </button>
              </li>
            );
          })
        ) : (
          <li className="px-3 py-2 text-sm text-muted-foreground text-center">{t('noResultsFound')}</li>
        )}
      </ul>
    </nav>
  );
};