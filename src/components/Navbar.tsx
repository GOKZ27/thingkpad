import { motion, AnimatePresence } from 'motion/react';
import { Search, User, Menu, X, Laptop, Monitor, Info, Phone, MoreVertical } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';
import { useNavigate } from 'react-router-dom';

const navItems = [
  { name: 'Home', href: '#', icon: Laptop },
  { name: 'Produk', href: '#produk', icon: Monitor },
  { name: 'Pelayanan', href: '#tentang', icon: Info },
  { name: 'Kontak', href: '#kontak', icon: Phone },
];

export default function Navbar() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAdminVisible, setIsAdminVisible] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const handleLogoClick = () => {
    setClickCount(prev => {
      const next = prev + 1;
      if (next >= 5) {
        setIsAdminVisible(true);
        return 0;
      }
      return next;
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleAdminClick = () => {
    navigate('/admin');
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8 flex items-center h-16',
        isScrolled || isMobileMenuOpen ? 'glass' : 'bg-transparent border-b border-white/5'
      )}
    >
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-1">
          <div 
            onClick={handleLogoClick}
            className="flex items-center leading-none font-display font-black tracking-tighter text-2xl select-none cursor-default"
          >
            <span className="text-white">THING<span className="text-think-red">P</span>AD</span>
            <div className="w-1.5 h-1.5 bg-think-red rounded-full mb-3 ml-0.5" />
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold text-gray-400 hover:text-white transition-all relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-think-red transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center bg-white/5 border border-white/10 rounded-full px-4 py-1.5 focus-within:border-think-red/40 transition-all">
            <Search className="w-3.5 h-3.5 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent border-none outline-none text-[11px] ml-2 w-24 focus:w-40 transition-all text-white font-medium"
            />
          </div>
          
          {/* Button WhatsApp by tipensaragi */}
<button
            onClick={() =>
              window.open(
                "https://wa.me/6285831006794?text=Saya%20ingin%20membeli%20laptop%20ThinkPad",
                "_blank"
              )
            }
            className="bg-think-red hover:bg-[#b51f13] text-white px-5 py-2 rounded-sm text-[11px]"
          >
            Hubungi WhatsApp
          </button>

          {isAdminVisible && (
            <div className="flex items-center gap-2">
              <button 
                onClick={handleAdminClick}
                className="group flex items-center gap-1 p-2 bg-white/5 hover:bg-white/10 rounded-sm transition-all border border-white/10"
                aria-label="Admin Portal"
              >
                <User className="w-4 h-4 text-gray-400 group-hover:text-white" />
                <MoreVertical className="w-4 h-4 text-gray-500 group-hover:text-white" />
              </button>
            </div>
          )}

          <button
            className="lg:hidden p-2 text-white transition-transform active:scale-90"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop for blur focus */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="lg:hidden fixed inset-0 top-16 bg-black/40 backdrop-blur-sm z-[39]"
            />
            
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="lg:hidden fixed inset-x-0 top-16 z-40 max-h-[calc(100vh-64px)] overflow-y-auto"
            >
              <div className="bg-think-black border-b border-white/10 shadow-2xl">
                <div className="flex flex-col p-6 space-y-2">
                  {navItems.map((item, index) => (
                    <motion.a
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.04 }}
                      key={item.name}
                      href={item.href}
                      className="flex items-center gap-5 text-gray-400 hover:text-white p-4 rounded-sm hover:bg-white/5 transition-all font-black text-[13px] uppercase tracking-[0.25em] border-b border-white/[0.03] last:border-0"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <item.icon className="w-4 h-4 text-think-red" />
                      {item.name}
                    </motion.a>
                  ))}
                  
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="pt-8 pb-4 space-y-6"
                  >
                    <div className="flex items-center bg-white/5 rounded-sm px-5 py-4 border border-white/10 focus-within:border-think-red/40 transition-all">
                      <Search className="w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search ThinkPad store..."
                        className="bg-transparent border-none outline-none text-[11px] ml-4 w-full font-bold uppercase tracking-wider text-white"
                      />
                    </div>
                    <button className="w-full bg-think-red active:bg-[#b51f13] text-white py-5 rounded-sm font-black uppercase text-[12px] tracking-[0.3em] shadow-2xl shadow-think-red/30 transition-all active:scale-[0.97]">
                      Beli Sekarang
                    </button>
                    
                    <div className="flex items-center justify-center gap-8 pt-4 opacity-50 grayscale">
                       <span className="text-[10px] font-bold">Premium Store Authorized</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>

  );
}
