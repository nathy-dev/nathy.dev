import { useGameStore } from '../store.ts';
import shard from '../images/shard.png';
import heart from '../images/heart.png';
import damaged from '../images/damaged.png';
import { PixelBox } from '../../components/PixelBox.tsx';

export const PlayerUi = () => {
  const { health, shards } = useGameStore();

  return (
    <div className="absolute left-4 top-2">
      <PixelBox variant="game">
        <div className="flex flex-col gap-2">
          <div className="flex flex-row">
            {Array.from(Array(5), (_, i) => {
              return <img key={i} src={i < health ? heart : damaged} alt="" className="w-8" />;
            })}
          </div>
          <div className="flex flex-row">
            {Array.from(Array(5), (_, i) => {
              return (
                <div key={i} className="h-8 w-8">
                  {i < shards ? <img src={shard} alt="" /> : <p className="text-center">?</p>}
                </div>
              );
            })}
          </div>
        </div>
      </PixelBox>
    </div>
  );
};
