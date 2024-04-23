import { useState } from 'react';
import { PixelBox } from './PixelBox.tsx';
import { Icons } from './Icon/index.tsx';
import { useThemeContext } from '../context/useThemeContext.tsx';

export const ThemeToggler = () => {
  const [showModal, setShowModal] = useState(false);

  const { displayTheme, selectedTheme, setTheme } = useThemeContext();

  const handleModalClick = () => {
    setShowModal((prev) => !prev);
  };

  const handleThemeClick = (theme: 'light' | 'dark' | 'system') => {
    localStorage.setItem('theme', theme);

    const currTheme =
      theme === 'system' ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') : theme;

    if (currTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    setTheme({
      display: currTheme,
      selected: theme,
    });
    handleModalClick();
  };

  return (
    <div>
      <button onClick={handleModalClick}>
        {
          <img
            src={displayTheme && selectedTheme && Icons[displayTheme][selectedTheme]}
            alt={selectedTheme}
            className="h-6 w-6 object-cover"
          />
        }
      </button>
      {showModal && (
        <div className="relative z-50">
          <div className="absolute  right-0 mt-4 bg-background">
            <PixelBox>
              <button
                onClick={() => {
                  handleThemeClick('dark');
                }}
                className="w-max"
              >
                <div className="flex flex-row items-center justify-start gap-2">
                  <img
                    src={displayTheme && Icons[displayTheme].dark}
                    alt="dark mode"
                    className="h-5 w-5 object-cover"
                  />
                  <span
                    className={`${
                      selectedTheme === 'dark' ? 'underline' : ''
                    } decoration-tangerine hover:underline hover:decoration-text`}
                  >
                    dark
                  </span>
                </div>
              </button>
              <button
                onClick={() => {
                  handleThemeClick('light');
                }}
                className="w-max"
              >
                <div className="flex flex-row items-center justify-start gap-2">
                  <img
                    src={displayTheme && Icons[displayTheme].light}
                    alt="light mode"
                    className="h-5 w-5 object-cover"
                  />
                  <span
                    className={`${
                      selectedTheme === 'light' ? 'underline' : ''
                    } decoration-tangerine hover:underline hover:decoration-text`}
                  >
                    light
                  </span>
                </div>
              </button>
              <button
                onClick={() => {
                  handleThemeClick('system');
                }}
                className="w-max"
              >
                <div className="flex flex-row items-center justify-start gap-2">
                  <img
                    src={displayTheme && Icons[displayTheme].system}
                    alt="system set"
                    className="h-5 w-5 object-cover"
                  />
                  <span
                    className={`${
                      selectedTheme === 'system' ? 'underline' : ''
                    } decoration-tangerine hover:underline hover:decoration-text`}
                  >
                    system
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
