import { ThemeToggler, ThemeTogglerProps } from './ThemeToggler.tsx';

export const TopBar = ({ theme, setTheme }: ThemeTogglerProps) => {
  return (
    <div className="w-full flex flex-row justify-between items-start  p-4 text-xl sm:text-2xl leading-normal">
      <h1>nathy.dev</h1>
      <ThemeToggler theme={theme} setTheme={setTheme} />
    </div>
  );
};
