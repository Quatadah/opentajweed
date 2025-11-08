import React, { useContext } from 'react';
import { Chapter } from '../types';
import { LanguageContext } from '../contexts/LanguageContext';
import { Quiz } from './Quiz';

interface ContentDisplayProps {
  chapter: Chapter;
  onChapterComplete: () => void;
  activeChapterIndex: number;
}

export const ContentDisplay: React.FC<ContentDisplayProps> = ({ chapter, onChapterComplete, activeChapterIndex }) => {
  const { language } = useContext(LanguageContext);
  return (
    <div className="bg-card text-card-foreground p-6 sm:p-8 rounded-lg shadow-lg border border-border">
      <header className="mb-8 pb-4 border-b-2 border-primary">
        <h2 className={`text-3xl font-bold text-foreground ${language === 'ar' ? 'text-right' : ''}`}>{chapter.title}</h2>
        <p dir="rtl" className="text-4xl font-serif text-primary mt-2">{chapter.arabicTitle}</p>
      </header>
      <div className="space-y-10">
        {chapter.sections.map((section, index) => (
          <section key={index}>
            <h3 className={`text-2xl font-semibold text-primary mb-4 ${language === 'ar' ? 'text-right' : ''}`}>{section.title}</h3>
            <div
              className={`prose max-w-none text-card-foreground prose-blockquote:bg-secondary prose-blockquote:border-primary prose-blockquote:text-foreground dark:prose-invert prose-code:bg-secondary prose-code:p-1 prose-code:rounded-md prose-code:font-normal ${language === 'ar' ? 'text-right' : ''}`}
              dangerouslySetInnerHTML={{ __html: section.content }}
            />
          </section>
        ))}
      </div>
      {chapter.exercises && chapter.exercises.length > 0 && (
        <Quiz exercises={chapter.exercises} onQuizComplete={onChapterComplete} />
      )}
    </div>
  );
};