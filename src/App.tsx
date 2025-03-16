import React from 'react';
import { ThemeProvider } from './Context/Context';
import CardList from './Components/CardList';
import CategoryList from './Components/CategoryList';
import { useTheme } from './Context/Context';
import styles from './Components/Card/Card.module.scss';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className={styles.themeSwitcher}>
      {theme === 'light' ? '🌙 Темная тема' : '☀ Светлая тема'}
    </button>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div>
        <ThemeSwitcher />
        <CardList />
        <CategoryList />
      </div>
    </ThemeProvider>
  );
};

export default App;
