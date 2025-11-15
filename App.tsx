import React, { useState, useContext, useEffect } from 'react';
import { LanguageContext } from './contexts/LanguageContext';
import { BookSelection } from './components/BookSelection';
import { LearningInterface } from './components/LearningInterface';

type BookKey = 'hafs' | 'warsh';

const App: React.FC = () => {
  const [selectedBook, setSelectedBook] = useState<BookKey | null>(() => {
    return localStorage.getItem('tajweed-book') as BookKey | null;
  });

  const { setLanguage, language, t } = useContext(LanguageContext);

  // Update document title for SEO
  useEffect(() => {
    if (selectedBook) {
      const bookTitle = selectedBook === 'hafs' ? t('bookHafsTitle') : t('bookWarshTitle');
      document.title = `${bookTitle} - OpenTajweed`;
    } else {
      document.title = 'OpenTajweed - Learn Tajweed Rules for Quran Recitation';
    }
  }, [selectedBook, language, t]);

  useEffect(() => {
    if (selectedBook) {
      localStorage.setItem('tajweed-book', selectedBook);
      // Auto-switch to Arabic for Warsh since it's Arabic-only content
      if (selectedBook === 'warsh') {
        setLanguage('ar');
      }
    } else {
      localStorage.removeItem('tajweed-book');
    }
  }, [selectedBook, setLanguage]);

  if (!selectedBook) {
    return <BookSelection onSelectBook={setSelectedBook} />;
  }

  return <LearningInterface selectedBook={selectedBook} onGoBack={() => setSelectedBook(null)} />;
};

export default App;
