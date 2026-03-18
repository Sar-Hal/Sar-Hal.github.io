import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

const CursorGlow = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const rafId = useRef<number>();
  
  const springConfig = { damping: 30, stiffness: 150 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
      
      rafId.current = requestAnimationFrame(() => {
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
      });
    };

    window.addEventListener('mousemove', moveCursor, { passive: true });
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className="pointer-events-none fixed z-50 h-8 w-8 rounded-full mix-blend-screen will-change-transform"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
          x: '-50%',
          y: '-50%',
          background: 'radial-gradient(circle, hsl(var(--primary) / 0.6) 0%, transparent 70%)',
        }}
      />
      <motion.div
        className="pointer-events-none fixed z-40 h-64 w-64 rounded-full blur-3xl mix-blend-screen will-change-transform"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
          x: '-50%',
          y: '-50%',
          background: 'radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 70%)',
        }}
      />
    </>
  );
};

export default CursorGlow;
