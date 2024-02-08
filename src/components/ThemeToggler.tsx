import { useEffect, useState } from 'react';
import { PixelBox } from './PixelBox.tsx';

type Theme = 'light' | 'dark' | 'system';

export const ThemeToggler = () => {
  const [theme, setTheme] = useState<Theme>();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    switch (localStorage.theme) {
      case 'dark':
        setTheme('dark');
        document.documentElement.classList.add('dark');
        break;
      case 'light':
        setTheme('light');
        document.documentElement.classList.remove('dark');
        break;
      default:
        setTheme('system');
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
    }
  }, [theme]);

  const handleModalClick = () => {
    setShowModal((prev) => !prev);
  };

  const handleThemeClick = (theme: Theme) => {
    localStorage.setItem('theme', theme);
    setTheme(theme);
    handleModalClick();
  };

  return (
    <div>
      <button onClick={handleModalClick}>
        {theme === 'dark' ? <div>🌝</div> : theme === 'light' ? <div>🌞</div> : <div>💻</div>}
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
                  <div>🌝</div>
                  <span
                    className={`${
                      theme === 'dark' ? 'underline' : ''
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
                  <div>🌞</div>
                  <span
                    className={`${
                      theme === 'light' ? 'underline' : ''
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
                  <div>💻</div>
                  <span
                    className={`${
                      theme === 'system' ? 'underline' : ''
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
