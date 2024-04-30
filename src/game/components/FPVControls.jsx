import React, { useEffect } from 'react';
import { extend, useThree } from '@react-three/fiber';
import { useGameStore } from '../store.ts';
import { PointerLockControls } from 'three-stdlib';

extend({ PointerLockControls });
const _FPVControls = ({ controlRef }) => {
  const { camera, gl } = useThree();
  const { status } = useGameStore();

  useEffect(() => {
    document.addEventListener('click', () => {
      if (status === 'play') {
        controlRef.current.lock();
      }
    });
  }, [status, controlRef]);

  return <pointerLockControls ref={controlRef} args={[camera, gl.domElement]} pointerSpeed={0.5} />;
};

export const FPVControls = React.memo(_FPVControls, (prev, next) => prev.controlRef === next.controlRef);
