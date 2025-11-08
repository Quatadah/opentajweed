import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { ThemeContext } from '../contexts/ThemeContext';
import { CloseIcon } from './Icons';
import { Sun, Moon, Monitor } from 'lucide-react';
import { SettingsContext } from '../contexts/SettingsContext';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedBook: 'hafs' | 'warsh';
}

export const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose, selectedBook }) => {
  const { language, setLanguage, t } = useContext(LanguageContext);
  const { theme, setTheme } = useContext(ThemeContext);
  const { isSequentialUnlockEnabled, setIsSequentialUnlockEnabled } = useContext(SettingsContext);

  const handleLanguageChange = (lang: 'fr' | 'ar') => {
    setLanguage(lang);
  };

  const isLanguageSwitchDisabled = selectedBook === 'warsh';

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) {
          onClose();
        }
      }}
    >
      <DialogContent
        className="max-w-xl rounded-3xl border border-border/60 bg-card/90 p-6 shadow-2xl backdrop-blur"
        dir={language === 'ar' ? 'rtl' : 'ltr'}
      >
        <DialogClose asChild>
          <Button
            variant="ghost"
            size="icon"
            className={`absolute top-4 ${language === 'ar' ? 'left-4' : 'right-4'} text-muted-foreground hover:text-foreground`}
            aria-label={t('close')}
          >
            <CloseIcon className="h-5 w-5" />
          </Button>
        </DialogClose>

        <DialogHeader className={cn(
          "flex flex-col",
          language === 'ar' ? 'items-end text-right' : 'items-start text-left'
        )}>
          <DialogTitle className={cn(
            "text-2xl font-semibold w-full",
            language === 'ar' ? 'text-right' : 'text-left'
          )}>{t('settings')}</DialogTitle>
          <DialogDescription className={cn(
            "text-sm text-muted-foreground w-full",
            language === 'ar' ? 'text-right' : 'text-left'
          )}>
            {t('footerText')}
          </DialogDescription>
        </DialogHeader>

        <div className="mt-6 space-y-6">
          <div className="space-y-3">
            <div className={language === 'ar' ? 'text-right' : 'text-left'}>
              <h4 className="text-lg font-medium">{t('theme')}</h4>
            </div>
            <div className="grid grid-cols-3 gap-2 rounded-xl border border-border/50 bg-muted/40 p-2">
              {[
                { value: 'light', label: t('light'), icon: Sun },
                { value: 'dark', label: t('dark'), icon: Moon },
                { value: 'system', label: t('system'), icon: Monitor },
              ].map(({ value, label, icon: Icon }) => (
                <Button
                  key={value}
                  variant={theme === value ? 'default' : 'ghost'}
                  onClick={() => setTheme(value as 'light' | 'dark' | 'system')}
                  className="flex h-12 flex-col items-center justify-center gap-1 rounded-lg px-3 text-xs font-medium"
                >
                  <Icon className="h-5 w-5" />
                  {label}
                </Button>
              ))}
            </div>
          </div>

          <Separator className="opacity-60" />

          <div className="space-y-3">
            <div className={language === 'ar' ? 'text-right' : 'text-left'}>
              <h4 className="text-lg font-medium">{t('changeLanguage')}</h4>
              {isLanguageSwitchDisabled && (
                <p className="text-xs text-muted-foreground">
                  <Badge variant="outline" className="border-dashed">
                    {t('bookWarshTitle')}
                  </Badge>
                </p>
              )}
            </div>
            <div className={cn(
              "grid grid-cols-2 gap-3",
              isLanguageSwitchDisabled ? 'opacity-50' : '',
              language === 'ar' ? 'grid-flow-row-dense' : ''
            )}>
              <Button
                variant={language === 'fr' ? 'default' : 'outline'}
                onClick={() => handleLanguageChange('fr')}
                disabled={isLanguageSwitchDisabled}
                className={cn(language === 'ar' ? 'order-2' : 'order-1')}
              >
                Français
              </Button>
              <Button
                variant={language === 'ar' ? 'default' : 'outline'}
                onClick={() => handleLanguageChange('ar')}
                disabled={isLanguageSwitchDisabled}
                className={cn(language === 'ar' ? 'order-1' : 'order-2')}
              >
                العربية
              </Button>
            </div>
          </div>

          <Separator className="opacity-60" />

          <div className="rounded-2xl border border-border/60 bg-muted/40 p-4">
            {language === 'ar' ? (
              <div className="flex items-center justify-between gap-4">
                <div className="text-right flex-1">
                  <h4 className="text-base font-semibold text-right">{t('sequentialUnlock')}</h4>
                  <p className="mt-1 text-sm text-muted-foreground max-w-xs text-right">
                    {t('sequentialUnlockDescription')}
                  </p>
                </div>
                <Switch
                  checked={isSequentialUnlockEnabled}
                  onCheckedChange={setIsSequentialUnlockEnabled}
                />
              </div>
            ) : (
              <div className="flex items-center justify-between gap-4">
                <div className="text-left flex-1">
                  <h4 className="text-base font-semibold text-left">{t('sequentialUnlock')}</h4>
                  <p className="mt-1 text-sm text-muted-foreground max-w-xs text-left">
                    {t('sequentialUnlockDescription')}
                  </p>
                </div>
                <Switch
                  checked={isSequentialUnlockEnabled}
                  onCheckedChange={setIsSequentialUnlockEnabled}
                />
              </div>
            )}
          </div>
        </div>

        <div className={cn(
          "mt-8 space-y-4 rounded-2xl border border-border/50 bg-accent/30 p-4",
          language === 'ar' ? 'text-right' : 'text-left'
        )}>
          <h4 className={cn(
            "text-lg font-semibold text-foreground",
            language === 'ar' ? 'text-right' : 'text-left'
          )}>{t('creditsTitle')}</h4>
          <p className={cn(
            "text-sm text-muted-foreground",
            language === 'ar' ? 'text-right' : 'text-left'
          )}>
            <strong>{t('bookHafsTitle')}:</strong> {t('creditsHafsText')}
          </p>
          <p className={cn(
            "text-sm text-muted-foreground",
            language === 'ar' ? 'text-right' : 'text-left'
          )}>
            <strong>{t('bookWarshTitle')}:</strong> {t('creditsWarshText')}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};