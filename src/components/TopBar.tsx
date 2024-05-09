import { Link } from 'wouter';
import { ThemeToggler } from './ThemeToggler.tsx';

export const TopBar = () => {
  return (
    <div className="absolute left-0 top-0 z-50 flex w-full flex-row  items-center justify-between p-4 text-xl leading-normal sm:text-2xl">
      <Link href="/">
        <h1>nathy.dev</h1>
      </Link>
      <ThemeToggler />
    </div>
  );
};
