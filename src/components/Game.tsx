import { useCallback } from 'react';
import { useCanvas } from '../hooks/useCanvas.ts';
import { BACKGROUND_COLOR, CANVAS_HEIGHT, CANVAS_WIDTH, FLOOR, FOREGROUND_COLOR } from '../util/gameConstants.ts';

export const Game = () => {
  const draw = useCallback((context: CanvasRenderingContext2D, frameCount: number) => {
    // draw background
    context.fillStyle = BACKGROUND_COLOR;
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);

    // draw foreground
    context.strokeStyle = FOREGROUND_COLOR;
    context.beginPath();
    context.moveTo(0, FLOOR);
    context.lineTo(context.canvas.width, FLOOR);
    context.stroke();
  }, []);

  const canvasRef = useCanvas({ draw });

  return (
    <div>
      <canvas width={CANVAS_WIDTH} height={CANVAS_HEIGHT} ref={canvasRef}></canvas>
    </div>
  );
};
