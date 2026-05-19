import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  ShoppingCart,
  ShieldCheck,
  Zap,
  Laptop,
  Clock
} from 'lucide-react';

import { Product } from '../constants';

// IMPORT FOTO
import img10 from '../assets/10.jpeg';
import img11 from '../assets/11.jpeg';
import img12 from '../assets/12.jpeg';
import img13 from '../assets/13.jpeg';
import img14 from '../assets/14.jpeg';
import img16 from '../assets/16.jpeg';
import img17 from '../assets/17.jpeg';
import img18 from '../assets/18.jpeg';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({
  product,
  onClose,
}: ProductModalProps) {

  if (!product) return null;

  // SAMA SEPERTI PRODUCTCARD
  const productImages: Record<string, string> = {
    '1': img10,
    '2': img11,
    '3': img12,
    '4': img13,
    '5': img18,
    '6': img14,
    '7': img17,
    '8': img16,
    '9': img18,
  };

  const currentImage =
    productImages[product.id] || img10;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">

        {/* BACKDROP */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/90 backdrop-blur-md"
        />

        {/* MODAL */}
        <motion.div
          initial={{ scale: 0.92, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.92, opacity: 0, y: 20 }}
          className="
            relative
            max-w-6xl
            w-full
            max-h-[92vh]
            overflow-y-auto
            rounded-[2rem]
            bg-[#0b0b0b]
            border border-white/10
            shadow-2xl
          "
        >

          {/* CLOSE */}
          <button
            onClick={onClose}
            className="
              absolute
              top-5
              right-5
              z-20
              p-2
              rounded-full
              hover:bg-white/10
              transition-all
            "
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <div className="grid lg:grid-cols-2 gap-10 p-8 lg:p-12">

            {/* IMAGE SIDE */}
            <div className="relative rounded-3xl overflow-hidden bg-[#111]">

              <img
                src={currentImage}
                alt={product.name}
                className="
                  w-full
                  h-full
                  object-contain
                  p-10
                  drop-shadow-[0_25px_45px_rgba(0,0,0,0.7)]
                "
              />

              <div className="absolute bottom-6 left-6 flex gap-3">

                <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl text-xs font-bold border border-white/10">
                  Premium ThinkPad
                </div>

                <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl text-xs font-bold border border-white/10">
                  MIL-STD Tested
                </div>

              </div>

            </div>

            {/* CONTENT SIDE */}
            <div className="space-y-8">

              <div>

                <span className="text-think-red text-sm font-black uppercase tracking-[0.2em] mb-3 block">
                  {product.category}
                </span>

                <h2 className="text-4xl lg:text-5xl font-black leading-tight">
                  {product.name}
                </h2>

              </div>

              {/* SPECS */}
              <div>

                <h4 className="text-lg font-bold mb-5">
                  Spesifikasi Unggulan
                </h4>

                <div className="grid grid-cols-2 gap-4">

                  {[
                    {
                      icon: Laptop,
                      label: 'Display',
                      val: product.specs.display,
                    },

                    {
                      icon: Zap,
                      label: 'CPU',
                      val: product.specs.cpu,
                    },

                    {
                      icon: ShieldCheck,
                      label: 'RAM',
                      val: product.specs.ram,
                    },

                    {
                      icon: Clock,
                      label: 'Storage',
                      val: product.specs.storage,
                    },

                  ].map((spec, i) => (

                    <div
                      key={i}
                      className="
                        bg-white/5
                        border
                        border-white/5
                        rounded-2xl
                        p-5
                      "
                    >

                      <spec.icon className="w-5 h-5 text-think-red mb-3" />

                      <div className="text-[10px] uppercase text-gray-400 font-bold mb-1">
                        {spec.label}
                      </div>

                      <div className="font-medium text-sm">
                        {spec.val}
                      </div>

                    </div>

                  ))}

                </div>

              </div>

              {/* PRICE */}
              <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-8">

                <div>

                  <div className="text-[11px] uppercase tracking-[0.2em] text-gray-500 mb-2">
                    Starting From
                  </div>

                  <div className="text-4xl font-black text-think-red">
                    {new Intl.NumberFormat('id-ID', {
                      style: 'currency',
                      currency: 'IDR',
                      minimumFractionDigits: 0,
                    }).format(product.price)}
                  </div>

                </div>

                <button
                  className="
                    flex
                    items-center
                    gap-3
                    bg-think-red
                    hover:bg-red-700
                    transition-all
                    px-10
                    py-5
                    rounded-2xl
                    font-black
                    text-white
                    shadow-xl
                    shadow-red-900/30
                  "
                >
                  <ShoppingCart className="w-6 h-6" />
                  Tambah ke Keranjang
                </button>

              </div>

            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}