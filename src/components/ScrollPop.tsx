import React from 'react';
import { motion } from 'framer-motion';

interface ScrollPopProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  scale?: boolean;
}

export const ScrollPop: React.FC<ScrollPopProps> = ({
  children,
  delay = 0,
  duration = 0.6,
  className = '',
  direction = 'up',
  scale = true,
}) => {
  const getInitialPosition = () => {
    switch (direction) {
      case 'up': return { y: 45, x: 0 };
      case 'down': return { y: -45, x: 0 };
      case 'left': return { x: 45, y: 0 };
      case 'right': return { x: -45, y: 0 };
      default: return { x: 0, y: 0 };
    }
  };

  const pos = getInitialPosition();

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: pos.x,
        y: pos.y,
        scale: scale ? 0.94 : 1,
        rotateX: direction === 'up' ? 6 : 0,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        rotateX: 0,
      }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98], // smooth spring-like bezier
      }}
      className={className}
      style={{ transformPerspective: 1000 }}
    >
      {children}
    </motion.div>
  );
};
