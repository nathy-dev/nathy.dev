import { useThemeContext } from '../context/useThemeContext.tsx';
import { Icons } from './Icon/index.tsx';
import { PixelBox } from './PixelBox.tsx';

type ChoiceProps = {
  children: string;
  icon: 'fight' | 'floppy' | 'chest' | 'retry' | 'exit';
  handleChoiceClick: () => void;
};

export const Choice = ({ children, icon, handleChoiceClick }: ChoiceProps) => {
  const { displayTheme: theme } = useThemeContext();
  return (
    <button className="group flex flex-col items-center justify-center" onClick={() => handleChoiceClick()}>
      <PixelBox variant="button">
        <div className="p-1">{theme && <img src={Icons[theme][icon]} alt={icon} />}</div>
      </PixelBox>
      {children}
    </button>
  );
};
