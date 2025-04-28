import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type ThemeState = {
  darkMode: boolean;
  toggleTheme: () => void;
  initializeTheme: () => void;
};

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      darkMode: false, // Initial value will be overwritten by initializeTheme
      
      toggleTheme: () => {
        const newMode = !get().darkMode;
        set({ darkMode: newMode });
        document.documentElement.classList.toggle('dark', newMode);
      },
      
      initializeTheme: () => {
        // Check for saved preference first, then fall back to system preference
        const savedMode = get().darkMode;
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initialMode = savedMode !== undefined ? savedMode : systemPrefersDark;
        
        set({ darkMode: initialMode });
        document.documentElement.classList.toggle('dark', initialMode);
      }
    }),
    {
      name: 'theme-storage',
      version: 1,
      partialize: (state) => ({ darkMode: state.darkMode }),
    }
  )
);