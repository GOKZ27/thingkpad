import { useState, useMemo } from 'react';
import { Product } from '../constants';
import { Search, Filter, SortDesc, Grid2X2, List } from 'lucide-react';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { useData } from '../DataContext';

const categories = ['All', 'X1 Carbon', 'T Series', 'P Series', 'AI Edition'];

export default function ProductSection() {
  const { data } = useData();
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'price-asc' | 'price-desc' | 'rating'>('rating');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    let result = data.products.filter((p) => {
      const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            p.specs.cpu.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    if (sortBy === 'price-asc') result.sort((a, b) => a.price - b.price);
    if (sortBy === 'price-desc') result.sort((a, b) => b.price - a.price);
    if (sortBy === 'rating') result.sort((a, b) => b.rating - a.rating);

    return result;
  }, [activeCategory, searchQuery, sortBy, data.products]);

  return (
    <section id="produk" className="py-24 bg-think-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <ProductModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <aside className="w-full lg:w-56 shrink-0 space-y-12">
            <div>
              <h3 className="text-xs uppercase tracking-[0.3em] text-think-red font-black mb-6">Series</h3>
              <div className="space-y-4">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={cn(
                      "flex items-center justify-between w-full text-sm font-bold transition-all group",
                      activeCategory === cat ? "text-white" : "text-gray-400 hover:text-white"
                    )}
                  >
                    <span>{cat}</span>
                    <span className={cn(
                      "text-[10px] px-1.5 py-0.5 rounded transition-opacity",
                      activeCategory === cat ? "bg-white/10 opacity-100" : "opacity-0 group-hover:opacity-100"
                    )}>
                      {cat === 'All' ? data.products.length : data.products.filter(p => p.category === cat).length}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            
          </aside>

          {/* Main Grid */}
          <div className="flex-grow">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
               <div className="relative w-full md:max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-500" />
                <input
                  type="text"
                  placeholder="Filter by specs or model..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-sm pl-12 pr-4 py-3 text-xs focus:border-think-red/50 outline-none transition-all font-medium"
                />
              </div>

              <div className="flex items-center gap-4 w-full md:w-auto">
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-sm px-4 py-3 shrink-0">
                  <SortDesc className="w-3.5 h-3.5 text-think-red" />
                  <select 
                    title="Sort"
                    className="bg-transparent text-[11px] font-black uppercase tracking-wider outline-none text-white cursor-pointer"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                  >
                    <option value="rating" className="bg-think-matte">Rating</option>
                    <option value="price-asc" className="bg-think-matte">Cheap</option>
                    <option value="price-desc" className="bg-think-matte">Premium</option>
                  </select>
                </div>
              </div>
            </div>

            <AnimatePresence mode="popLayout">
              {filteredProducts.length > 0 ? (
                <motion.div
                  layout
                  className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6"
                >
                  {filteredProducts.map((product) => (
                    <ProductCard 
                      key={product.id} 
                      product={product} 
                      onPreview={(p) => setSelectedProduct(p)}
                    />
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center justify-center py-20 text-center"
                >
                  <Search className="w-12 h-12 text-think-gray mb-4" />
                  <h3 className="text-lg font-bold">No products found</h3>
                  <p className="text-xs text-gray-500 font-medium">Try adjusting your filters or search terms.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
