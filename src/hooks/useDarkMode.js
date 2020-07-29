import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (key, initialValue) => {
  const [darkMode, setDarkMode] = useLocalStorage(key, initialValue);

  useEffect(() => {
    const root = window.document.documentElement;
    darkMode === true
      ? root.setAttribute('data-theme', 'dark')
      : root.setAttribute('data-theme', 'light');
  }, [darkMode]);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  return [darkMode, toggleMode];
};
