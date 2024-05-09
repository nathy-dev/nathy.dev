import { useEffect } from 'react';
import { Choice } from '../../components/Choice.tsx';
import { PixelBox } from '../../components/PixelBox.tsx';
import { useGameStore } from '../store.ts';
import { useLocation } from 'wouter';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const DeathOverlay = ({ controlRef }: { controlRef: React.RefObject<any> }) => {
  const { status, resetState } = useGameStore();
  const [_, setLocation] = useLocation();

  useEffect(() => {
    if (status === 'gameover') {
      controlRef.current.unlock();
    }
  });

  if (status !== 'gameover') return null;

  return (
    <div className={`w-content absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform`}>
      <PixelBox variant="game">
        <div className="flex flex-col items-center gap-8">
          <h1 className="flex flex-row items-center gap-4 text-xl">
            <img src="./dead.png" alt="game-over" /> Game Over
            <img src="./dead.png" alt="game-over" />
          </h1>
          <div className="flex flex-col items-center">
            <p>Oof those skeletons pack a punch! Better luck next time.</p>
          </div>
          <div className="flex flex-row gap-16">
            <Choice
              icon="retry"
              handleChoiceClick={() => {
                location.reload();
              }}
            >
              Try again
            </Choice>
            <Choice
              icon="exit"
              handleChoiceClick={() => {
                setLocation('/');
                resetState();
              }}
            >
              Exit game
            </Choice>
          </div>
        </div>
      </PixelBox>
    </div>
  );
};
