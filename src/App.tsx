import '@fontsource/vt323';
import { TopBar } from './components/TopBar.tsx';
import { Content } from './components/Content.tsx';
import { useEffect, useState } from 'react';
import { Theme, ThemeContext } from './context/ThemeContext.tsx';
import { Canvas } from '@react-three/fiber';
import { Gameboy } from './components/Gameboy.tsx';

function App() {
  const [theme, setTheme] = useState<Theme>({
    display: undefined,
    selected: 'system',
  });

  const [blockRender, setBlockRender] = useState(true);

  useEffect(() => {
    if (theme.display) return;
    switch (localStorage.theme) {
      case 'dark':
        setTheme({ display: 'dark', selected: 'dark' });
        document.documentElement.classList.add('dark');
        break;
      case 'light':
        setTheme({ display: 'light', selected: 'light' });
        document.documentElement.classList.remove('dark');
        break;
      default:
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          setTheme({ display: 'dark', selected: 'system' });
          document.documentElement.classList.add('dark');
        } else {
          setTheme({ display: 'light', selected: 'system' });
          document.documentElement.classList.remove('dark');
        }
    }
    setBlockRender(false);
    // Intentionally only triggering on initial render
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeContext.Provider value={{ ...theme, setTheme }}>
      <div className="h-screen w-full text-text">
        {!blockRender && (
          <>
            <TopBar />
            <div className="h-screen w-full relative">
              <div className="z-0 h-3/4 w-3/4 absolute right-96">
                <Canvas>
                  <Gameboy />
                </Canvas>
              </div>
              <div className="z-10 h-96 w-96 absolute left-96 right-0 top-0 bottom-0 bg-transparent m-auto">
                <Content />
              </div>
            </div>
          </>
        )}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
