import { useEffect, useRef } from 'react';

export const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    const context = canvas.getContext('2d') as CanvasRenderingContext2D;

    // disabling this rule as eslint doesn't recognize the closure.
    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
    let frame = 0;
    let animationFrameId: number;

    const render = () => {
      frame++;
      context.fillStyle = '#0e1409';
      context.fillRect(0, 0, context.canvas.width, context.canvas.height);

      const character = document.createElement('img');
      character.src = '../../../public/sprites/player.png';

      context.drawImage(character, 16, 16, 32, 32, 0, 0, 32, 32);
      animationFrameId = window.requestAnimationFrame(render);
    };

    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div>
      <canvas className="border-text border-2" width={500} height={500} ref={canvasRef}></canvas>
    </div>
  );
};
