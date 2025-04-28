import { Button } from './Button';
import { useThemeStore } from '../../store/themeStore';

type ThemeToggleProps = {
  className?: string;
};

export const ThemeToggle = ({ className = '' }: ThemeToggleProps) => {
  const { darkMode, toggleTheme } = useThemeStore();

  return (
    <Button
      onClick={toggleTheme}
      variant="secondary"
      size="icon"
      className={className}
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {darkMode ? (
        <span className="text-lg">☀️</span>
      ) : (
        <span className="text-lg">🌙</span>
      )}
    </Button>
  );
};