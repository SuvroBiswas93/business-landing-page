import React from 'react';
import { motion } from 'framer-motion';

export const GradientDivider = () => {
  return (
    <motion.div
      className="h-1 w-full bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    />
  );
};