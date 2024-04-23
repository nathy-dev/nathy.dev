import { useGameStore } from '../store.ts';
import shard from '../images/shard.png';
import { PixelBox } from '../../components/PixelBox.tsx';

export const PlayerUi = () => {
  const { health, shards } = useGameStore();

  return (
    <div className="absolute left-4 top-2">
      <PixelBox variant="game">
        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-1">
            {Array.from(Array(5), (_, i) => {
              return <div key={i}>{i < health ? '❤️' : '☠️'}</div>;
            })}
          </div>
          <div className="flex flex-row gap-1 text-xl">
            <img src={shard} alt="" /> <span>{`${shards}/5`}</span>
          </div>
        </div>
      </PixelBox>
    </div>
  );
};
