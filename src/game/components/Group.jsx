import React from 'react';
import { Instances } from '@react-three/drei';

import { wallGeometry, wallMaterial } from '../util/geometries.ts';

const _Group = ({ memoizedWalls }) => {
  return (
    <Instances limit={10000} range={10000} geometry={wallGeometry} material={wallMaterial} castShadow>
      {memoizedWalls}
    </Instances>
  );
};

export const Group = React.memo(_Group);
