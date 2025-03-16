import React from 'react';
import { useTheme } from './Context';

const ThemeToggle: React.FC = () => {
  const { toggleTheme } = useTheme();
  
  return (
    <button onClick={toggleTheme}>
      Переключить тему
    </button>
  );
};

export default ThemeToggle;
