import { Suspense, lazy, useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';

import { Map } from './map/Map.jsx';
import { UI } from './components/UI.jsx';
import { Staff } from './components/Staff.tsx';
import { TitleScreen } from './components/TitleScreen.tsx';
import { PlayerUi } from './components/PlayerUi.tsx';
import { MuteButton } from './components/MuteButton.tsx';
import { Sound } from './util/constants.ts';
import { useKeyboardControls } from './hooks/useKeyboardControls.ts';
import { useGameStore } from './store.ts';

const LazyAudio = lazy(() => import('./components/Audio.tsx'));

const Game = () => {
  const [gameStarted, setGameStarted] = useState(false);

  const { mute } = useKeyboardControls();
  const { toggleMute } = useGameStore();
  const balladRef = useRef(null);

  const handleGameStart = () => {
    setGameStarted(true);
  };

  useEffect(() => {
    if (mute) {
      toggleMute();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mute]);

  return (
    <div className="h-full w-full">
      {gameStarted ? (
        <>
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
        </>
      ) : (
        <>
          <MuteButton />
          <TitleScreen onStartClick={() => handleGameStart()} />
        </>
      )}
    </div>
  );
};

export default Game;
