import React, { useState, useMemo } from 'react';
import { Stats, Instance } from '@react-three/drei';

import { PlaneOb } from '../components/PlaneOb.jsx';
import { Player } from '../components/Player.jsx';
import Enemy from '../components/Enemy.jsx';
import { Shard } from '../components/Shard.jsx';
import { mapData } from './mapHelper.js';
import { Group } from '../components/Group.jsx';
import { PointLight } from '../components/PointLight.jsx';
import { Flame } from '../components/Flame.jsx';

const resolveMapTile = (type, x, y, mapData, setCurrentMap) => {
  const key = `${x}-${y}`;

  switch (type) {
    case 'T':
      return null;
    case 'C':
      return <Shard key={key} position={[x, 0.5, y]} mapData={mapData} setCurrentMap={setCurrentMap} type={type} />;
    case 'E':
      return <Enemy key={key} position={[x, 0.75, y]} type={type} mapData={mapData} setCurrentMap={setCurrentMap} />;
    case 'L':
      return <PointLight key={key} position={[x, 0.5, y]} type={type} />;
    default:
      return null;
  }
};

const resolveMapWalls = (type, x, y) => {
  const key = `${x}-${y}`;

  switch (type) {
    case '#':
      return (
        <React.Fragment key={key}>
          <Instance name="wall" position={[x, 1.5, y]} />
          <Instance name="wall" position={[x, 0.5, y]} />
        </React.Fragment>
      );
    default:
      return null;
  }
};

export const Map = () => {
  const [currentMap, setCurrentMap] = useState(mapData);

  const memoizedMapData = useMemo(() => {
    return currentMap.map((row, y) => row.map((type, x) => resolveMapTile(type, x, y, mapData, setCurrentMap)));
  }, [currentMap]);

  const memoizedWalls = useMemo(() => {
    return currentMap.map((row, y) => row.map((type, x) => resolveMapWalls(type, x, y)));
  }, []);

  return (
    <>
      <Group memoizedWalls={memoizedWalls} />
      <Player />
      {memoizedMapData}
      <PlaneOb position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} />
      <PlaneOb position={[0, 2, 0]} rotation={[+Math.PI / 2, 0, 0]} />
      <ambientLight intensity={0.1} />
      <Flame position={[10, 0.5, 20]} />
      <Flame position={[20, 0.5, 40]} />
      <spotLight position={[10, 10, 10]} angle={0.5} intensity={1} castShadow={true} penumbra={1} />
      {/* <Stats /> */}
    </>
  );
};
