import { useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';
import { Vector3 } from 'three';

export const Crosshairs = () => {
  const dot = useRef();
  const { camera } = useThree();

  useFrame(() => {
    const vector = new Vector3(0, 0, -0.8).unproject(camera);
    dot.current.position.set(...vector.toArray());
  });

  return (
    <mesh ref={dot}>
      <sphereGeometry args={[0.002, 64, 32]} />
      <meshBasicMaterial color={'purple'} />
    </mesh>
  );
};
