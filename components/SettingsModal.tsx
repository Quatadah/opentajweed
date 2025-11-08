import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { ThemeContext } from '../contexts/ThemeContext';
import { CloseIcon, SunIcon, MoonIcon, ComputerDesktopIcon } from './Icons';
import { SettingsContext } from '../contexts/SettingsContext';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedBook: 'hafs' | 'warsh';
}

export const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose, selectedBook }) => {
  const { language, setLanguage, t } = useContext(LanguageContext);
  const { theme, setTheme } = useContext(ThemeContext);
  const { isSequentialUnlockEnabled, setIsSequentialUnlockEnabled } = useContext(SettingsContext);

  if (!isOpen) return null;

  const handleLanguageChange = (lang: 'fr' | 'ar') => {
    setLanguage(lang);
  };

  const isLanguageSwitchDisabled = selectedBook === 'warsh';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/50 dark:bg-background/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-card text-card-foreground rounded-lg shadow-xl p-6 w-full max-w-lg m-4 relative border border-border"
        onClick={(e) => e.stopPropagation()}
        dir={language === 'ar' ? 'rtl' : 'ltr'}
      >
        <button
          onClick={onClose}
          className={`absolute top-3 ${language === 'ar' ? 'left-3' : 'right-3'} text-muted-foreground hover:text-foreground`}
          aria-label={t('close')}
        >
          <CloseIcon className="h-6 w-6" />
        </button>
        <h3 className="text-xl font-semibold text-foreground mb-6">{t('settings')}</h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-medium text-card-foreground mb-3">{t('theme')}</h4>
            <div className="grid grid-cols-3 gap-2 p-1 bg-muted rounded-lg">
              {[
                { value: 'light', label: t('light'), icon: SunIcon },
                { value: 'dark', label: t('dark'), icon: MoonIcon },
                { value: 'system', label: t('system'), icon: ComputerDesktopIcon },
              ].map(({ value, label, icon: Icon }) => (
                <button
                  key={value}
                  onClick={() => setTheme(value as 'light' | 'dark' | 'system')}
                  className={`flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    theme === value
                      ? 'bg-primary text-primary-foreground shadow'
                      : 'text-muted-foreground hover:bg-background'
                  }`}
                >
                  <Icon className="w-5 h-5"/>
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium text-card-foreground mb-3">{t('changeLanguage')}</h4>
            <div className={`space-y-3 ${isLanguageSwitchDisabled ? 'opacity-50' : ''}`}>
              <button
                onClick={() => handleLanguageChange('fr')}
                disabled={isLanguageSwitchDisabled}
                className={`w-full px-4 py-2 rounded-md text-left font-medium transition-colors ${
                  language === 'fr' ? 'bg-primary text-primary-foreground' : 'bg-muted hover:bg-accent'
                } disabled:cursor-not-allowed`}
              >
                Français
              </button>
              <button
                onClick={() => handleLanguageChange('ar')}
                disabled={isLanguageSwitchDisabled}
                className={`w-full px-4 py-2 rounded-md text-right font-medium transition-colors ${
                  language === 'ar' ? 'bg-primary text-primary-foreground' : 'bg-muted hover:bg-accent'
                } disabled:cursor-not-allowed`}
              >
                العربية
              </button>
            </div>
          </div>

           <div>
            <h4 className="text-lg font-medium text-card-foreground mb-3">{t('sequentialUnlock')}</h4>
            <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground max-w-xs">{t('sequentialUnlockDescription')}</p>
              <button
                onClick={() => setIsSequentialUnlockEnabled(!isSequentialUnlockEnabled)}
                className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-card ${
                  isSequentialUnlockEnabled ? 'bg-primary' : 'bg-input'
                }`}
              >
                <span
                  className={`inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                    isSequentialUnlockEnabled ? (language === 'ar' ? '-translate-x-5' : 'translate-x-5') : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-border">
            <h4 className="text-lg font-semibold text-foreground mb-2">{t('creditsTitle')}</h4>
            <div className="text-sm text-muted-foreground space-y-2">
              <p><strong>{t('bookHafsTitle')}:</strong> {t('creditsHafsText')}</p>
              <p><strong>{t('bookWarshTitle')}:</strong> {t('creditsWarshText')}</p>
            </div>
        </div>
      </div>
    </div>
  );
};