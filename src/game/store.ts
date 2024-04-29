import { create } from 'zustand';

type State = {
  isCasting: boolean;
  health: number;
  shards: number;
  isMuted: boolean;
  status: 'init' | 'victory' | 'play';
};

type Action = {
  cast: (isCasting: State['isCasting']) => void;
  takeDamage: () => void;
  collectShard: () => void;
  toggleMute: () => void;
  updateStatus: (status: State['status']) => void;
};

export const useGameStore = create<State & Action>()((set) => ({
  isCasting: false,
  health: 5,
  shards: 0,
  isMuted: false,
  status: 'init',
  cast: () => set((prev) => ({ isCasting: !prev.isCasting })),
  takeDamage: () => set((prev) => ({ ...prev, health: prev.health - 1 })),
  collectShard: () => set((prev) => ({ ...prev, shards: prev.shards + 1 })),
  toggleMute: () => set((prev) => ({ isMuted: !prev.isMuted })),
  updateStatus: (status: State['status']) => set((prev) => ({ ...prev, status: status })),
}));
