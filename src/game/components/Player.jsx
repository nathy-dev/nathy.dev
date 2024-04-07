import React, { useCallback, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { throttle } from '../util/throttle.ts';
import { Vector3 } from 'three';

import { FPVControls } from './FPVControls.jsx';
import { useKeyboardControls } from '../hooks/useKeyboardControls.ts';
import { Bullet } from './Bullet.jsx';
import { calcDistance, closestObject } from '../physics/calcDistance.ts';
import { trimNumber } from '../util/trimNumber.ts';
import { useGameStore } from '../store.ts';

const PLAYER_SPEED = 0.09;
const PLAYER_BULLET_SPEED = 0.8;
const WORLD_COLLISION_MARGIN = 1.5;
const TOP_LEFT_BOUNDARY = -9999;
const BOTTOM_RIGHT_BOUNDARY = 9999;
const Y_POSITION = 1;

const cameraDirection = new Vector3();
const playerDirection = new Vector3();
const frontVector = new Vector3();
const sideVector = new Vector3();

// TODO: Consider to use Web Workers
// TODO: Split logic into smaller files

const _Player = () => {
  const { moveForward, moveBackward, moveLeft, moveRight, action } = useKeyboardControls();

  const [bullets, setBullets] = useState([]);

  const { cast, isCasting } = useGameStore();

  const playerRef = useRef();
  const torchRef = useRef();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const playerControl = useCallback(
    throttle(async (camera, scene, moveForward, moveBackward, moveRight, moveLeft, action) => {
      // player position
      const position = playerRef.current.position;

      ////////////////////////////
      ///// Player collisions
      ////////////////////////////

      const wallsCollisions = [
        ...scene.children[0].children,
        ...scene.children.filter((obj) => obj.name.includes('enemy')),
      ].filter((e) => {
        return calcDistance(e.position, position) <= WORLD_COLLISION_MARGIN;
      });

      const topCollisions = wallsCollisions.filter((e) => {
        return (
          (Math.ceil(e.position.x) === Math.ceil(position.x) || Math.floor(e.position.x) === Math.floor(position.x)) &&
          e.position.z <= position.z
        );
      });

      const topClosest =
        closestObject(
          topCollisions.map((e) => e.position.z),
          position.z,
          TOP_LEFT_BOUNDARY,
        ) + 1;

      const bottomCollisions = wallsCollisions.filter((e) => {
        return (
          (Math.ceil(e.position.x) === Math.ceil(position.x) || Math.floor(e.position.x) === Math.floor(position.x)) &&
          e.position.z >= position.z
        );
      });

      const bottomClosest =
        closestObject(
          bottomCollisions.map((e) => e.position.z),
          position.z,
          BOTTOM_RIGHT_BOUNDARY,
        ) - 1;

      const rightCollisions = wallsCollisions.filter((e) => {
        return (
          (Math.ceil(e.position.z) === Math.ceil(position.z) || Math.floor(e.position.z) === Math.floor(position.z)) &&
          e.position.x >= position.x
        );
      });

      const rightClosest =
        closestObject(
          rightCollisions.map((e) => e.position.x),
          position.x,
          BOTTOM_RIGHT_BOUNDARY,
        ) - 1;

      const leftCollisions = wallsCollisions.filter((e) => {
        return (
          (Math.ceil(e.position.z) === Math.ceil(position.z) || Math.floor(e.position.z) === Math.floor(position.z)) &&
          e.position.x <= position.x
        );
      });

      const leftClosest =
        closestObject(
          leftCollisions.map((e) => e.position.x),
          position.x,
          TOP_LEFT_BOUNDARY,
        ) + 1;

      // DIAGONAL FIXES LEFT
      const topLeftCollisions = wallsCollisions.filter((e) => {
        return (
          e.position.x === Math.round(position.x) - 1 &&
          e.position.z === Math.round(position.z) - 1 &&
          topClosest === TOP_LEFT_BOUNDARY + 1
        );
      });

      const angleTopLeftLimit = Number(topLeftCollisions[0]?.position.x + 1);

      const bottomLeftCollisions = wallsCollisions.filter((e) => {
        return (
          e.position.x === Math.round(position.x) - 1 &&
          e.position.z === Math.round(position.z) + 1 &&
          bottomClosest === BOTTOM_RIGHT_BOUNDARY - 1
        );
      });

      const angleBottomLeftLimit = Number(bottomLeftCollisions[0]?.position.x + 1);

      // DIAGONAL FIXES RIGHT
      const topRightCollisions = wallsCollisions.filter((e) => {
        return (
          e.position.x === Math.round(position.x) + 1 &&
          e.position.z === Math.round(position.z) - 1 &&
          topClosest === TOP_LEFT_BOUNDARY + 1
        );
      });

      const angleTopRightLimit = Number(topRightCollisions[0]?.position.x - 1);

      const bottomRightCollisions = wallsCollisions.filter((e) => {
        return (
          e.position.x === Math.round(position.x) + 1 &&
          e.position.z === Math.round(position.z) + 1 &&
          bottomClosest === BOTTOM_RIGHT_BOUNDARY - 1
        );
      });

      const angleBottomRightLimit = Number(bottomRightCollisions[0]?.position.x - 1);

      ////////////////////////////
      ///// Camera & direction manager
      ////////////////////////////

      camera.getWorldDirection(cameraDirection);

      frontVector.set(0, 0, (moveBackward ? 1 : 0) - (moveForward ? 1 : 0));
      sideVector.set((moveLeft ? 1 : 0) - (moveRight ? 1 : 0), 0, 0);

      playerDirection
        .subVectors(frontVector, sideVector)
        .normalize()
        .multiplyScalar(PLAYER_SPEED)
        .applyEuler(camera.rotation);

      camera?.position.set(position.x, Y_POSITION, position.z);

      ////////////////////////////
      ///// Player object position manager
      ////////////////////////////
      const xPosition = trimNumber(
        playerDirection.x + position.x,
        angleTopLeftLimit || angleBottomLeftLimit || leftClosest,
        angleTopRightLimit || angleBottomRightLimit || rightClosest,
      );
      const zPosition = trimNumber(playerDirection.z + position.z, topClosest, bottomClosest);
      playerRef.current.position.set(xPosition, Y_POSITION, zPosition);
      torchRef.current.position.set(xPosition, Y_POSITION, zPosition);

      ////////////////////////////
      ///// Bullets manager
      ////////////////////////////

      if (action && !isCasting) {
        const now = Date.now();
        if (now >= (playerRef.current.timeToShoot ?? 0)) {
          playerRef.current.timeToShoot = now + 800;
          cast();
          // Time for animation to finish
          await setTimeout(() => {
            const bulletPosition = camera.position.clone().add(cameraDirection.clone().multiplyScalar(1));

            // Bullet speed
            const bulletDirection = cameraDirection.clone().multiplyScalar(PLAYER_BULLET_SPEED);
            setBullets(() => [
              {
                id: now,
                position: [bulletPosition.x, bulletPosition.y, bulletPosition.z],
                forward: [bulletDirection.x, bulletDirection.y, bulletDirection.z],
              },
            ]);
          }, 800);

          await setTimeout(() => {
            cast();
          }, 1200);
        }
      }
    }, 10),
    [],
  );

  useFrame(({ camera, scene }) => playerControl(camera, scene, moveForward, moveBackward, moveRight, moveLeft, action));

  return (
    <>
      <FPVControls />
      <mesh ref={playerRef} position={[2, 0.5, 2]} name="player" />
      <pointLight ref={torchRef} intensity={30} castShadow={false} color={0xbe7bf9} decay={3} />
      {bullets.map((bullet) => {
        return (
          <Bullet
            key={bullet.id}
            velocity={bullet.forward}
            position={bullet.position}
            name="bullet"
            setBullets={setBullets}
            collisionMarker={['enemy', 'wall']}
            color={0xbe7bf9}
          />
        );
      })}
    </>
  );
};

export const Player = React.memo(_Player);
