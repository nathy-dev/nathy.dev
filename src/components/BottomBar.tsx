import { PixelBox } from './PixelBox.tsx';

export const BottomBar = ({
  showContent,
  setShowContent,
}: {
  showContent: boolean;
  setShowContent: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="absolute bottom-16 left-0 z-50 flex w-full flex-row  items-center justify-center p-4 text-xl leading-normal sm:text-2xl">
      <button
        className="w-64"
        onClick={() => {
          setShowContent(!showContent);
        }}
      >
        <PixelBox>
          <p className="">{showContent ? 'collapse' : 'learn more'}</p>
        </PixelBox>
      </button>
    </div>
  );
};
