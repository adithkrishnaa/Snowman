"use client";

import { motion } from "framer-motion";
import { useScrollProgress } from "@/lib/useScrollAnimation";

export const ScrollProgress = () => {
  const scaleX = useScrollProgress();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary-light z-50 origin-left"
      style={{ scaleX }}
    />
  );
};


