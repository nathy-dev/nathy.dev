import { ReactNode } from 'react';
import { PixelBox } from '../../components/PixelBox.tsx';

const Option = ({ id, children, onClick }: { id: string; children: ReactNode; onClick?: () => void }) => {
  return (
    <div className="flex flex-row gap-2 items-center text-left">
      <input type="checkbox" id={id} className="accent-ghoul" />
      <label htmlFor={id}>{children}</label>
    </div>
  );
};

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
              <Option id="mute">Disable sound</Option>
              <Option id="performance">Reduce light effects (reccomended for older mobile devices)</Option>
            </div>
          </div>
        </PixelBox>
        <button>
          <PixelBox variant="game">Start game</PixelBox>
        </button>
      </div>
    </div>
  );
};
