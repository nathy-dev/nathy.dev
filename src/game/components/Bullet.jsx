import React, { useRef, useCallback, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { throttle } from '../util/throttle.ts';
import { calcDistance } from '../physics/calcDistance.ts';
import fireSound from '../sounds/fire.mp3';
import { useGameStore } from '../store.ts';
import { useSound } from '../hooks/useSound.ts';

const _Bullet = ({ position, velocity, name, setBullets, collisionMarker, color }) => {
  const playFire = useSound(fireSound, { volume: 0.4, loop: false });

  const ref = useRef();

  const { takeDamage, health, updateStatus } = useGameStore();

  useEffect(() => {
    playFire();
  }, []);

  const bulletControl = useCallback(
    throttle(async (scene) => {
      const position = ref.current?.position;

      const collisions = [...scene.children[0].children, ...scene.children].filter((e) => {
        return (
          calcDistance(e.position, position) <= 0.8 &&
          e.name.match(new RegExp('\\b(' + collisionMarker.join('|') + ')\\b', 'ig'))
        );
      });

      if (collisions.length) {
        setBullets([]);
        collisions
          .filter((collision) => collision.name === 'player')
          .forEach((_collision) => {
            takeDamage();
          });

        if (health <= 1) {
          updateStatus('gameover');
        }
      } else {
        ref?.current?.position.set(velocity[0] + position?.x, velocity[1] + position?.y, velocity[2] + position?.z);
      }
    }, 10),
    [health],
  );

  useFrame(({ scene }) => bulletControl(scene));

  return (
    <mesh ref={ref} position={position} name={name}>
      <sphereGeometry args={[0.05, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const isSamePosition = (prevProps, nextProps) => {
  return prevProps.position === nextProps.position;
};

export const Bullet = React.memo(_Bullet, isSamePosition);
