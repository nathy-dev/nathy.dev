/* eslint-disable @typescript-eslint/no-explicit-any */
const throttle = (callback: (...args: any) => void, wait: number) => {
  let isWaiting = false;
  return (...args: any) => {
    if (isWaiting) return;
    callback(...args);
    isWaiting = true;
    setTimeout(() => {
      isWaiting = false;
    }, wait);
  };
};

export default throttle;
