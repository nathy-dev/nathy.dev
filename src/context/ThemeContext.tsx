import { createContext } from 'react';

export type Theme = {
  display: 'light' | 'dark' | undefined;
  selected: 'light' | 'dark' | 'system' | undefined;
};

export const ThemeContext = createContext<
  Theme & { setTheme: React.Dispatch<React.SetStateAction<Theme>> | undefined }
>({
  display: undefined,
  selected: 'system',
  setTheme: undefined,
});
