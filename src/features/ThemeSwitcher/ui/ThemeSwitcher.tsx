import React from 'react';
import { useTheme } from '../../../shared/lib/theme/useTheme';
import { ButtonTheme } from '../../../shared/ui/Button/Button';

export const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <ButtonTheme
      variant="secondary"
      onClick={toggleTheme}
      className="theme-switcher"
    >
      <span className="theme-switcher__icon">
        {theme === 'light' ? '🌙' : '☀️'}
      </span>
      <span className="theme-switcher__text">
        {theme === 'light' ? 'Тёмная' : 'Светлая'}
      </span>
    </ButtonTheme>
  );
};