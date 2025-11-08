import React, { createContext, useState, useEffect, ReactNode } from 'react';

interface SettingsContextType {
  isSequentialUnlockEnabled: boolean;
  setIsSequentialUnlockEnabled: (enabled: boolean) => void;
}

export const SettingsContext = createContext<SettingsContextType>({
  isSequentialUnlockEnabled: true,
  setIsSequentialUnlockEnabled: () => {},
});

interface SettingsProviderProps {
  children: ReactNode;
}

export const SettingsProvider: React.FC<SettingsProviderProps> = ({ children }) => {
  const [isSequentialUnlockEnabled, setIsSequentialUnlockEnabled] = useState<boolean>(() => {
    const savedSetting = localStorage.getItem('tajweed-sequential-unlock');
    return savedSetting !== null ? JSON.parse(savedSetting) : true; // Default to true
  });

  useEffect(() => {
    localStorage.setItem('tajweed-sequential-unlock', JSON.stringify(isSequentialUnlockEnabled));
  }, [isSequentialUnlockEnabled]);

  return (
    <SettingsContext.Provider value={{ isSequentialUnlockEnabled, setIsSequentialUnlockEnabled }}>
      {children}
    </SettingsContext.Provider>
  );
};
