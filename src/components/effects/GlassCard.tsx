import React from 'react';
import { cn } from '../../utils/cn';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export const GlassCard = ({ children, className }: GlassCardProps) => {
  return (
    <div className={cn(
      "backdrop-blur-lg bg-white/30 border border-white/20 shadow-xl",
      "rounded-2xl overflow-hidden",
      className
    )}>
      {children}
    </div>
  );
};