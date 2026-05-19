import { motion } from 'motion/react';
import { useData } from '../DataContext';
import { IMAGES } from '../constants';
import { cn } from '../lib/utils';
import laptopImg from "../assets/1.png";

export default function Hero() {
  const { data } = useData();

  return (
    <section className="relative min-h-[600px] lg:h-[70vh] flex items-center bg-gradient-to-r from-black via-think-black to-think-gray overflow-hidden border-b border-white/5 pt-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-0 items-center w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="py-12 lg:pr-12"
        >
          
          
          <h1 className="text-5xl md:text-6xl font-light leading-[1.1] mb-6">
            {data.heroTitle}
          </h1>
          
          <p className="text-gray-400 text-sm md:text-base max-w-md mb-8 lg:mb-10 leading-relaxed font-medium">
            {data.heroSubtitle}
          </p>

          {/* Mobile Product Visual */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: [0, -10, 0] }}
            transition={{ 
              opacity: { duration: 0.8 },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            className="lg:hidden mb-8 flex flex-col items-center"
          >
            <div className="relative w-full max-w-[300px]">
              <img 
                src={laptopImg}
                alt="ThinkPad"
                className="w-full h-auto drop-shadow-[0_20px_50px_rgba(255,255,255,0.05)]"
              />
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4/5 h-2 bg-black/60 blur-xl rounded-[100%] scale-x-110" />
            </div>
          </motion.div>
          
         <div className="flex gap-4">
  <button
    onClick={() => {
      document.getElementById('produk')?.scrollIntoView({
        behavior: 'smooth'
      });
    }}
    className="bg-white text-black w-full sm:w-auto px-10 py-4 font-bold text-sm hover:bg-gray-200 transition-colors uppercase tracking-widest shadow-xl shadow-white/5"
  >
    Lihat Produk
  </button>
</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:flex items-center justify-center p-12"
        >
           <motion.div 
             animate={{ y: [0, -20, 0] }}
             transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
             className="relative z-10 w-full max-w-[500px]"
           >
              <img 
                
                src={laptopImg}
                alt="ThinkPad"
                className="w-full h-auto drop-shadow-[0_20px_50px_rgba(255,255,255,0.05)]"
              />
              <motion.div 
                animate={{ scale: [1, 0.8, 1], opacity: [0.4, 0.2, 0.4] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[85%] h-5 bg-black blur-[40px] rounded-[100%]"
              />
           </motion.div>
           
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer opacity-50"
      >
        <span className="text-[10px] uppercase tracking-widest font-bold">Scroll Details</span>
        <div className="w-px h-12 bg-gradient-to-b from-think-red to-transparent" />
      </motion.div>
    </section>
  );
}
