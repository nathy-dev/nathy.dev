import { create } from 'zustand';

type State = {
  isCasting: boolean;
  health: number;
  shards: number;
  isMuted: boolean;
  game: 'init' | 'paused' | 'victory' | 'play';
};

type Action = {
  cast: (isCasting: State['isCasting']) => void;
  takeDamage: () => void;
  collectShard: () => void;
  toggleMute: () => void;
  setGameState: (state: State['game']) => void;
};

export const useGameStore = create<State & Action>()((set) => ({
  isCasting: false,
  health: 5,
  shards: 0,
  isMuted: false,
  game: 'init',
  cast: () => set((prev) => ({ isCasting: !prev.isCasting })),
  takeDamage: () => set((prev) => ({ ...prev, health: prev.health - 1 })),
  collectShard: () => set((prev) => ({ ...prev, shards: prev.shards + 1 })),
  toggleMute: () => set((prev) => ({ isMuted: !prev.isMuted })),
  setGameState: (state: State['game']) => set((prev) => ({ ...prev, game: state })),
}));
