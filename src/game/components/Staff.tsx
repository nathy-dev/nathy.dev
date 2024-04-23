import staffIdle from '../images/staff.png';
import staffShoot from '../images/staffCast.gif';
import { useGameStore } from '../store.ts';

export const Staff = () => {
  const { isCasting } = useGameStore();

  return (
    <div className="h-full w-full">
      <div className="fixed right-1/2 top-1/2 h-8 w-8 rounded-full border-4 border-ghoul text-ghoul"></div>
      <div className="fixed bottom-0 h-64 w-full flex-row content-center justify-center">
        <div className="[image-rendering: pixelated] h-full w-full flex-col justify-center">
          {isCasting ? (
            <img src={staffShoot} className="m-auto aspect-auto h-full" alt="wizard staff casting" />
          ) : (
            <img src={staffIdle} className=" m-auto aspect-auto h-full" alt="wizard staff idle" />
          )}
        </div>
      </div>
    </div>
  );
};
