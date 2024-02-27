import { Choice } from './Choice.tsx';
import { PixelBox } from './PixelBox.tsx';

export const Content = () => {
  return (
    <div className="z-10 h-48 w-64 sm:w-128 absolute left-0 right-0 top-32 bottom-0 xl:top-0 xl:left-96 bg-transparent m-auto">
      <div className="flex justify-center align-middle">
        <div className="flex flex-row justify-center text-lg md:text-xl">
          <PixelBox>
            <div className="flex flex-col max-w-7xl text-center space-y-2">
              <h2>Hi, I'm nathy (with a short 'a' like nathaniel)</h2>
              <span>I'm an amatuer dad and professional software developer</span>
              <div className="space-y-2">
                <h3 className="pt-2">To learn about me, check out my resume</h3>
                <div className="flex flex-row justify-center items-center xs:items-start gap-1 xs:gap-8 sm:gap-14">
                  <Choice icon="fight">Fight for it</Choice>
                  <Choice icon="floppy">Just open pdf</Choice>
                </div>
              </div>
            </div>
          </PixelBox>
        </div>
      </div>
    </div>
  );
};
