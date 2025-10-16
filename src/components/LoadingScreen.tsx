"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import snowmanLogo from "@/Assets/logo3.png";
import Image from "next/image";
import { useLoading } from "@/lib/loading-context";

interface LoadingScreenProps {
  onLoadingComplete?: () => void;
  duration?: number;
}

export const LoadingScreen = ({ 
  onLoadingComplete, 
  duration = 3000 
}: LoadingScreenProps) => {
  const { isLoading } = useLoading();
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Initializing...");

  useEffect(() => {
    if (!isLoading) return;

    const loadingTexts = [
      "Initializing...",
      "Loading assets...",
      "Preparing interface...",
      "Almost ready...",
      "Welcome to Snowman!"
    ];

    // Update loading text
    const textInterval = setInterval(() => {
      setLoadingText((prev) => {
        const currentIndex = loadingTexts.indexOf(prev);
        const nextIndex = (currentIndex + 1) % loadingTexts.length;
        return loadingTexts[nextIndex];
      });
    }, 600);

    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          clearInterval(textInterval);
          setTimeout(() => {
            onLoadingComplete?.();
          }, 500);
          return 100;
        }
        return prev + Math.random() * 12 + 3;
      });
    }, 150);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, [isLoading, duration, onLoadingComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-50 bg-gradient-to-br from-primary/10 via-background to-secondary/10 flex items-center justify-center"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20 w-32 h-32 bg-primary rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-secondary rounded-full blur-3xl animate-pulse"></div>
          </div>

          {/* Loading Content */}
          <div className="relative z-10 flex flex-col items-center space-y-8">
            {/* Rotating Logo */}
            <motion.div
              className="relative"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "backOut" }}
            >
              {/* Outer Ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-primary/20"
                animate={{ rotate: -360 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              
              {/* Inner Ring */}
              <motion.div
                className="absolute inset-2 rounded-full border border-secondary/30"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <motion.div
                className="relative z-10"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <Image
                  src={snowmanLogo}
                  alt="Snowman Logo"
                  width={120}
                  height={120}
                  className="drop-shadow-2xl"
                />
              </motion.div>
              
              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(51, 157, 54, 0.3)",
                    "0 0 40px rgba(51, 157, 54, 0.6)",
                    "0 0 20px rgba(51, 157, 54, 0.3)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Pulse Effect */}
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-primary/40"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Company Name */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-display font-bold bg-gradient-to-r from-primary via-secondary to-primary-light bg-clip-text text-transparent">
                Snowman
              </h1>
              <motion.p
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="text-lg text-muted-foreground mt-2"
              >
                Premium Quality Products
              </motion.p>
            </motion.div>

            {/* Loading Progress */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "300px", opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="w-80 max-w-xs"
            >
              <div className="relative">
                {/* Progress Bar Background */}
                <div className="w-full h-2 bg-accent/20 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                    style={{ width: `${progress}%` }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </div>
                
                {/* Progress Text */}
                <motion.div
                  className="text-center mt-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.1 }}
                >
                  <motion.span 
                    key={loadingText}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="text-sm text-muted-foreground block"
                  >
                    {loadingText}
                  </motion.span>
                  <span className="text-xs text-muted-foreground/70">
                    {Math.round(progress)}%
                  </span>
                </motion.div>
              </div>
            </motion.div>

            {/* Loading Dots */}
            <motion.div
              className="flex space-x-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-primary rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>

            {/* Floating Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {Array.from({ length: 8 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-primary/30 rounded-full"
                  style={{
                    left: `${20 + Math.random() * 60}%`,
                    top: `${20 + Math.random() * 60}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    x: [0, Math.random() * 10 - 5, 0],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
