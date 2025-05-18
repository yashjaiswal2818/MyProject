
import { useEffect, useRef } from 'react';

const StarBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas to full screen
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    // Create stars
    interface Star {
      x: number;
      y: number;
      size: number;
      speed: number;
      opacity: number;
      twinkleSpeed: number;
    }
    
    const stars: Star[] = [];
    const starCount = Math.floor((window.innerWidth + window.innerHeight) / 8);
    
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speed: Math.random() * 0.5 + 0.1,
        opacity: Math.random() * 0.8 + 0.2,
        twinkleSpeed: Math.random() * 0.01 + 0.003
      });
    }
    
    // Animation
    let animationFrameId: number;
    let tick = 0;
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      tick++;
      
      // Draw stars
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.globalAlpha = star.opacity * (0.6 + Math.sin(tick * star.twinkleSpeed) * 0.4);
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
        
        // Move star
        star.y += star.speed;
        
        // Reset position if star goes off screen
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
      style={{ backgroundColor: 'transparent' }}
    />
  );
};

export default StarBackground;
