import { Suspense, lazy, useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Loader, useProgress } from '@react-three/drei';

import { Map } from '../map/Map.jsx';
import { UI } from './UI.jsx';
import { Staff } from './Staff.tsx';
import { PlayerUi } from './PlayerUi.tsx';
import { MuteButton } from './/MuteButton.tsx';
import { Sound } from '../util/constants.ts';

const LazyAudio = lazy(() => import('./Audio.tsx'));

export const Game = () => {
  const balladRef = useRef(null);
  const { progress, loaded } = useProgress();

  useEffect(() => {
    console.log(progress);
    console.log(loaded);
  }, [progress, loaded]);

  return (
    <Suspense fallback={<Loader />}>
      <UI>
        <Staff />
        <PlayerUi />
        <MuteButton />
      </UI>
      <Canvas
        shadows={{
          type: 'BasicShadowMap',
        }}
        mode="concurrent"
        camera={{ position: [0, 5, 0], rotation: [0, 3.2, 0] }}
      >
        <Map />
      </Canvas>
      <Suspense fallback={null}>
        <LazyAudio volume={1} loop={true} sound={Sound.ballad} audioRef={balladRef} />
      </Suspense>
    </Suspense>
  );
};
