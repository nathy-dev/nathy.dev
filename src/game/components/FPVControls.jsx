import React, { useEffect, useRef } from 'react';
import { useThree } from '@react-three/fiber';
import { PointerLockControls } from '@react-three/drei';


const _FPVControls = () => {
  const { camera, gl } = useThree();
  const controls = useRef();


  useEffect(() => {
    document.addEventListener('click', () => {
      controls.current.lock();
    });
  }, []);

  return <PointerLockControls ref={controls} args={[camera, gl.domElement]} />;
};

export const FPVControls = React.memo(_FPVControls);
