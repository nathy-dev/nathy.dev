import { create } from 'zustand';

type State = {
  isCasting: boolean;
  health: number;
  shards: number;
  game: 'paused' | 'play' | 'over' | 'initial';
};

type Action = {
  cast: (isCasting: State['isCasting']) => void;
  takeDamage: () => void;
  collectShard: () => void;
  setGameState: (game: State['game']) => void;
};

export const useGameStore = create<State & Action>()((set) => ({
  isCasting: false,
  health: 5,
  shards: 0,
  game: 'initial',
  cast: () => set((prev) => ({ isCasting: !prev.isCasting })),
  takeDamage: () => set((prev) => ({ ...prev, health: prev.health - 1 })),
  collectShard: () => set((prev) => ({ ...prev, shards: prev.shards + 1 })),
  setGameState: (game) => set(() => ({ game })),
}));
