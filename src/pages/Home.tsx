import '@fontsource/vt323';
import { TopBar } from '../components/TopBar.tsx';
import { Content } from '../components/Content.tsx';
import { Suspense, lazy } from 'react';

const LazyGameboy = lazy(() => import('../components/GameboyWrapper.tsx'));

export const Home = () => {
  return (
    <>
      <TopBar />
      <div className="relative m-auto h-full w-full max-w-[1400px]">
        <Suspense fallback={null}>
          <LazyGameboy />
        </Suspense>
        <Content />
      </div>
    </>
  );
};
