import '@fontsource/vt323';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  });

  return (
    <div className="min-h-screen w-full bg-wood-100 dark:bg-forest-900 flex">
      <h1 className="text-3xl font-bold text-forest-700 dark:text-wood-100">nathy.dev</h1>
    </div>
  );
}

export default App;
