import '@fontsource/vt323';
import { TopBar } from './components/TopBar.tsx';
import { Content } from './components/Content.tsx';
import { useEffect, useState } from 'react';
import { Theme, ThemeContext } from './context/ThemeContext.tsx';

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
      <div className="min-h-screen w-full text-text">
        {!blockRender && (
          <>
            <TopBar />
            <Content />
          </>
        )}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
