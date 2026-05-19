import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="fixed inset-0 z-[999] bg-think-black flex flex-col items-center justify-center select-none"
      >
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-1 text-4xl md:text-6xl font-display font-black tracking-tighter mb-8"
          >
            <span className="text-white">THINK<span className="text-think-red">P</span>AD</span>
            <div className="w-2 h-2 bg-think-red rounded-full mb-5 ml-0.5 animate-pulse" />
          </motion.div>

          <div className="w-48 h-0.5 bg-white/5 relative overflow-hidden rounded-full">
            <motion.div
              initial={{ left: "-100%" }}
              animate={{ left: "100%" }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-y-0 w-full bg-think-red"
            />
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-[10px] text-gray-500 font-bold uppercase tracking-[0.4em]"
          >
            Premium Store
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
