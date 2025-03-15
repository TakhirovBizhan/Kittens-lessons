import { createContext, useState, useContext, ReactNode } from 'react';

type TThemeColor = {
  background: string;
  color: string;
};

const themes = {
  light: {
    background: '#ffffff',
    color: '#000000'
  },
  dark: {
    background: '#4D4D4D',
    color: '#ffffff'
  }
};

type ThemeContextType = {
  theme: TThemeColor;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: themes.light,
  toggleTheme: () => {}
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<TThemeColor>(themes.light);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === themes.light ? themes.dark : themes.light
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
