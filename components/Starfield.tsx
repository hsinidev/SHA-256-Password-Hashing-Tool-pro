import React, { useRef, useEffect } from 'react';

const Starfield: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    // Configuration
    const starCount = 2000; // Dense starfield
    const depth = 2000;
    const fov = 600;

    interface Star {
      x: number;
      y: number;
      z: number;
      color: string;
      size: number;
    }

    let stars: Star[] = [];
    // Nebula Palette: White, Ice Blue, Lavender, Soft Pink, Gold
    const starColors = ['#ffffff', '#a5f3fc', '#e9d5ff', '#fbcfe8', '#fef3c7'];

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars = [];

      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: (Math.random() - 0.5) * canvas.width * 2.5,
          y: (Math.random() - 0.5) * canvas.height * 2.5,
          z: Math.random() * depth,
          color: starColors[Math.floor(Math.random() * starColors.length)],
          size: Math.random() * 2 + 0.2,
        });
      }
    };

    let time = 0;

    const draw = () => {
      time += 0.0008; // Slow, majestic drift

      // 1. Deep Space Base
      const bgGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      bgGradient.addColorStop(0, '#0f0c29'); // Dark Night
      bgGradient.addColorStop(0.5, '#302b63'); // Deep Purple
      bgGradient.addColorStop(1, '#24243e'); // Cosmic Dark
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Gentle Camera Float
      const camX = Math.sin(time * 0.5) * 50;
      const camY = Math.cos(time * 0.3) * 30;
      const camZ = Math.sin(time * 0.2) * 20;

      // 2. Draw Nebulae (Gas Clouds)
      // We use 'lighter' composite operation to blend colors like light
      ctx.globalCompositeOperation = 'lighter';

      const drawNebulaCloud = (xOffset: number, yOffset: number, size: number, colorStart: string, colorEnd: string) => {
        const x = centerX + xOffset - camX * 0.1;
        const y = centerY + yOffset - camY * 0.1;
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, size);
        gradient.addColorStop(0, colorStart);
        gradient.addColorStop(1, colorEnd);
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      };

      // Magenta/Pink Cloud (Left)
      drawNebulaCloud(
        Math.sin(time * 0.4) * 300 - 200, 
        Math.cos(time * 0.2) * 100, 
        canvas.width * 0.6, 
        'rgba(236, 72, 153, 0.12)', // Pink-500 low opacity
        'transparent'
      );

      // Cyan/Blue Cloud (Right)
      drawNebulaCloud(
        Math.cos(time * 0.3) * 300 + 200, 
        Math.sin(time * 0.5) * 150, 
        canvas.width * 0.7, 
        'rgba(56, 189, 248, 0.12)', // Sky-400 low opacity
        'transparent'
      );

      // Deep Violet Core (Center/Bottom)
      drawNebulaCloud(
        Math.sin(time * 0.6) * 100, 
        Math.cos(time * 0.4) * 100 + 100, 
        canvas.width * 0.8, 
        'rgba(124, 58, 237, 0.15)', // Violet-600 low opacity
        'transparent'
      );

      ctx.globalCompositeOperation = 'source-over';

      // 3. Draw Stars with Parallax
      stars.forEach(star => {
        let tx = star.x - camX;
        let ty = star.y - camY;
        let tz = star.z - camZ;

        // Infinite scrolling universe logic
        if (tz < 1) tz += depth;
        if (tz > depth) tz -= depth;

        // Subtle rotation around Z
        const rot = Math.sin(time * 0.1) * 0.05;
        const rtx = tx * Math.cos(rot) - ty * Math.sin(rot);
        const rty = tx * Math.sin(rot) + ty * Math.cos(rot);

        const scale = fov / tz;
        const screenX = centerX + rtx * scale;
        const screenY = centerY + rty * scale;

        if (screenX >= 0 && screenX <= canvas.width && screenY >= 0 && screenY <= canvas.height) {
          const size = Math.max(0.1, star.size * scale);
          // Fade out stars as they get too close or too far
          const opacity = Math.min(1, (1 - tz / depth) * 1.2);

          ctx.beginPath();
          ctx.fillStyle = star.color;
          ctx.globalAlpha = opacity;
          ctx.arc(screenX, screenY, size, 0, Math.PI * 2);
          ctx.fill();
        }
      });
      ctx.globalAlpha = 1;

      animationFrameId = window.requestAnimationFrame(draw);
    };

    init();
    draw();

    const handleResize = () => init();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-[-1]" />;
};

export default Starfield;