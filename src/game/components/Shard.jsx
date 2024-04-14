import React, { useCallback, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { throttle } from '../util/throttle.ts';

import { shard } from '../util/textures.ts';
import pickUpSound from '../sounds/coin.wav';
import { calcDistance } from '../physics/calcDistance.ts';
import { useGameStore } from '../store.ts';
import { useSound } from '../hooks/useSound.ts';

const _Shard = ({ position, mapData, setCurrentMap }) => {
  const { collectShard, } = useGameStore();
  const ref = useRef();

  const playShardCollect = useSound(pickUpSound)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const shardControl = useCallback(
    throttle(async (scene, camera) => {
      ref.current?.lookAt(camera.position);

      // Player should always be first thing in scene
      const player = scene.children[1].position;

      const collision =
        calcDistance(player, {
          x: position[0],
          y: position[1],
          z: position[2],
        }) < 1;

      if (collision) {
        playShardCollect();
        let newMapData = [...mapData];
        newMapData[position[2]][position[0]] = '·';
        setCurrentMap(newMapData);
        collectShard();
      }
    }, 100),
    [],
  );

  useFrame(({ scene, camera }) => shardControl(scene, camera));

  return (
    <mesh position={position} ref={ref} name="shard" rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry attach="geometry" />
      <meshStandardMaterial attach="material" transparent={true} map={shard} />
      <ambientLight intensity={0.01} color={0xffdba1} castShadow={false} />
      <pointLight intensity={0.5} color={0xffdba1} decay={1} castShadow={false} />
    </mesh>
  );
};

const isSameType = (prevProps, nextProps) => {
  return prevProps.type === nextProps.type;
};

export const Shard = React.memo(_Shard, isSameType);
