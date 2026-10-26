import React, { useEffect, useRef } from 'react';

export const CursorGlow: React.FC = () => {
  const glowRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable on pointer-capable desktop screens
    if (typeof window === 'undefined' || !window.matchMedia('(pointer: fine)').matches) {
      return;
    }

    let rafId: number | null = null;
    let targetX = -500;
    let targetY = -500;
    let currentX = -500;
    let currentY = -500;
    let hasMoved = false;
    let isRunning = false;
    let isScrolling = false;
    let scrollTimeout: NodeJS.Timeout | null = null;

    const startLoop = () => {
      if (!isRunning && !isScrolling) {
        isRunning = true;
        rafId = requestAnimationFrame(updatePosition);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (isScrolling) return;
      targetX = e.clientX;
      targetY = e.clientY;

      if (!hasMoved) {
        hasMoved = true;
        currentX = targetX;
        currentY = targetY;
        if (containerRef.current) {
          containerRef.current.style.opacity = '1';
        }
      }
      startLoop();
    };

    // Pause cursor calculations completely during scroll to keep scroll frame rates at max 60/120fps
    const handleScroll = () => {
      isScrolling = true;
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
        isRunning = false;
      }
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
      }, 120);
    };

    const handleMouseLeave = () => {
      if (containerRef.current) {
        containerRef.current.style.opacity = '0';
      }
    };

    const handleMouseEnter = () => {
      if (hasMoved && containerRef.current && !isScrolling) {
        containerRef.current.style.opacity = '1';
        startLoop();
      }
    };

    const updatePosition = () => {
      if (isScrolling) {
        isRunning = false;
        rafId = null;
        return;
      }

      const dx = targetX - currentX;
      const dy = targetY - currentY;
      currentX += dx * 0.15;
      currentY += dy * 0.15;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      }

      // If settled, pause loop until next mouse move
      if (Math.abs(dx) < 0.3 && Math.abs(dy) < 0.3) {
        isRunning = false;
        rafId = null;
      } else {
        rafId = requestAnimationFrame(updatePosition);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (scrollTimeout) clearTimeout(scrollTimeout);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 opacity-0 transition-opacity duration-300 overflow-hidden select-none"
    >
      {/* Subtle atmospheric glow without mix-blend-screen to prevent GPU composite stalls during scroll */}
      <div
        ref={glowRef}
        className="absolute top-0 left-0 rounded-full pointer-events-none will-change-transform opacity-30"
        style={{
          width: '440px',
          height: '440px',
          background: 'radial-gradient(circle, rgba(111, 135, 156, 0.12) 0%, rgba(42, 127, 255, 0.04) 35%, transparent 70%)',
          transform: 'translate3d(-500px, -500px, 0) translate(-50%, -50%)',
        }}
      />
    </div>
  );
};
