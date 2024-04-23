import { ReactNode } from 'react';
import { useGameStore } from '../store.ts';
import { PixelBox } from '../../components/PixelBox.tsx';

type OptionProps = {
  id: string;
  children: ReactNode;
  onClick: () => void;
  checked: boolean;
};

const Option = ({ id, children, onClick, checked }: OptionProps) => {
  return (
    <div className="flex flex-row items-center gap-2 text-left">
      <input type="checkbox" id={id} className="accent-ghoul" checked={checked} onChange={() => onClick()} />
      <label htmlFor={id}>{children}</label>
    </div>
  );
};

export const MuteButton = () => {
  const { isMuted, toggleMute } = useGameStore();

  return (
    <div className="absolute right-4 top-2">
      <PixelBox variant="game">
        <Option id="mute" checked={isMuted} onClick={toggleMute}>
          Mute
        </Option>
      </PixelBox>
    </div>
  );
};
