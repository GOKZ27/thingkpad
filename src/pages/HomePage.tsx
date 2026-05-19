import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProductSection from '../components/ProductSection';
import Features from '../components/Features';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import Services from '../components/Services';
import LoadingScreen from '../components/LoadingScreen';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { useState, useEffect } from 'react';

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200); // Slightly faster in dev maybe
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-think-black selection:bg-think-red selection:text-white relative">
      <Helmet>
        <title>ThinkPad Premium Store | Laptop Bisnis & AI Terbaik</title>
        <meta name="description" content="Toko laptop ThinkPad modern, premium, dan profesional. Temukan seri X1 Carbon, T Series, P Series, dan AI Edition dengan harga terbaik dan garansi resmi." />
        <meta name="keywords" content="ThinkPad, Laptop Bisnis, Lenovo, X1 Carbon, AI Laptop, Laptop Premium" />
        <meta property="og:title" content="ThinkPad Premium Store" />
        <meta property="og:description" content="The ultimate destination for professional computing." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://thinkpad-premium.com" />
      </Helmet>

      <AnimatePresence>
        {isLoading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-think-red z-50 origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Hero />
        
        <section className="py-8 bg-think-black border-y border-white/5 relative overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            <div className="flex items-center gap-16 px-8">
              {['LENOVO', 'INTEL CORE', 'AMD RYZEN', 'NVIDIA GEFORCE', 'MICROSOFT WINDOWS', 'THINKSHIELD', 'DOLBY AUDIO', 'AI CERTIFIED'].map((brand, i) => (
                <span key={i} className={cn(
                  "text-xl md:text-2xl font-black transition-all cursor-default tracking-tighter uppercase shrink-0",
                  i % 3 === 0 ? "text-think-red" : "text-white/80 hover:text-white"
                )}>
                  {brand}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-16 px-8">
              {['LENOVO', 'INTEL CORE', 'AMD RYZEN', 'NVIDIA GEFORCE', 'MICROSOFT WINDOWS', 'THINKSHIELD', 'DOLBY AUDIO', 'AI CERTIFIED'].map((brand, i) => (
                <span key={i + 10} className={cn(
                  "text-xl md:text-2xl font-black transition-all cursor-default tracking-tighter uppercase shrink-0",
                  i % 3 === 0 ? "text-think-red" : "text-white/80 hover:text-white"
                )}>
                  {brand}
                </span>
              ))}
            </div>
          </div>
          {/* Shaders */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-think-black to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-think-black to-transparent z-10" />
        </section>

        <ProductSection />
        
        <Services />

        <Features />
        <FAQ />
        <Footer />
      </motion.main>
    </div>
  );
}
