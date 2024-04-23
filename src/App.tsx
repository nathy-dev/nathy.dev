import '@fontsource/vt323';

import { useEffect, useState } from 'react';
import { Theme, ThemeContext } from './context/ThemeContext.tsx';
import { Route, Switch } from 'wouter';
import { Home } from './routes/Home.tsx';
import { Gamer } from './routes/Gamer.tsx';
import { NotFound } from './routes/NotFound.tsx';

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
            <Switch>
              <Route path="/">
                <Home />
              </Route>
              <Route path="/gamer">
                <Gamer />
              </Route>
              <Route>
                <NotFound />
              </Route>
            </Switch>
          </>
        )}

        {/* {!blockRender && (
          <>
            <TopBar />
            <div className="h-full w-full max-w-[1400px] relative m-auto">
              <GameboyWrapper />
              <Content />
            </div>
          </>
        )} */}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
