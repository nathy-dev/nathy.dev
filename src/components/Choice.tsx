import { useThemeContext } from '../context/useThemeContext.tsx';
import { Icons } from './Icon/index.tsx';

type ChoiceProps = {
  children: string;
  icon: 'fight' | 'floppy';
};

export const Choice = ({ children, icon }: ChoiceProps) => {
  const { displayTheme: theme } = useThemeContext();
  return (
    <button className="border-2 border-background hover:border-text box-border">
      <div className="flex flex-col justify-center items-center w-32">
        <div className="p-2">{theme && <img src={Icons[theme][icon]} alt={icon} />}</div>
        <p>{children}</p>
      </div>
    </button>
  );
};
