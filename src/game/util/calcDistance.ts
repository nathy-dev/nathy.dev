import { Vector3 } from 'three';

/**
 * Given two points, use pythagorean theorem to calculate the distance between them.
 */
export const calcDistance = (p1: Vector3, p2: Vector3) => {
  // if (!p1 || !p2) {
  //   return null;
  // }
  const a = p2.x - p1.x;
  const b = p2.y - p1.y;
  const c = p2.z - p1.z;

  return Math.sqrt(a * a + b * b + c * c);
};

export const closestObject = <T>(arr: number[], val: number, fallback: T) => {
  if (!arr.length) {
    return fallback;
  }
  return arr.reduce((a, b) => {
    return Math.abs(b - val) < Math.abs(a - val) ? b : a;
  });
};
