import { BoxGeometry, MeshStandardMaterial } from 'three';
import { wall } from '../util/textures.ts';

export const wallGeometry = new BoxGeometry(1, 1, 1);

export const wallMaterial = new MeshStandardMaterial({
  map: wall,
});
