"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Particle {
  left: string;
  top: string;
  x: number;
  duration: number;
  delay: number;
}

const makeParticles = (
  count: number,
  xRange: number,
  baseDuration: number,
  durationRange: number,
  delayRange: number
): Particle[] =>
  Array.from({ length: count }).map(() => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    x: Math.random() * xRange - xRange / 2,
    duration: baseDuration + Math.random() * durationRange,
    delay: Math.random() * delayRange,
  }));

export const FloatingParticles = () => {
  // Random positions are generated after mount so server and client HTML match
  const [small, setSmall] = useState<Particle[]>([]);
  const [large, setLarge] = useState<Particle[]>([]);

  useEffect(() => {
    setSmall(makeParticles(20, 20, 3, 2, 2));
    setLarge(makeParticles(5, 30, 5, 3, 3));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating particles */}
      {small.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary/20 rounded-full"
          style={{
            left: p.left,
            top: p.top,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, p.x, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Larger floating elements */}
      {large.map((p, i) => (
        <motion.div
          key={`large-${i}`}
          className="absolute w-4 h-4 bg-secondary/10 rounded-full"
          style={{
            left: p.left,
            top: p.top,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, p.x, 0],
            opacity: [0.1, 0.5, 0.1],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};


