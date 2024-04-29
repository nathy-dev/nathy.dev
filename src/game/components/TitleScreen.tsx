import { PixelBox } from '../../components/PixelBox.tsx';
import { useKeyboardControls } from '../hooks/useKeyboardControls.ts';
import { useGameStore } from '../store.ts';
import { MuteButton } from './MuteButton.tsx';
import { useEffect } from 'react';

export const TitleScreen = () => {
  const { status, updateStatus } = useGameStore();
  const { start } = useKeyboardControls();

  useEffect(() => {
    if (start) {
      updateStatus('play');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start]);
  return (
    <div
      className={`z-50 flex h-full w-full flex-col items-center bg-brick bg-repeat text-center ${status === 'init' ? '' : 'hidden'}`}
    >
      <MuteButton />
      <div className="flex h-full max-w-xs flex-col items-center justify-center gap-4 md:max-w-lg">
        <PixelBox variant="game">
          <div className="flex flex-col items-center justify-center gap-2">
            <div>
              <div className="background-ghoul m-2 border-2 border-dotted" />
              <div>
                <h1 className="text-3xl">Resume Rummager</h1>
                <h2 className="text-xl">A nathy.dev dungeon crawling experience</h2>
              </div>
              <div className="background-ghoul m-2 border-2 border-dotted" />
            </div>
            <div className="flex w-fit flex-col items-center justify-center">
              <h3 className="text-xl">Controls</h3>
              <ul className="text-start">
                <li>W - Move forward</li>
                <li>S - Move backward</li>
                <li>A - Move left</li>
                <li>D - Move right</li>
                <li>SAPCE - Cast fireball</li>
                <li>M - Mute sound</li>
                <li>Mouse - Rotate camera</li>
                <li>ESC - End pointerlock</li>
              </ul>
            </div>
          </div>
        </PixelBox>
        <button onClick={() => updateStatus('play')}>
          <PixelBox variant="game">
            <div>Start game (enter)</div>
          </PixelBox>
        </button>
      </div>
    </div>
  );
};
