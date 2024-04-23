import { TopBar } from '../components/TopBar.tsx';

export const NotFound = () => {
  return (
    <>
      <TopBar />
      <div className="fit-content flex h-full flex-col items-center justify-center">
        <h1 className="text-xl">404: not found</h1>
        <p className="text-l">Maybe your princess is in another castle?</p>
      </div>
    </>
  );
};
