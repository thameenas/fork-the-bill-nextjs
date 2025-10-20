'use client';

import { useState, useEffect } from 'react';

const PERSON_NAME_KEY = 'fork-the-bill-person-name';

export const usePersonName = (): [string, (name: string) => void] => {
  const [personName, setPersonNameState] = useState<string>('');

  useEffect(() => {
    // Only access localStorage on the client side
    if (typeof window !== 'undefined') {
      try {
        const savedName = localStorage.getItem(PERSON_NAME_KEY);
        if (savedName) {
          setPersonNameState(savedName);
        }
      } catch (error) {
        // Silently handle localStorage errors
      }
    }
  }, []);

  const setPersonName = (name: string) => {
    setPersonNameState(name);
    
    // Only access localStorage on the client side
    if (typeof window !== 'undefined') {
      try {
        if (name.trim()) {
          localStorage.setItem(PERSON_NAME_KEY, name.trim());
        } else {
          localStorage.removeItem(PERSON_NAME_KEY);
        }
      } catch (error) {
        // Silently handle localStorage errors
      }
    }
  };

  return [personName, setPersonName];
};
