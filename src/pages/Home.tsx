import '@fontsource/vt323';
import { TopBar } from '../components/TopBar.tsx';
import { Content } from '../components/Content.tsx';
import { GameboyWrapper } from '../components/GameboyWrapper.tsx';

export const Home = () => {
  return (
    <>
      <TopBar />
      <div className="relative m-auto h-full w-full max-w-[1400px]">
        <GameboyWrapper />
        <Content />
      </div>
    </>
  );
};
