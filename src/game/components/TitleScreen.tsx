import { PixelBox } from '../../components/PixelBox.tsx';

export const TitleScreen = () => {
  return (
    <div className="w-full h-full bg-brick bg-repeat flex flex-col items-center justify-center text-center gap-4">
      <PixelBox variant="game">
        <h1 className="text-3xl">Resume Rummager</h1>
        <h2 className="text-xl">A nathy.dev dungeon crawling experience</h2>
      </PixelBox>
      <PixelBox variant="game">
        <div>Start game</div>
      </PixelBox>
    </div>
  );
};
