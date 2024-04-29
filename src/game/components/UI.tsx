import { useGameStore } from '../store.ts';

type UIProps = {
  children: React.ReactNode;
};

export const UI = ({ children }: UIProps) => {
  const { status } = useGameStore();
  return <div className={status !== 'init' ? 'absolute left-0 top-0 z-30 h-full w-full' : 'hidden'}>{children}</div>;
};
