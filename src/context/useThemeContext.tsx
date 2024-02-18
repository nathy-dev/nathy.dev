import { useContext } from 'react';
import { ThemeContext } from './ThemeContext.tsx';

export const useThemeContext = () => {
  const { selected, display, setTheme } = useContext(ThemeContext);

  if (!setTheme) {
    throw new Error('Error! Using theme context outside of provider.');
  }

  return { selectedTheme: selected, displayTheme: display, setTheme };
};
