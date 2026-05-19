import { useState } from 'react';
import { ChevronDown, Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

const faqs = [
  {
    q: "Apakah barang yang dijual original?",
    a: "Tentu saja. Kami adalah mitra resmi Lenovo di Indonesia. Semua unit yang kami jual 100% baru, original, dan memiliki garansi resmi Lenovo Indonesia."
  },
  {
    q: "Apa perbedaan X1 Carbon dengan T Series?",
    a: "X1 Carbon adalah seri flagship ultralight premium dengan material carbon fiber. T Series adalah seri performa bisnis standar yang lebih berfokus pada ketahanan dan kemudahan upgrade hardware."
  },
  {
    q: "Bagaimana sistem garansinya?",
    a: "Garansi kami adalah Premium On-site Support. Jika terjadi kendala pada unit Anda, teknisi Lenovo akan datang langsung ke alamat Anda tanpa biaya tambahan."
  },
  {
    q: "Apakah bisa kirim ke luar pulau?",
    a: "Bisa. Kami sudah berpengalaman mengirim unit ThinkPad ke seluruh pelosok Indonesia dengan packing kayu dan asuransi penuh."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="kontak" className="py-24 bg-think-black">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-extrabold mb-4">Paling Sering <span className="text-think-red">Ditanyakan</span></h2>
          <p className="text-think-silver">Informasi lengkap seputar produk dan layanan kami.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={cn(
                "rounded-2xl border transition-all duration-300",
                openIndex === idx ? "glass border-think-red/30" : "bg-think-gray/10 border-white/5 hover:border-white/10"
              )}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-bold text-lg">{faq.q}</span>
                {openIndex === idx ? <Minus className="text-think-red" /> : <Plus />}
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-think-silver leading-relaxed border-t border-white/5 mt-2">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
