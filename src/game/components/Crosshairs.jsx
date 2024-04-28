import { useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';
import { Vector3 } from 'three';

export const Crosshairs = () => {
  const dot = useRef();
  const { camera } = useThree();

  useFrame(() => {
    camera.updateProjectionMatrix();
    camera.updateWorldMatrix();
    const vector = new Vector3(0, 0, -0.8).unproject(camera);
    dot.current.position.set(...vector.toArray());
    dot.current.lookAt(camera.position);
  });

  return (
    <mesh ref={dot}>
      <ringGeometry args={[0.002, 0.003, 16]} />
      <meshBasicMaterial color={0xbe7bf9} />
    </mesh>
  );
};
