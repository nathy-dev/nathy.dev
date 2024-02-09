import { useState } from 'react';
import { PixelBox } from './PixelBox.tsx';
import { Theme } from '../types.ts';
import { Icons } from './Icon/index.tsx';

export type ThemeTogglerProps = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
};

export const ThemeToggler = ({ theme, setTheme }: ThemeTogglerProps) => {
  const [showModal, setShowModal] = useState(false);

  const handleModalClick = () => {
    setShowModal((prev) => !prev);
  };

  const handleThemeClick = (theme: 'light' | 'dark' | 'system') => {
    localStorage.setItem('theme', theme);
    setTheme({
      display: theme === 'system' ? 'dark' : theme,
      selected: theme,
    });
    handleModalClick();
  };

  return (
    <div>
      <button onClick={handleModalClick}>
        {<img src={theme.display && theme.selected && Icons[theme.display][theme.selected]} alt={theme.selected} />}
      </button>
      {showModal && (
        <div className="z-50 relative">
          <div className="absolute  bg-background mt-2 p-2 right-0">
            <PixelBox>
              <button
                onClick={() => {
                  handleThemeClick('dark');
                }}
              >
                <div className="flex flex-row gap-2">
                  <img src={theme.display && Icons[theme.display].dark} alt="dark mode" />
                  <span
                    className={`${
                      theme.selected === 'dark' ? 'underline' : ''
                    } decoration-tangerine hover:decoration-text hover:underline`}
                  >
                    Dark
                  </span>
                </div>
              </button>
              <button
                onClick={() => {
                  handleThemeClick('light');
                }}
              >
                <div className="flex flex-row gap-2">
                  <img src={theme.display && Icons[theme.display].light} alt="light mode" />
                  <span
                    className={`${
                      theme.selected === 'light' ? 'underline' : ''
                    } decoration-tangerine hover:decoration-text hover:underline`}
                  >
                    Light
                  </span>
                </div>
              </button>
              <button
                onClick={() => {
                  handleThemeClick('system');
                }}
              >
                <div className="flex flex-row gap-2">
                  <img src={theme.display && Icons[theme.display].system} alt="system set" />
                  <span
                    className={`${
                      theme.selected === 'system' ? 'underline' : ''
                    } decoration-tangerine hover:decoration-text hover:underline`}
                  >
                    System
                  </span>
                </div>
              </button>
            </PixelBox>
          </div>
        </div>
      )}
    </div>
  );
};