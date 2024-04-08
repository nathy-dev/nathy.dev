import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Loader } from '@react-three/drei';

import { Map } from './map/Map.jsx';
import UI from './components/UI.jsx';
import { Staff } from './components/Staff.tsx';
import { PlayerUi } from './components/PlayerUi.tsx';
import { TitleScreen } from './components/TitleScreen.tsx';

export const Game = () => {
  return (
    <>
      {/* <Suspense fallback={null}>
        <Loader />
        <UI>
          <Staff />
          <PlayerUi />
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
      </Suspense> */}
      <TitleScreen />
    </>
  );
};
