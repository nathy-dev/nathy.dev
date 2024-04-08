import staffIdle from '../images/staff.png';
import staffShoot from '../images/staffCast.gif';
import { useGameStore } from '../store.ts';

export const Staff = () => {
  const { isCasting } = useGameStore();

  return (
    <div className="w-full h-full">
      <div className="fixed top-1/2 right-1/2 w-8 h-8 rounded-full border-4 border-ghoul text-ghoul"></div>
      <div className="fixed bottom-0 flex-row justify-center content-center w-full h-64">
        <div className="[image-rendering: pixelated] w-full h-full flex-col justify-center">
          {isCasting ? (
            <img src={staffShoot} className="h-full m-auto aspect-auto" alt="wizard staff casting" />
          ) : (
            <img src={staffIdle} className=" h-full m-auto aspect-auto" alt="wizard staff idle" />
          )}
        </div>
      </div>
    </div>
  );
};
