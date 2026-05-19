import { motion, AnimatePresence } from 'motion/react';
import React, { useState, useEffect } from 'react';
import { Lock, User, LogOut, Plus, Trash2, Edit3, Save, X, Settings, Shield, Layout, Headset, Box, ArrowLeft, Terminal, CheckCircle } from 'lucide-react';
import { cn } from '../lib/utils';
import { useNavigate } from 'react-router-dom';
import { useData } from '../DataContext';

type DashboardTab = 'products' | 'hero' | 'services';

export default function AdminPage() {
  const navigate = useNavigate();
  const { data, updateData, updateProduct } = useData();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState<DashboardTab>('products');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSystemBooting, setIsSystemBooting] = useState(true);
  const [saveStatus, setSaveStatus] = useState<string | null>(null);

  // Local form states synced with context
  const [heroTitle, setHeroTitle] = useState(data.heroTitle);
  const [heroSubtitle, setHeroSubtitle] = useState(data.heroSubtitle);
  const [serviceEmail, setServiceEmail] = useState(data.serviceEmail);
  const [serviceWA, setServiceWA] = useState(data.serviceWA);
  const [serviceIG, setServiceIG] = useState(data.serviceIG);

  useEffect(() => {
    const timer = setTimeout(() => setIsSystemBooting(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const showSaveStatus = (msg: string) => {
    setSaveStatus(msg);
    setTimeout(() => setSaveStatus(null), 3000);
  };

  const handleCMSUpdate = () => {
    updateData({ heroTitle, heroSubtitle });
    showSaveStatus('CMS Visuals Re-written');
  };

  const handleServiceUpdate = () => {
    updateData({ serviceEmail, serviceWA, serviceIG });
    showSaveStatus('Service Parameters Committed');
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin123') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials (Try: admin / admin123)');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/');
  };

  const handleBack = () => {
    navigate('/');
  };

  if (isSystemBooting) {
    return (
      <div className="fixed inset-0 bg-[#050505] flex items-center justify-center font-mono">
        <div className="flex flex-col items-center gap-4">
          <Terminal className="w-8 h-8 text-think-red animate-pulse" />
          <div className="text-think-red text-[10px] tracking-[0.5em] font-black uppercase">Initializing Secure Terminal...</div>
          <div className="w-48 h-[2px] bg-white/5 relative overflow-hidden">
             <motion.div 
               initial={{ x: '-100%' }}
               animate={{ x: '100%' }}
               transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
               className="absolute inset-0 bg-think-red"
             />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-think-red font-sans relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 p-8 opacity-20 pointer-events-none hidden md:block">
        <Shield className="w-64 h-64 text-think-red/10" />
      </div>

      <AnimatePresence>
        {saveStatus && (
          <motion.div 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 20, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            className="fixed top-0 left-1/2 -translate-x-1/2 z-[100] bg-green-500 text-white px-8 py-3 rounded-sm flex items-center gap-3 font-black uppercase text-[10px] tracking-widest shadow-2xl"
          >
            <CheckCircle className="w-4 h-4" />
            {saveStatus}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {!isLoggedIn ? (
          <motion.div 
            key="login"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="min-h-screen flex items-center justify-center p-4"
          >
            <div className="w-full max-w-md bg-black border border-white/5 p-8 md:p-12 shadow-2xl relative">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-think-red to-transparent" />
              
              <div className="flex flex-col items-center mb-12">
                <div className="w-16 h-16 bg-think-red flex items-center justify-center rounded-sm mb-6 rotate-3 shadow-lg shadow-think-red/20">
                  <Lock className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-black tracking-tighter text-white uppercase italic">Access Restricted</h2>
                <div className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.4em] mt-3">THINKPAD HQ CONSOLE v1.0.4</div>
              </div>

              <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Identity Vector</label>
                  <input 
                    type="text" 
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-sm text-xs font-bold outline-none focus:border-think-red transition-all text-white placeholder:text-gray-700"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Access Token</label>
                  <input 
                    type="password" 
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-sm text-xs font-bold outline-none focus:border-think-red transition-all text-white placeholder:text-gray-700"
                  />
                </div>
                <button className="w-full bg-think-red hover:bg-[#b51f13] text-white py-5 rounded-sm font-black uppercase text-[11px] tracking-[0.3em] transition-all shadow-xl shadow-think-red/20 active:scale-95 group">
                  Authenticate Core Sync
                </button>
              </form>

              <div className="mt-8 pt-8 border-t border-white/5">
                <button 
                  onClick={handleBack}
                  className="w-full flex items-center justify-center gap-2 text-[10px] text-gray-600 font-black uppercase tracking-[0.2em] hover:text-white transition-colors py-2"
                >
                  <ArrowLeft className="w-3 h-3 text-think-red" /> Abort and Exit
                </button>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key="dashboard"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col md:flex-row h-screen"
          >
            {/* Sidebar remains same... */}
            <aside className="w-full md:w-80 bg-black border-r border-white/5 flex flex-col shrink-0">
               <div className="p-8 hidden md:block">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 bg-think-red flex items-center justify-center rounded-sm">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-white tracking-widest uppercase">Console v1.0</div>
                      <div className="text-[9px] text-green-500 font-bold uppercase flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                        Root Context
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    {[
                      { id: 'products', label: 'Inventory', icon: Box },
                      { id: 'hero', label: 'CMS Visuals', icon: Layout },
                      { id: 'services', label: 'Support Hub', icon: Headset },
                    ].map((tab) => (
                      <button 
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as DashboardTab)}
                        className={cn(
                          "w-full flex items-center gap-4 px-6 py-5 rounded-sm transition-all group relative overflow-hidden",
                          activeTab === tab.id ? "bg-think-red text-white" : "text-gray-500 hover:text-white hover:bg-white/5 shadow-inner"
                        )}
                      >
                        <tab.icon className="w-4 h-4" />
                        <span className="text-[11px] font-black uppercase tracking-widest">{tab.label}</span>
                        {activeTab === tab.id && (
                          <motion.div layoutId="tab-active" className="absolute left-0 w-1 h-1/2 bg-white rounded-full" />
                        )}
                      </button>
                    ))}
                  </div>
               </div>

               <div className="mt-auto p-8 border-t border-white/5 hidden md:block">
                  <button 
                    onClick={handleLogout}
                    className="w-full flex items-center gap-4 px-6 py-5 text-gray-600 hover:text-think-red transition-all group"
                  >
                    <LogOut className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    <span className="text-[11px] font-black uppercase tracking-widest">Terminate Access</span>
                  </button>
               </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto bg-[#080808] p-6 md:p-16">
               <motion.div 
                 key={activeTab}
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 className="max-w-5xl mx-auto"
               >
                 {activeTab === 'products' && (
                    <div className="space-y-12">
                      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-8 border-b border-white/5">
                        <div className="space-y-2">
                           <div className="text-think-red text-[10px] font-black uppercase tracking-[0.4em]">Asset Management</div>
                           <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white uppercase italic">Inventory</h2>
                        </div>
                      </div>

                      <div className="grid gap-4">
                        {data.products.map((product) => (
                          <div key={product.id} className="group flex flex-col md:flex-row items-center justify-between p-6 bg-black border border-white/5 hover:border-think-red/40 transition-all rounded-sm gap-6 hover:shadow-2xl hover:shadow-think-red/5">
                            <div className="flex items-center gap-8 w-full">
                               <div className="w-24 h-20 bg-[#111] rounded-sm p-4 ring-1 ring-white/5 flex-shrink-0 group-hover:scale-105 transition-transform">
                                 <img src={product.image} className="w-full h-full object-contain grayscale brightness-125" alt="" />
                               </div>
                               <div className="flex-1">
                                  <div className="flex items-center gap-3 mb-1">
                                    <span className="px-2 py-0.5 bg-think-red/10 text-think-red text-[8px] font-black uppercase tracking-widest rounded-full">ACTIVE</span>
                                    <div className="text-xs md:text-sm font-black uppercase tracking-widest text-white">{product.name}</div>
                                  </div>
                                  <div className="flex gap-6">
                                     <div className="flex flex-col">
                                       <span className="text-[8px] text-gray-600 font-bold uppercase tracking-widest">Base Value</span>
                                       <span className="text-xs font-bold text-think-red tracking-widest">Rp {(product.price / 1000000).toFixed(1)}M</span>
                                     </div>
                                  </div>
                               </div>
                            </div>
                            <div className="flex gap-2 w-full md:w-auto opacity-40 group-hover:opacity-100 transition-opacity">
                               <button className="flex-1 md:flex-none p-4 bg-white/5 hover:bg-white/10 border border-white/5 rounded-sm transition-all"><Edit3 className="w-4 h-4 text-white" /></button>
                               <button className="flex-1 md:flex-none p-4 bg-white/5 hover:text-think-red border border-white/5 rounded-sm transition-all"><Trash2 className="w-4 h-4" /></button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                 )}

                 {activeTab === 'hero' && (
                    <div className="space-y-12">
                      <div className="space-y-2 pb-8 border-b border-white/5">
                        <div className="text-think-red text-[10px] font-black uppercase tracking-[0.4em]">Content System</div>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white uppercase italic">CMS Core</h2>
                      </div>

                      <div className="grid gap-12 bg-black border border-white/5 p-8 md:p-16 rounded-sm relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 left-0 w-[4px] h-full bg-think-red" />
                        <div className="space-y-10">
                          <div className="grid gap-4">
                            <label className="text-[11px] font-black text-gray-500 uppercase tracking-[0.3em] flex items-center gap-2">
                               <Terminal className="w-3 h-3 text-think-red" /> Entry Headline
                            </label>
                            <input 
                              value={heroTitle}
                              onChange={(e) => setHeroTitle(e.target.value)}
                              className="w-full bg-white/5 border-b border-white/10 px-0 py-6 text-xl md:text-3xl font-black text-white outline-none focus:border-think-red transition-all"
                            />
                          </div>
                          <div className="grid gap-4">
                            <label className="text-[11px] font-black text-gray-500 uppercase tracking-[0.3em] flex items-center gap-2">
                               <Terminal className="w-3 h-3 text-think-red" /> Manifest Description
                            </label>
                            <textarea 
                              value={heroSubtitle}
                              onChange={(e) => setHeroSubtitle(e.target.value)}
                              rows={4}
                              className="w-full bg-white/5 border-b border-white/10 px-0 py-6 text-sm md:text-lg font-medium text-gray-400 outline-none focus:border-think-red transition-all resize-none leading-relaxed"
                            />
                          </div>
                        </div>

                        <div className="flex justify-end pt-8">
                          <button 
                            onClick={handleCMSUpdate}
                            className="bg-think-red text-white px-12 py-6 rounded-sm font-black uppercase text-xs tracking-[0.4em] hover:bg-[#b51f13] transition-all shadow-xl shadow-think-red/10 active:scale-95 flex items-center gap-4"
                          >
                            <Save className="w-4 h-4" /> Rewrite Visual Identity
                          </button>
                        </div>
                      </div>
                    </div>
                 )}

                 {activeTab === 'services' && (
                    <div className="space-y-12">
                      <div className="space-y-2 pb-8 border-b border-white/5">
                        <div className="text-think-red text-[10px] font-black uppercase tracking-[0.4em]">Broadcast Channels</div>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white uppercase italic">Support Node</h2>
                      </div>

                      <div className="max-w-2xl space-y-12 bg-black border border-white/5 p-12 rounded-sm relative">
                         <div className="space-y-8">
                            {[
                              { label: 'Priority Support Vector', val: serviceEmail, set: setServiceEmail, placeholder: 'Email Address' },
                              { label: 'Direct WhatsApp Node', val: serviceWA, set: setServiceWA, placeholder: '+62...' },
                              { label: 'Social Interface Handle', val: serviceIG, set: setServiceIG, placeholder: '@handle' },
                            ].map((field, i) => (
                              <div key={i} className="space-y-4">
                                <label className="text-[10px] font-black text-gray-600 uppercase tracking-widest">{field.label}</label>
                                <input 
                                  value={field.val} 
                                  onChange={(e) => field.set(e.target.value)} 
                                  placeholder={field.placeholder}
                                  className="w-full bg-white/5 border-b border-white/10 py-5 text-sm md:text-base font-bold text-white outline-none focus:border-think-red transition-all" 
                                />
                              </div>
                            ))}
                         </div>
                         <button 
                           onClick={handleServiceUpdate}
                           className="w-full border-2 border-think-red text-white py-6 rounded-sm font-black uppercase text-xs tracking-[0.5em] hover:bg-think-red transition-all flex items-center justify-center gap-4"
                         >
                           <Save className="w-4 h-4" /> Commit Sync Parameters
                         </button>
                      </div>
                    </div>
                 )}
               </motion.div>
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
