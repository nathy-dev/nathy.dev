import { Suspense, useEffect, useState } from 'react';

import { TitleScreen } from './components/TitleScreen.tsx';
import { MuteButton } from './components/MuteButton.tsx';
import { useKeyboardControls } from './hooks/useKeyboardControls.ts';
import { useGameStore } from './store.ts';
import { Game } from './components/Game.jsx';

export const GameManager = () => {
  const [gameStarted, setGameStarted] = useState(false);

  const { mute } = useKeyboardControls();
  const { toggleMute } = useGameStore();

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
    <div id="game" className="h-full w-full">
      <Suspense fallback={null}>
        <MuteButton />
        {!gameStarted ? <TitleScreen onStartClick={() => handleGameStart()} /> : <Game />}
      </Suspense>
    </div>
  );
};
