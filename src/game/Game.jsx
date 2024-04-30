import { Suspense, lazy, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';

import { Map } from './map/Map.jsx';
import { UI } from './components/UI.tsx';
import { Staff } from './components/Staff.tsx';
import { TitleScreen } from './components/TitleScreen.tsx';
import { PlayerUi } from './components/PlayerUi.tsx';
import { MuteButton } from './components/MuteButton.tsx';
import { Sound } from './util/constants.ts';
import { useKeyboardControls } from './hooks/useKeyboardControls.ts';
import { useGameStore } from './store.ts';
import { VictoryOverlay } from './components/VictoryOverlay.tsx';
import { useRoute } from 'wouter';

const LazyAudio = lazy(() => import('./components/Audio.tsx'));

const Game = () => {
  const { mute } = useKeyboardControls();
  const { toggleMute, status, resetState } = useGameStore();
  const balladRef = useRef(null);

  const [match] = useRoute('/resume-rummager');

  useEffect(() => {
    if (match) {
      resetState();
    }
  }, []);

  useEffect(() => {
    if (mute) {
      toggleMute();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mute]);

  return (
    <div className="absolute h-full w-full overflow-hidden">
      <TitleScreen />
      <UI>
        <Staff />
        <PlayerUi />
        <MuteButton />
        <VictoryOverlay />
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
      {status !== 'init' && (
        <Suspense fallback={null}>
          <LazyAudio volume={1} loop={true} sound={Sound.ballad} audioRef={balladRef} />
        </Suspense>
      )}
    </div>
  );
};

export default Game;
