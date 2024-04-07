export const trimNumber = (num: number, min: number, max: number) => {
  const MIN = min;
  const MAX = max;
  return Math.min(Math.max(num, MIN), MAX);
};
