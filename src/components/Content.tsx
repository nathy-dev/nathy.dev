import { useLocation } from 'wouter';
import { Choice } from './Choice.tsx';
import { PixelBox } from './PixelBox.tsx';

export const Content = () => {
  const [_, setLocation] = useLocation();

  return (
    <div className="bg-transparent absolute bottom-0 left-0 right-0 top-32 z-10 m-auto h-48 w-64 sm:w-128 xl:left-96 xl:top-0">
      <div className="flex justify-center align-middle">
        <div className="flex flex-row justify-center text-lg md:text-xl">
          <PixelBox variant="translucent">
            <div className="flex max-w-7xl flex-col space-y-2 text-center">
              <h2>Hi, I'm nathy (with a short 'a' like nathaniel)</h2>
              <span>I'm an amatuer dad and professional software developer</span>
              <div className="space-y-2">
                <h3 className="pt-2">To learn about me, check out my resume</h3>
                <div className="flex flex-row items-center justify-center gap-1 xs:items-start xs:gap-8 sm:gap-14">
                  <Choice icon="fight" handleChoiceClick={() => setLocation('/gamer')}>
                    Fight for it
                  </Choice>
                  <Choice icon="floppy" handleChoiceClick={() => {}}>
                    Just open pdf
                  </Choice>
                </div>
              </div>
            </div>
          </PixelBox>
        </div>
      </div>
    </div>
  );
};
