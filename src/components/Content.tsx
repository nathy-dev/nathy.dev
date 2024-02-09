import { Choice } from './Choice.tsx';
import { PixelBox } from './PixelBox.tsx';

export const Content = ({ theme }: { theme: 'light' | 'dark' | undefined }) => {
  return (
    <div className="flex flex-row justify-center text-lg sm:text-xl">
      <PixelBox>
        <div className="flex flex-col max-w-7xl text-center">
          <h2>Hi, I'm nathy</h2>
          <span>(pronounced with a short 'a' like nathaniel)</span>
          <p>I'm a software engineer, a hobbyist game developer, and a dad</p>
          <div>
            <h3>To continue, choose your adventure:</h3>
            <div className="flex flex-col xs:flex-row justify-center items-center xs:items-start gap-2 xs:gap-8 sm:gap-14">
              <div className="h-max">
                <Choice icon="fight" theme={theme}>
                  Fight for it
                </Choice>
              </div>
              <div className="">
                <Choice icon="floppy" theme={theme}>
                  Open pdf
                </Choice>
              </div>
            </div>
          </div>
        </div>
      </PixelBox>
    </div>
  );
};
