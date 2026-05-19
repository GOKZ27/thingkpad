import { MessageCircle, CreditCard, Facebook, Instagram, Twitter, Youtube, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 h-auto md:h-16 flex flex-col md:flex-row items-center justify-between px-8 py-4 md:py-0 text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold">
      <div className="flex flex-wrap justify-center gap-6 mb-4 md:mb-0">
        <span className="text-white/40">© 2024 THINKPAD INDONESIA</span>
        <a href="https://instagram.com/gilang_pkyaa" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
        <a href="mailto:gilangpkyaa@gmail.com" className="hover:text-white transition-colors">gilangpkyaa@gmail.com</a>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span>Server Status: Optimized</span>
        </div>
        <div className="h-4 w-px bg-white/10 hidden md:block" />
        <span className="text-white">Official Partner</span>
      </div>

      {/* Sticky Floating WhatsApp */}
      <a 
        href="https://wa.me/6287855032334"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-[#25D366] w-12 h-12 rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/40 hover:scale-110 transition-transform z-50 group"
      >
        <MessageCircle className="w-6 h-6 text-white" />
        <span className="absolute right-full mr-4 glass px-3 py-1.5 rounded text-[10px] font-black uppercase tracking-widest text-white opacity-0 group-hover:opacity-100 whitespace-nowrap transition-all shadow-2xl">
          Konsultasi (Gilang)
        </span>
      </a>
    </footer>
  );
}
