import { useCallback, useEffect, useState } from 'react';

const CHARACTER_SPRITE_SHEET_PATH = '../../../public/sprites/player.png';

type PlayerState = 'jumping' | 'running' | 'idle';

type SpriteProps = {
  frame: number;
  ctx: CanvasRenderingContext2D;
};

export const Player = ({ frame, ctx }: SpriteProps) => {
  const [playerState, setPlayerState] = useState<PlayerState>('idle');

  const draw = useCallback(() => {
    const character = document.createElement('img');
    character.src = CHARACTER_SPRITE_SHEET_PATH;
    ctx.drawImage(character, 16, 16, 32, 32, 0, 0, 32, 32);
  }, [ctx]);
};
