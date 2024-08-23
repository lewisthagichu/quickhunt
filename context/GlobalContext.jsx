'use client';
import { createContext, useContext, useState } from 'react';

// Create context
const GlobalContext = createContext();

// Create context provider
export function GlobalContextProvider({ children }) {
  const [unreadCount, setUnreadCount] = useState(0);

  return (
    <GlobalContext.Provider value={{ unreadCount, setUnreadCount }}>
      {children}
    </GlobalContext.Provider>
  );
}

// Create a custom hook to access context
export function useGlobalContext() {
  return useContext(GlobalContext);
}
