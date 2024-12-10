import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface HeadingProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  gradient?: boolean;
  className?: string;
  animate?: boolean;
}

export const Heading = ({
  children,
  level = 2,
  gradient = false,
  className,
  animate = true,
}: HeadingProps) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  
  const baseStyles = "font-extrabold tracking-tight";
  const gradientStyles = "bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent";
  
  const styles = cn(
    baseStyles,
    gradient && gradientStyles,
    level === 1 && "text-5xl md:text-6xl lg:text-7xl",
    level === 2 && "text-4xl md:text-5xl lg:text-6xl",
    level === 3 && "text-3xl md:text-4xl",
    level === 4 && "text-2xl md:text-3xl",
    level === 5 && "text-xl md:text-2xl",
    level === 6 && "text-lg md:text-xl",
    className
  );

  const content = (
    <Tag className={styles}>
      {children}
    </Tag>
  );

  if (!animate) return content;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {content}
    </motion.div>
  );
};