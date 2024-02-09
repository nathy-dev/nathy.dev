import '@fontsource/vt323';
import { TopBar } from './components/TopBar.tsx';
import { Content } from './components/Content.tsx';
import { useEffect, useState } from 'react';
import { Theme } from './types.ts';

function App() {
  const [theme, setTheme] = useState<Theme>({ display: undefined, selected: 'system' });

  useEffect(() => {
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
  }, [theme]);

  return (
    <div className="min-h-screen w-full text-text">
      <TopBar theme={theme} setTheme={setTheme} />
      <Content theme={theme.display} />
    </div>
  );
}

export default App;
