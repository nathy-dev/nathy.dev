import { useThemeContext } from '../context/useThemeContext.tsx';
import { Icons } from './Icon/index.tsx';
import { PixelBox } from './PixelBox.tsx';

type ChoiceProps = {
  children: string;
  icon: 'fight' | 'floppy';
};

export const Choice = ({ children, icon }: ChoiceProps) => {
  const { displayTheme: theme } = useThemeContext();
  return (
    <button className="flex flex-col justify-center items-center group">
      <PixelBox variant="button">
        <div className="p-1">{theme && <img src={Icons[theme][icon]} alt={icon} />}</div>
      </PixelBox>
      {children}
    </button>
  );
};
