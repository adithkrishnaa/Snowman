import { useInView } from 'react-intersection-observer';
import { useScroll, useTransform, useSpring } from 'framer-motion';

export const useScrollAnimation = (threshold = 0.1) => {
  const [ref, inView] = useInView({
    threshold,
    triggerOnce: false,
  });

  return { ref, inView };
};

export const useParallax = (distance = 50) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, distance]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

  return smoothY;
};

export const useScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return scaleX;
};


