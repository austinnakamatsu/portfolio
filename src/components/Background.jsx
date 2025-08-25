import { useEffect, useRef } from 'react';

export const Background = ({ themeMode = 'dark' }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    const mouse = { x: null, y: null };
    window.addEventListener('mousemove', (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    });
    window.addEventListener('resize', () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      init();
    });

    const gridSize = 50;
    const points = [];

    const colors = {
      dark: {
        background: '#0d0d0d',
        point: 'rgba(255,255,255,0.9)',
        line: (opacity) => `rgba(255,255,255,${opacity})`,
      },
      light: {
        background: '#f0f0f0',
        point: 'rgba(0,0,0,0.8)',
        line: (opacity) => `rgba(0,0,0,${opacity})`,
      },
    };

    class Point {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.originX = x;
        this.originY = y;
        this.size = 2;
      }

      draw() {
        ctx.fillStyle = colors[themeMode].point;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }

      update() {
        if (mouse.x && mouse.y) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 100;
          if (dist < maxDist) {
            const force = (maxDist - dist) / maxDist;
            this.x -= dx * 0.05 * force;
            this.y -= dy * 0.05 * force;
          }
        }
        this.x += (this.originX - this.x) * 0.05;
        this.y += (this.originY - this.y) * 0.05;
      }
    }

    const init = () => {
      points.length = 0;
      for (let y = gridSize; y < height; y += gridSize) {
        for (let x = gridSize; x < width; x += gridSize) {
          points.push(new Point(x, y));
        }
      }
    };

    const connect = () => {
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < gridSize * 1.2) {
            ctx.strokeStyle = colors[themeMode].line(1 - dist / (gridSize * 1.2));
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.fillStyle = colors[themeMode].background;
      ctx.fillRect(0, 0, width, height);

      points.forEach((p) => {
        p.update();
        p.draw();
      });
      connect();
      requestAnimationFrame(animate);
    };

    init();
    animate();
  }, [themeMode]); // Re-run when theme changes

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
      }}
    />
  );
};
