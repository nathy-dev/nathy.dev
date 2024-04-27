import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Loader } from '@react-three/drei';

import { Map } from './map/Map.jsx';
import { UI } from './components/UI.jsx';
import { Staff } from './components/Staff.tsx';
import { PlayerUi } from './components/PlayerUi.tsx';
import { TitleScreen } from './components/TitleScreen.tsx';
import { MuteButton } from './components/MuteButton.tsx';
import { useKeyboardControls } from './hooks/useKeyboardControls.ts';
import { useGameStore } from './store.ts';
import ballad from './sounds/ballad.mp3';
import { useSound } from './hooks/useSound.ts';

export const Game = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const playBallad = useSound(ballad, { volume: 1, loop: true });

  const { mute } = useKeyboardControls();
  const { toggleMute } = useGameStore();

  const handleGameStart = () => {
    setGameStarted(true);
    playBallad();
  };

  useEffect(() => {
    if (mute) {
      toggleMute();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mute]);

  return (
    <div id="game" className="h-full w-full">
      {!gameStarted ? (
        <TitleScreen onStartClick={() => handleGameStart()} />
      ) : (
        <Suspense fallback={null}>
          <Loader />
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
        </Suspense>
      )}
    </div>
  );
};
