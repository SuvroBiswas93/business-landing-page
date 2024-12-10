import React from 'react';
import { motion } from 'framer-motion';

export const Blob = () => {
  return (
    <motion.div
      className="absolute -z-10 opacity-50 blur-3xl"
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 90, 0],
        borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%", "60% 40% 30% 70% / 60% 30% 70% 40%", "30% 70% 70% 30% / 30% 30% 70% 70%"]
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        repeatType: "reverse"
      }}
    >
      <div className="w-[300px] h-[300px] bg-gradient-to-r from-primary-300/30 via-secondary-300/30 to-accent-300/30" />
    </motion.div>
  );
};