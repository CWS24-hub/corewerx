import React from 'react';
import { motion } from 'framer-motion';

interface StaticBackgroundProps {
  src: string;
  overlay?: boolean;
  animated?: boolean;
}

const StaticBackground: React.FC<StaticBackgroundProps> = ({ 
  src, 
  overlay = true,
  animated = true 
}) => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        initial={animated ? { opacity: 0 } : { opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        <img
          src={src}
          alt="Background"
          className="w-full h-full object-cover"
        />
        {overlay && (
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-100/50 to-blue-100" />
        )}
      </motion.div>
    </div>
  );
};

export default StaticBackground;