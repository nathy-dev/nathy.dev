import React from 'react';
import { useAction } from '../store';
import gunIdle from '../images/gun-idle.png';
import gunShoot from '../images/gun-shoot.gif';

const Gun = () => {
  const isShooting = useAction((state) => state.isShooting);

  return (
    <div className="fixed bottom-0 flex-row justify-center content-center w-full h-96 border-background border-2">
      <div className="[image-rendering: pixelated] w-full h-full border-2 border-tangerine flex-col justify-center">
        {isShooting ? (
          <img src={gunShoot} className="h-full w-1/4 m-auto" alt="gun shoot" />
        ) : (
          <img src={gunIdle} className="h-full w-1/4 m-auto" alt="gun idle" />
        )}
      </div>
    </div>
  );
};

export default Gun;
