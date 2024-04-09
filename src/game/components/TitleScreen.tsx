import { PixelBox } from '../../components/PixelBox.tsx';

export const TitleScreen = () => {
  return (
    <div className="w-full h-full bg-brick bg-repeat flex flex-col items-center text-center">
      <div className="max-w-xs md:max-w-lg h-full flex flex-col items-center justify-center gap-4">
        <PixelBox variant="game">
          <div className="flex flex-col gap-2">
            <div>
              <div className="border-2 border-dotted background-ghoul m-2" />
              <div>
                <h1 className="text-3xl">Resume Rummager</h1>
                <h2 className="text-xl">A nathy.dev dungeon crawling experience</h2>
              </div>
              <div className="border-2 border-dotted background-ghoul m-2" />
            </div>
            <div>
              <div className="flex flex-row gap-2">
                <input type="checkbox" id="mute" />
                <label htmlFor="mute">Disable sound</label>
              </div>
              <div className="flex flex-row gap-2">
                <input type="checkbox" id="performance" />
                <label htmlFor="performance">Reduce light effects (reccomended for low end mobile devices)</label>
              </div>
            </div>
          </div>
        </PixelBox>
        <PixelBox variant="game">
          <button>Start game</button>
        </PixelBox>
      </div>
    </div>
  );
};
