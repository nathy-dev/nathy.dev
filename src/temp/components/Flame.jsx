import { FlatObject } from './FlatObject.jsx';
import { orb } from '../util/textures.ts';

export const Flame = ({ position }) => {
  return (
    <>
      <FlatObject position={position} texture={orb} emissive="green" />
      <pointLight position={position} intensity={10} decay={1} castShadow={true} color="green" />
    </>
  );
};
