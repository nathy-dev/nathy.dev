import { Canvas } from '@react-three/fiber';
import { Gameboy } from './Gameboy.tsx';

const GameboyWrapper = () => (
  <div className="absolute z-0 h-full w-full xl:right-96">
    <Canvas>
      <Gameboy />
    </Canvas>
  </div>
);

export default GameboyWrapper;
