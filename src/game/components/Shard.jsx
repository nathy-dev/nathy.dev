import React, { useCallback, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { throttle } from '../util/throttle.ts';

import { shard } from '../util/textures.ts';
import pickUpSound from '../sounds/coin.wav';
import { calcDistance } from '../physics/calcDistance.ts';
import { useGameStore } from '../store.ts';
import { useSound } from '../hooks/useSound.ts';

const _Shard = ({ initialPosition }) => {
  const { collectShard, shards, updateStatus } = useGameStore();
  const [collected, setCollected] = useState(false);
  const ref = useRef();

  const playShardCollect = useSound(pickUpSound, { volume: 1, loop: false });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const shardControl = useCallback(
    throttle(async (scene, camera) => {
      ref.current?.lookAt(camera.position);

      // Player should always be first thing in scene
      const player = scene.children[1].position;

      const collision =
        calcDistance(player, {
          x: initialPosition[0],
          y: initialPosition[1],
          z: initialPosition[2],
        }) < 1;
      ``;

      if (collision && !collected) {
        playShardCollect();
        // Its cheaper to hide the shard in the floor than it is to unmount it from the scene.
        ref.current.position.y -= 1;
        setCollected(true);
        collectShard();
      }

      if (shards === 5) {
        updateStatus('victory');
      }
    }, 100),
    [collected, shards],
  );

  useFrame(({ scene, camera }) => shardControl(scene, camera));

  return (
    <mesh position={initialPosition} ref={ref} name="shard" rotation={[-Math.PI / 2, 0, 0]}>
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
