import { Icons } from './Icon/index.tsx';

type ChoiceProps = {
  children: string;
  icon: 'fight' | 'floppy';
  theme: 'light' | 'dark' | undefined;
};

export const Choice = ({ children, icon, theme }: ChoiceProps) => {
  return (
    <button className="border-2 border-background hover:border-text box-border">
      <div className="flex flex-col justify-center items-center w-32">
        <div className="p-2">{theme && <img src={Icons[theme][icon]} alt={icon} />}</div>
        <p>{children}</p>
      </div>
    </button>
  );
};
