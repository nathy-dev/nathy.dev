import React, { useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import { useRef } from 'react';
import fireSound from '../sounds/music.mp3';
import { PointerLockControls } from '@react-three/drei';

const sound = new Audio(fireSound);

const _FPVControls = () => {
  const { camera, gl } = useThree();
  const controls = useRef();

  useEffect(() => {
    document.addEventListener('click', () => {
      sound.play();
      controls.current.lock();
    });
  }, []);

  return <PointerLockControls ref={controls} args={[camera, gl.domElement]} />;
};

export const FPVControls = React.memo(_FPVControls);
