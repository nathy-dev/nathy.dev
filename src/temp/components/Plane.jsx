import React from 'react';
import { Plane, useTexture } from '@react-three/drei';
import { floor } from '../utils/textureManager';
import floorImg from '../images/floor.png';
import { RepeatWrapping } from 'three';

const PlaneOb = ({ position, rotation }) => {
  const texture = useTexture(floorImg);
  texture.repeat.set(200, 200);
  texture.wrapS = texture.wrapT = RepeatWrapping;
  return (
    <Plane position={position} rotation={rotation} args={[200, 200]} name="plane" receiveShadow>
      <meshStandardMaterial attach="material" map={texture} />
    </Plane>
  );
};

export default React.memo(PlaneOb);
