import { useThemeContext } from '../context/useThemeContext.tsx';
import { Icons } from './Icon/index.tsx';

type ChoiceProps = {
  children: string;
  icon: 'fight' | 'floppy';
};

export const Choice = ({ children, icon }: ChoiceProps) => {
  const { displayTheme: theme } = useThemeContext();
  return (
    <button className="hover:animate-bounce pt-6">
      <div className="flex flex-col justify-center items-center w-32">
        <p>{children}</p>
        <div className="p-2">{theme && <img src={Icons[theme][icon]} alt={icon} />}</div>
      </div>
    </button>
  );
};
