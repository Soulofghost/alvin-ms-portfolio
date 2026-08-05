import { Variants } from 'framer-motion';

export const fadeIn = (direction: 'up' | 'down' | 'left' | 'right', delay: number): Variants => {
  return {
    hidden: {
      y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
      x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 0.5,
        delay: delay * 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };
};

export const staggerContainer = (staggerChildren?: number, delayChildren?: number): Variants => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren || 0.05,
        delayChildren: delayChildren || 0,
      },
    },
  };
};

export const scaleIn = (delay: number = 0): Variants => {
  return {
    hidden: { scale: 0.92, opacity: 0 },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        delay: delay * 0.5,
        ease: 'easeOut',
      },
    },
  };
};