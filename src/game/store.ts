import { create } from 'zustand';

type State = {
  isCasting: boolean;
  health: number;
  shards: number;
  game: 'paused' | 'play' | 'over' | 'initial';
  isMuted: boolean;
};

type Action = {
  cast: (isCasting: State['isCasting']) => void;
  takeDamage: () => void;
  collectShard: () => void;
  setGameState: (game: State['game']) => void;
  toggleMute: () => void;
};

export const useGameStore = create<State & Action>()((set) => ({
  isCasting: false,
  health: 5,
  shards: 0,
  game: 'initial',
  isMuted: false,
  cast: () => set((prev) => ({ isCasting: !prev.isCasting })),
  takeDamage: () => set((prev) => ({ ...prev, health: prev.health - 1 })),
  collectShard: () => set((prev) => ({ ...prev, shards: prev.shards + 1 })),
  setGameState: (game) => set(() => ({ game })),
  toggleMute: () => set((prev) => ({ isMuted: !prev.isMuted })),
}));
