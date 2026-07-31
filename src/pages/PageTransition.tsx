import React from 'react';
import { motion } from 'framer-motion';

interface PageTransitionProps {
  children: React.ReactNode;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  return (
    <>
      <motion.div
        className="fixed inset-0 bg-[#E5E400] z-50 pointer-events-none"
        initial={{ scaleY: 1, transformOrigin: 'top' }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1, transformOrigin: 'bottom' }}
        transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
      />
      {children}
    </>
  );
};