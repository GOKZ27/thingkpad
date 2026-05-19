import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, PRODUCTS } from './constants';

interface SiteData {
  heroTitle: string;
  heroSubtitle: string;
  serviceEmail: string;
  serviceWA: string;
  serviceIG: string;
  products: Product[];
}

interface DataContextType {
  data: SiteData;
  updateData: (newData: Partial<SiteData>) => void;
  updateProduct: (id: string, updates: Partial<Product>) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

const STORAGE_KEY = 'thinkpad_hq_data';

const DEFAULT_DATA: SiteData = {
  heroTitle: 'Performance For Professionals.',
  heroSubtitle: 'Engineered for power, refined for elegance. The legendary ThinkPad reliability meets the future of AI-driven productivity.',
  serviceEmail: 'gilangpkyaa@gmail.com',
  serviceWA: '087855032334',
  serviceIG: 'gilang_pkyaa',
  products: PRODUCTS,
};

export function DataProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<SiteData>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : DEFAULT_DATA;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, [data]);

  const updateData = (newData: Partial<SiteData>) => {
    setData(prev => ({ ...prev, ...newData }));
  };

  const updateProduct = (id: string, updates: Partial<Product>) => {
    setData(prev => ({
      ...prev,
      products: prev.products.map(p => p.id === id ? { ...p, ...updates } : p)
    }));
  };

  return (
    <DataContext.Provider value={{ data, updateData, updateProduct }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (!context) throw new Error('useData must be used within DataProvider');
  return context;
}
