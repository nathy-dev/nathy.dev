import { Choice } from './Choice.tsx';
import { PixelBox } from './PixelBox.tsx';

export const Content = () => {
  return (
    <div className="z-10 h-48 w-64 sm:w-96 md:h-96 md:w-128 absolute left-0 right-0 top-0 bottom-96 xs:bottom-0 xl:left-96 bg-transparent m-auto">
      <div className="flex justify-center align-middle">
        <div className="flex flex-row justify-center text-lg sm:text-xl">
          <PixelBox>
            <div className="flex flex-col max-w-7xl text-center">
              <h2>Hi, I'm nathy</h2>
              <span>(pronounced with a short 'a' like nathaniel)</span>
              <p>I'm a software engineer, a hobbyist game developer, and a dad</p>
              <div>
                <h3>To continue, choose your adventure:</h3>
                <div className="flex flex-col xs:flex-row justify-center items-center xs:items-start gap-2 xs:gap-8 sm:gap-14">
                  <div>
                    <Choice icon="fight">Fight for it</Choice>
                  </div>
                  <div>
                    <Choice icon="floppy">Open pdf</Choice>
                  </div>
                </div>
              </div>
            </div>
          </PixelBox>
        </div>
      </div>
    </div>
  );
};
