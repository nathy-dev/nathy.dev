import { useCallback, useEffect, useMemo } from 'react';
import { useGameStore } from '../store.ts';

type SoundControl = {
  volume: number;
  loop: boolean;
};

export const useSound = (soundPath: string, { volume, loop }: SoundControl) => {
  const { isMuted } = useGameStore();

  const sound = useMemo(() => new Audio(soundPath), [soundPath]);

  const playSound = useCallback(() => {
    sound.play();
  }, [sound]);

  useEffect(() => {
    sound.volume = volume ?? 1;
    sound.loop = loop;
    sound.muted = isMuted;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMuted]);

  return playSound;
};
