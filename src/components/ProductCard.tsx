import {
  Star,
  ShoppingCart,
  Eye,
  Cpu,
  Database,
  Monitor,
} from 'lucide-react';

import { Product } from '../constants';
import { motion } from 'motion/react';

// IMPORT FOTO LANGSUNG SEPERTI HERO
import img10 from '../assets/10.jpeg';
import img11 from '../assets/11.jpeg';
import img12 from '../assets/12.jpeg';
import img13 from '../assets/13.jpeg';
import img14 from '../assets/14.jpeg';
import img16 from '../assets/16.jpeg';
import img17 from '../assets/17.jpeg';
import img18 from '../assets/18.jpeg';

interface ProductCardProps {
  product: Product;
  onPreview: (p: Product) => void;
}

export default function ProductCard({
  product,
  onPreview,
}: ProductCardProps) {

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  // LOGIKA FOTO MANUAL
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

  // FALLBACK FOTO
  const currentImage =
    productImages[product.id] || img10;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="
        group
        bg-[#0b0b0b]
        border border-white/5
        rounded-2xl
        overflow-hidden
        hover:border-think-red/40
        transition-all duration-500
        flex flex-col
        h-full
        hover:-translate-y-1
        hover:shadow-2xl
        hover:shadow-think-red/10
      "
    >

      {/* IMAGE */}
      <div className="relative h-52 overflow-hidden bg-gradient-to-b from-[#111] to-black">

        <img
          src={currentImage}
          alt={product.name}
          className="
            w-full
            h-full
            object-contain
            p-6
            transition-all
            duration-700
            group-hover:scale-110
            drop-shadow-[0_20px_30px_rgba(0,0,0,0.6)]
          "
        />

        {/* PROMO */}
        {product.isPromo && (
          <div
            className="
              absolute
              top-3
              left-3
              bg-think-red
              text-white
              text-[9px]
              font-black
              uppercase
              tracking-[0.2em]
              px-3
              py-1
              rounded-full
            "
          >
            HOT ITEM
          </div>
        )}

        {/* PREVIEW BUTTON */}
        <div
          className="
            absolute
            inset-0
            bg-black/40
            opacity-0
            group-hover:opacity-100
            transition-all
            duration-300
            flex
            items-center
            justify-center
          "
        >
          <button
            onClick={() => onPreview(product)}
            className="
              w-12
              h-12
              rounded-full
              bg-white/10
              backdrop-blur-md
              border
              border-white/20
              flex
              items-center
              justify-center
              hover:bg-think-red
              transition-all
            "
          >
            <Eye className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-5 flex flex-col flex-grow">

        {/* CATEGORY */}
        <div className="text-[10px] uppercase tracking-[0.3em] text-think-red font-bold mb-2">
          ThinkPad Premium Series
        </div>

        {/* NAME */}
        <h3
          className="
            text-lg
            font-black
            text-white
            leading-tight
            mb-3
            group-hover:text-think-red
            transition-colors
          "
        >
          {product.name}
        </h3>

        {/* SPECS */}
        <div className="space-y-2 mb-5">

          <div className="flex items-center gap-2 text-sm text-gray-300">
            <Cpu className="w-4 h-4 text-think-red" />
            <span>{product.specs.cpu}</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-300">
            <Database className="w-4 h-4 text-think-red" />
            <span>{product.specs.ram}</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-300">
            <Monitor className="w-4 h-4 text-think-red" />
            <span>{product.specs.display}</span>
          </div>

        </div>

        {/* RATING */}
        <div className="flex gap-1 text-yellow-400 mb-5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4 fill-current"
            />
          ))}
        </div>

        {/* PRICE */}
        <div className="mt-auto flex items-center justify-between">

          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-1">
              Starting From
            </div>

            <div className="text-xl font-black text-think-red">
              {formatPrice(product.price)}
            </div>
          </div>

          {/* BUTTON */}
          <button
            className="
              w-12
              h-12
              rounded-full
              bg-think-red
              flex
              items-center
              justify-center
              hover:scale-110
              transition-all
              shadow-lg
              shadow-think-red/30
            "
          >
            <ShoppingCart className="w-5 h-5 text-white" />
          </button>

        </div>
      </div>
    </motion.div>
  );
}