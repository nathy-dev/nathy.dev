import { useCallback, useEffect, useMemo } from 'react';
import { useGameStore } from '../store.ts';

type SoundControl = {
  volume: number;
  loop: boolean;
};

export const useSound = (soundPath: string, { volume, loop }: SoundControl) => {
  const { isMuted } = useGameStore();

  const sound = useMemo(() => {
    const audio = new Audio(soundPath);
    audio.volume = volume ?? 1;
    audio.loop = loop;
    return audio;
  }, [soundPath, loop, volume]);

  const playSound = useCallback(() => {
    sound.play();
  }, [sound]);

  useEffect(() => {
    sound.muted = isMuted;
  }, [isMuted, sound]);

  return playSound;
};
