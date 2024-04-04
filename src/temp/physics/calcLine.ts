// Bresenham's line algorithm: https://en.wikipedia.org/wiki/Bresenham%27s_line_algorithm
export const calcLine = (x0: number, y0: number, x1: number, y1: number) => {
  const dx = Math.abs(x1 - x0);
  const dy = Math.abs(y1 - y0);
  const sx = x0 < x1 ? 1 : -1;
  const sy = y0 < y1 ? 1 : -1;
  let err = dx - dy;

  const points = [];

  while (!(x0 === x1 && y0 === y1)) {
    points.push({
      x: x0,
      z: y0,
    });

    const e2 = 2 * err;
    if (e2 > -dy) {
      err -= dy;
      x0 += sx;
    }
    if (e2 < dx) {
      err += dx;
      y0 += sy;
    }
  }
  points.push({
    x: x0,
    z: y0,
  });

  return points;
};
