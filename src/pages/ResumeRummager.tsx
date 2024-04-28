import { lazy, Suspense } from 'react';
import { Loading } from '../game/components/Loading.tsx';

const LazyGame = lazy(() => import('../game/Game.jsx'));

export const ResumeRummager = () => (
  <Suspense fallback={<Loading />}>
    <LazyGame />
  </Suspense>
);
