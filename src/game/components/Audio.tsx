/* eslint-disable jsx-a11y/media-has-caption */
import { useEffect, useRef } from 'react';
import { useGameStore } from '../store.ts';
import { Sound } from '../util/constants.ts';

type AudioProps = {
  volume: number;
  loop: boolean;
  sound: Sound;
  audioRef: React.RefObject<HTMLAudioElement>;
};

const Audio = ({ volume, loop, sound }: AudioProps) => {
  const { isMuted } = useGameStore();
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume ?? 1;
      audioRef.current.loop = loop;
      audioRef.current.muted = isMuted;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMuted]);

  return <audio ref={audioRef} src={sound} />;
};

export default Audio;
