type UIProps = {
  children: React.ReactNode;
  gameStarted: boolean;
};

export const UI = ({ children, gameStarted }: UIProps) => {
  return <div className={gameStarted ? 'absolute left-0 top-0 z-50 h-full w-full' : 'hidden'}>{children}</div>;
};
