import { useState, useEffect } from 'react';

type Movement = 'moveForward' | 'moveBackward' | 'moveLeft' | 'moveRight' | 'action' | 'start';
type SpecialKey = 'KeyW' | 'KeyS' | 'KeyA' | 'KeyA' | 'KeyD' | 'Space' | 'KeyN' | 'KeyM' | 'KeyN' | 'Enter';
type MovementMap = {
  moveForward: number;
  moveBackward: number;
  moveLeft: number;
  moveRight: number;
  action: number;
  mute: number;
  start: number;
  lastMovement: Movement | null;
};

const movementByValue = (movement: Movement): number => {
  const value = 10;
  const actions: Omit<MovementMap, 'lastMovement'> = {
    moveForward: -value,
    moveBackward: value,
    moveLeft: -value,
    moveRight: value,
    action: value,
    mute: value,
    start: value,
  };
  return actions[movement];
};

const movementByKey = (key: SpecialKey): Movement => {
  const keys = {
    KeyW: 'moveForward',
    KeyS: 'moveBackward',
    KeyA: 'moveLeft',
    KeyD: 'moveRight',
    Space: 'action',
    KeyN: 'pause',
    KeyM: 'mute',
    Enter: 'start',
  };
  return keys[key] as Movement;
};

export const useKeyboardControls = () => {
  const [movement, setMovement] = useState<MovementMap>({
    moveForward: 0,
    moveBackward: 0,
    moveLeft: 0,
    moveRight: 0,
    action: 0,
    mute: 0,
    start: 0,
    lastMovement: null,
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const keyPressed = e.code as SpecialKey;
      if (movementByKey(keyPressed)) {
        setMovement((prev) => ({
          ...prev,
          [movementByKey(e.code as SpecialKey)]: movementByValue(movementByKey(keyPressed)),
          lastMovement: movementByKey(keyPressed),
        }));
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      const keyPressed = e.code as SpecialKey;
      if (movementByKey(keyPressed)) {
        setMovement((prev) => ({
          ...prev,
          [movementByKey(keyPressed)]: 0,
        }));
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return movement;
};
