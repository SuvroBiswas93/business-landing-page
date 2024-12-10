import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TooltipProps {
  children: React.ReactNode;
  content: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

export const Tooltip = ({ children, content, position = 'top' }: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const positionClasses = {
    top: '-top-2 left-1/2 -translate-x-1/2 -translate-y-full',
    bottom: '-bottom-2 left-1/2 -translate-x-1/2 translate-y-full',
    left: 'top-1/2 -left-2 -translate-x-full -translate-y-1/2',
    right: 'top-1/2 -right-2 translate-x-full -translate-y-1/2',
  };

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className={`absolute ${positionClasses[position]} z-50 px-3 py-2 text-sm text-white bg-gray-900/90 backdrop-blur-sm rounded-lg whitespace-nowrap pointer-events-none`}
          >
            {content}
            <div className={`absolute ${
              position === 'top' ? 'bottom-0 translate-y-1/2' :
              position === 'bottom' ? 'top-0 -translate-y-1/2' :
              position === 'left' ? 'right-0 translate-x-1/2' :
              'left-0 -translate-x-1/2'
            } w-2 h-2 bg-gray-900/90 transform rotate-45`} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};