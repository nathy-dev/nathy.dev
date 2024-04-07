import { FlatObject } from './FlatObject.jsx';
import { orb } from '../util/textures.ts';

export const Flame = ({ position }) => {
  //0x3eff5e
  // 0x9cffac
  return (
    <>
      <FlatObject position={position} texture={orb} emissive={0x3eff5e} />
      <pointLight position={position} intensity={10} decay={1} castShadow={true} color={0x3eff5e} />
    </>
  );
};
