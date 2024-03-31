import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Loader } from '@react-three/drei';

import Level01 from './levels/Level01.jsx';
import UI from './components/UI.jsx';
import ViewFinder from './components/ViewFinder.jsx';
import Gun from './components/Gun.jsx';

import './index.css';

export const Game = () => {
  return (
    <>
      <Suspense fallback={null}>
        <Loader />
        <UI>
          <ViewFinder />
          <Gun />
        </UI>
        <Canvas
          shadows={{
            type: 'BasicShadowMap',
          }}
          mode="concurrent"
          camera={{ position: [0, 5, 0], rotation: [0, 3.2, 0] }}
        >
          <Level01 />
        </Canvas>
      </Suspense>
    </>
  );
};
