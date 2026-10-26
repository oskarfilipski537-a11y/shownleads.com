import React, { useEffect, useRef } from 'react';

export const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number | null = null;
    let isVisible = true;
    let isScrolling = false;
    let scrollTimeout: NodeJS.Timeout | null = null;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    // Responsive resize handler
    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    // Scroll throttle: pause canvas during scrolling to give 100% frame-rate priority to scrolling
    const handleScroll = () => {
      isScrolling = true;
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
      }
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
        if (isVisible && !animationFrameId) {
          lastTime = performance.now();
          animationFrameId = requestAnimationFrame(render);
        }
      }, 100);
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    // IntersectionObserver to pause when hero is scrolled out of viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible && !isScrolling && !animationFrameId) {
          lastTime = performance.now();
          animationFrameId = requestAnimationFrame(render);
        } else if (!isVisible && animationFrameId) {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = null;
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(canvas);

    // Particle system (lean ambient dust)
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;
      maxAlpha: number;
      pulseSpeed: number;
      pulseAngle: number;
    }

    const PARTICLE_COUNT = Math.min(28, Math.floor(width / 45));
    const colors = [
      'rgba(255, 253, 249, ', // Bone White
      'rgba(111, 135, 156, ', // Fog Blue
      'rgba(42, 127, 255, ',  // Prism Cyan
      'rgba(42, 255, 42, ',   // Prism Lime
    ];

    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      size: Math.random() * 1.8 + 0.6,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: Math.random() * 0.4 + 0.1,
      maxAlpha: Math.random() * 0.5 + 0.2,
      pulseSpeed: Math.random() * 0.02 + 0.008,
      pulseAngle: Math.random() * Math.PI * 2,
    }));

    // Floating chromatic caustics orbs
    interface CausticOrb {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      radius: number;
      color: string;
      vx: number;
      vy: number;
      angle: number;
      speed: number;
    }

    const orbs: CausticOrb[] = [
      {
        x: width * 0.12,
        y: height * 0.28,
        baseX: width * 0.12,
        baseY: height * 0.28,
        radius: Math.min(width, height) * 0.42,
        color: 'rgba(42, 127, 255, 0.045)', // Cyan on left flank
        vx: 0.1,
        vy: 0.12,
        angle: 0,
        speed: 0.005,
      },
      {
        x: width * 0.88,
        y: height * 0.32,
        baseX: width * 0.88,
        baseY: height * 0.32,
        radius: Math.min(width, height) * 0.4,
        color: 'rgba(255, 42, 42, 0.035)', // Red on right flank
        vx: -0.1,
        vy: 0.1,
        angle: Math.PI / 3,
        speed: 0.005,
      },
      {
        x: width * 0.08,
        y: height * 0.72,
        baseX: width * 0.08,
        baseY: height * 0.72,
        radius: Math.min(width, height) * 0.4,
        color: 'rgba(42, 255, 42, 0.03)', // Lime on bottom-left
        vx: 0.08,
        vy: -0.1,
        angle: Math.PI,
        speed: 0.004,
      },
      {
        x: width * 0.92,
        y: height * 0.75,
        baseX: width * 0.92,
        baseY: height * 0.75,
        radius: Math.min(width, height) * 0.38,
        color: 'rgba(111, 135, 156, 0.045)', // Fog Blue on bottom-right
        vx: -0.08,
        vy: -0.1,
        angle: (Math.PI * 3) / 2,
        speed: 0.006,
      },
    ];

    // Grid coordinates scan line
    let gridOffset = 0;

    let lastTime = performance.now();

    const render = (time: number) => {
      const dt = Math.min((time - lastTime) / 16.667, 2);
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      // 1. Draw Subtle Animated Perspective Grid
      ctx.save();
      ctx.strokeStyle = 'rgba(64, 63, 63, 0.12)';
      ctx.lineWidth = 1;

      const gridSize = 64;
      gridOffset = (gridOffset + 0.15 * dt) % gridSize;

      // Vertical lines
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // Horizontal moving lines
      for (let y = gridOffset; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
      ctx.restore();

      // 2. Draw Smooth Animated Caustic Glow Orbs
      orbs.forEach((orb) => {
        orb.angle += orb.speed * dt;
        orb.x = orb.baseX + Math.sin(orb.angle) * 70;
        orb.y = orb.baseY + Math.cos(orb.angle * 0.8) * 50;

        const gradient = ctx.createRadialGradient(
          orb.x,
          orb.y,
          0,
          orb.x,
          orb.y,
          orb.radius
        );
        gradient.addColorStop(0, orb.color);
        gradient.addColorStop(1, 'rgba(16, 16, 16, 0)');

        ctx.save();
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // 3. Draw & Animate Particles
      particles.forEach((p) => {
        p.x += p.vx * dt;
        p.y += p.vy * dt;

        // Wrap around boundaries
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        p.pulseAngle += p.pulseSpeed * dt;
        const currentAlpha =
          p.alpha + Math.sin(p.pulseAngle) * (p.maxAlpha - p.alpha);

        ctx.save();
        ctx.fillStyle = `${p.color}${Math.max(0, currentAlpha)})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // 4. Subtle Interconnecting Constellation Lines between close particles
      ctx.save();
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const lineAlpha = (1 - dist / 110) * 0.08;
            ctx.strokeStyle = `rgba(111, 135, 156, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      ctx.restore();

      if (isVisible) {
        animationFrameId = requestAnimationFrame(render);
      } else {
        animationFrameId = null;
      }
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
      observer.disconnect();
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block opacity-70 sm:opacity-85"
      />

      {/* Atmospheric radial vignette to keep focus centered and clean */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#101010]/40 via-transparent to-[#101010]" />
    </div>
  );
};
