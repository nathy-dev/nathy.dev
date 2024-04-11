import { PixelBox } from '../../components/PixelBox.tsx';
import { MuteButton } from './MuteButton.tsx';

export const TitleScreen = ({ onStartClick }: { onStartClick: () => void }) => {
  return (
    <div className="w-full h-full bg-brick bg-repeat flex flex-col items-center text-center">
      <MuteButton />
      <div className="max-w-xs md:max-w-lg h-full flex flex-col items-center justify-center gap-4">
        <PixelBox variant="game">
          <div className="flex flex-col gap-2 items-center justify-center">
            <div>
              <div className="border-2 border-dotted background-ghoul m-2" />
              <div>
                <h1 className="text-3xl">Resume Rummager</h1>
                <h2 className="text-xl">A nathy.dev dungeon crawling experience</h2>
              </div>
              <div className="border-2 border-dotted background-ghoul m-2" />
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
                <li>N - Pause Game</li>
                <li>Mouse - Rotate camera</li>
                <li>ESC - End pointerlock</li>
              </ul>
            </div>
          </div>
        </PixelBox>
        <button onClick={() => onStartClick()}>
          <PixelBox variant="game">Start game</PixelBox>
        </button>
      </div>
    </div>
  );
};
