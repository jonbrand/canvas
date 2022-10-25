import React, { useEffect, useRef } from 'react';

type CanvasProps = 
React.DetailedHTMLProps<React.CanvasHTMLAttributes<HTMLCanvasElement>,
HTMLCanvasElement>;

export const Canvas: React.FC<CanvasProps> = ({ ...props }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const context = canvas.getContext('2d');

    if (!context) {
      return;
    }
    context.fillStyle = "black";

    const rectangle = new Path2D();
    rectangle.rect(10, 10, 50, 50);

    const circle = new Path2D();
    circle.arc(100, 35, 25, 0, 2 * Math.PI);

    context.stroke(rectangle);
    context.fill(circle);
  }, []);

  return <canvas width={props.width} height={props.height} ref={canvasRef} />
}