import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface TextProps {
  children: React.ReactNode;
  size?: 'sm' | 'base' | 'lg' | 'xl' | '2xl';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  className?: string;
  animate?: boolean;
}

export const Text = ({
  children,
  size = 'base',
  weight = 'normal',
  className,
  animate = true,
}: TextProps) => {
  const styles = cn(
    size === 'sm' && "text-sm",
    size === 'base' && "text-base",
    size === 'lg' && "text-lg",
    size === 'xl' && "text-xl",
    size === '2xl' && "text-2xl",
    weight === 'normal' && "font-normal",
    weight === 'medium' && "font-medium",
    weight === 'semibold' && "font-semibold",
    weight === 'bold' && "font-bold",
    "leading-relaxed text-primary-700",
    className
  );

  const content = (
    <p className={styles}>
      {children}
    </p>
  );

  if (!animate) return content;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      {content}
    </motion.div>
  );
};