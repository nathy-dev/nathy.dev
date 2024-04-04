import { BoxGeometry, MeshStandardMaterial } from 'three';

import { enemy, deadEnemyStatic, wall } from './textures.ts';

export const enemyGeometry = new BoxGeometry(1.5, 1.5, 1.5);

export const enemyMaterial = new MeshStandardMaterial({
  map: enemy,
  transparent: true,
});

export const deadEnemyStaticMaterial = new MeshStandardMaterial({
  map: deadEnemyStatic,
  transparent: true,
});

export const wallGeometry = new BoxGeometry(1, 1, 1);

export const wallMaterial = new MeshStandardMaterial({
  map: wall,
});
