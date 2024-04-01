import { BoxGeometry, MeshStandardMaterial } from 'three';
import { floor, wall } from '../utils/textureManager';

export const wallGeometry = new BoxGeometry(1, 1, 1);

export const wallMaterial = new MeshStandardMaterial({
  map: wall,
});

export const floorGeometry = new BoxGeometry(1, 1, 1);

export const floorMaterial = new MeshStandardMaterial({
  map: floor,
  // transparent: true,
});
