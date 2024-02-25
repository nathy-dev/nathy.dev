import { Canvas } from '@react-three/fiber';
import { Gameboy } from './Gameboy.tsx';

export const GameboyWrapper = () => (
  <div className="z-0 h-full w-full absolute xl:right-96">
    <Canvas>
      <Gameboy />
    </Canvas>
  </div>
);
