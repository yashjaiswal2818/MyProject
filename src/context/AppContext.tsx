
import React, { createContext, useContext, useState } from 'react';

interface AppContextType {
  fact: string | null;
  isLoadingFact: boolean;
  fetchNewFact: () => Promise<void>;
  logToolUsage: (tool: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [fact, setFact] = useState<string | null>(null);
  const [isLoadingFact, setIsLoadingFact] = useState<boolean>(false);
  
  const apiUrl = process.env.NODE_ENV === 'production' 
    ? '/api'
    : 'http://localhost:3001/api';

  const fetchNewFact = async () => {
    setIsLoadingFact(true);
    try {
      const response = await fetch(`${apiUrl}/fact`);
      const data = await response.json();
      setFact(data.fact);
    } catch (error) {
      console.error('Error fetching fact:', error);
      setFact('Did you know? Time is relative, and so is server availability.');
    } finally {
      setIsLoadingFact(false);
    }
  };
  
  const logToolUsage = (tool: string) => {
    try {
      fetch(`${apiUrl}/log`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tool,
          timestamp: new Date().toISOString(),
        }),
      });
    } catch (error) {
      console.error('Error logging tool usage:', error);
    }
  };
  
  return (
    <AppContext.Provider value={{ fact, isLoadingFact, fetchNewFact, logToolUsage }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
