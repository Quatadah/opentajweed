import React, { useContext, useState, useEffect } from 'react';
import { BookOpenIcon } from './Icons';
import { LanguageContext } from '../contexts/LanguageContext';
import { content } from '../constants/content';

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
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-4 relative" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className={`absolute top-4 ${language === 'ar' ? 'left-4' : 'right-4'} flex space-x-2 ${language === 'ar' ? 'space-x-reverse' : ''}`}>
        <button
          onClick={() => handleLanguageChange('fr')}
          className={`px-3 py-1 text-sm font-semibold rounded-md transition-colors shadow-sm border border-border ${
            language === 'fr' ? 'bg-primary text-primary-foreground' : 'bg-card text-card-foreground hover:bg-accent'
          }`}
        >
          Français
        </button>
        <button
          onClick={() => handleLanguageChange('ar')}
          className={`px-3 py-1 text-sm font-semibold rounded-md transition-colors shadow-sm border border-border ${
            language === 'ar' ? 'bg-primary text-primary-foreground' : 'bg-card text-card-foreground hover:bg-accent'
          }`}
        >
          العربية
        </button>
      </div>

      <div className="text-center mb-8">
        <BookOpenIcon className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-foreground mb-2">{t('appTitle')}</h1>
        <p className="text-lg text-muted-foreground">{t('selectBook')}</p>
      </div>

      <div className="w-full max-w-4xl grid md:grid-cols-2 gap-6">
        {/* Riwayah Hafs */}
        <div className="bg-card p-6 rounded-lg shadow-md border border-border text-center flex flex-col">
          <h2 className="text-2xl font-bold text-primary mb-2">{t('bookHafsTitle')}</h2>
          <p className="text-muted-foreground flex-grow">{t('bookHafsDescription')}</p>
          
          <div className="mt-6 text-left" dir="ltr">
            <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium text-muted-foreground">{t('progressLabel')}</span>
                <span className="text-sm font-medium text-primary">{Math.round(progress.hafs)}%</span>
            </div>
            <div className="w-full bg-secondary rounded-full h-2.5">
                <div className="bg-primary h-2.5 rounded-full" style={{ width: `${progress.hafs}%` }}></div>
            </div>
          </div>

          <button
            onClick={() => onSelectBook('hafs')}
            className="mt-4 w-full px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-colors"
          >
            {t('startLearning')}
          </button>
        </div>

        {/* Riwayah Warsh */}
        <div className="bg-card p-6 rounded-lg shadow-md border border-border text-center flex flex-col">
          <h2 className="text-2xl font-bold text-primary mb-2">{t('bookWarshTitle')}</h2>
          <p className="text-muted-foreground flex-grow">{t('bookWarshDescription')}</p>

           <div className="mt-6 text-left" dir="ltr">
            <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium text-muted-foreground">{t('progressLabel')}</span>
                <span className="text-sm font-medium text-primary">{Math.round(progress.warsh)}%</span>
            </div>
            <div className="w-full bg-secondary rounded-full h-2.5">
                <div className="bg-primary h-2.5 rounded-full" style={{ width: `${progress.warsh}%` }}></div>
            </div>
          </div>
          
          <button
            onClick={() => onSelectBook('warsh')}
            className="mt-4 w-full px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-colors"
          >
            {t('startLearning')}
          </button>
        </div>
      </div>
       <footer className="text-center py-4 mt-8 text-muted-foreground text-sm">
          <p>{t('footerText')}</p>
        </footer>
    </div>
  );
};