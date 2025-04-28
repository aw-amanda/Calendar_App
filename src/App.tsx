import { useEffect } from 'react';
import { useThemeStore } from './store/themeStore';
import { Layout } from './layout/Layout';
import { CalendarProvider } from './context/CalendarProvider';

export const App = () => {
  const { darkMode, initializeTheme } = useThemeStore();

  useEffect(() => {
    initializeTheme();
  }, [initializeTheme]);

  return (
    <div className={`min-h-screen max-h-sreen overflow-hidden bg-color txt-color transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      <CalendarProvider>
        <Layout />
      </CalendarProvider>
    </div>
  );
};