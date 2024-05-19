import { useEffect } from 'react';
import { Choice } from '../../components/Choice.tsx';
import { PixelBox } from '../../components/PixelBox.tsx';
import { useGameStore } from '../store.ts';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const VictoryOverlay = ({ controlRef }: { controlRef: React.RefObject<any> }) => {
  const { status } = useGameStore();

  useEffect(() => {
    if (status === 'victory') {
      controlRef.current.unlock();
    }
  });

  if (status !== 'victory') return null;

  return (
    <div className={`w-content absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center`}>
      <PixelBox variant="game">
        <div className="flex flex-col items-center gap-8">
          <h1 className="flex flex-row gap-4 text-xl">
            <img src="./resume.png" alt="resume-collected" /> Resume Rummaged!
            <img src="./resume.png" alt="resume-collected" />
          </h1>
          <div className="flex flex-col items-center">
            <p>You collected all the shards and repaired the resume, well done!</p>
            <p>You've earned this download link fair and square:</p>
          </div>
          <Choice
            icon="chest"
            handleChoiceClick={() => {
              window.open('resume.pdf', '_blank');
            }}
          >
            Open treasure?
          </Choice>
        </div>
      </PixelBox>
    </div>
  );
};
