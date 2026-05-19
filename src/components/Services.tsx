import { motion } from 'motion/react';
import { Mail, MessageCircle, Instagram, Send, ShieldCheck, Clock } from 'lucide-react';
import React, { useState } from 'react';
import { useData } from '../DataContext';

export default function Services() {
  const { data } = useData();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
   <section id="tentang" className="py-16 bg-think-black border-y border-white/5">
  <div className="max-w-6xl mx-auto px-4 md:px-6">
    
    <div className="grid lg:grid-cols-2 gap-10 items-start">

      {/* Contact Info */}
      <div className="space-y-8">
        
        <div>
          <h2 className="text-3xl md:text-4xl font-display font-black mb-4 uppercase tracking-tight leading-tight">
            Pusat <span className="text-think-red">Pelayanan</span>
          </h2>

          <p className="text-gray-400 text-sm leading-relaxed max-w-md">
            Kami memberikan dukungan teknis dan konsultasi produk terbaik untuk setiap unit ThinkPad Anda. Hubungi kami melalui kanal resmi di bawah ini.
          </p>
        </div>

        <div className="space-y-5">

          <a
            href={`mailto:${data.serviceEmail}`}
            className="flex items-center gap-4 group"
          >
            <div className="w-12 h-12 glass flex items-center justify-center border border-white/10 group-hover:border-think-red transition-all">
              <Mail className="w-5 h-5 text-think-red" />
            </div>

            <div>
              <div className="text-[9px] text-gray-500 font-black uppercase tracking-widest mb-1">
                Email Support
              </div>

              <div className="text-sm font-semibold">
                {data.serviceEmail}
              </div>
            </div>
          </a>

          <a
            href={`https://wa.me/${data.serviceWA}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 group"
          >
            <div className="w-12 h-12 glass flex items-center justify-center border border-white/10 group-hover:border-think-red transition-all">
              <MessageCircle className="w-5 h-5 text-think-red" />
            </div>

            <div>
              <div className="text-[9px] text-gray-500 font-black uppercase tracking-widest mb-1">
                WhatsApp Fast Response
              </div>

              <div className="text-sm font-semibold">
                {data.serviceWA}
              </div>
            </div>
          </a>

          <a
            href={`https://instagram.com/${data.serviceIG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 group"
          >
            <div className="w-12 h-12 glass flex items-center justify-center border border-white/10 group-hover:border-think-red transition-all">
              <Instagram className="w-5 h-5 text-think-red" />
            </div>

            <div>
              <div className="text-[9px] text-gray-500 font-black uppercase tracking-widest mb-1">
                Instagram Business
              </div>

              <div className="text-sm font-semibold">
                @{data.serviceIG}
              </div>
            </div>
          </a>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-2 gap-3">

          <div className="p-4 border border-white/5 bg-white/[0.02]">
            <ShieldCheck className="w-4 h-4 text-think-red mb-2" />

            <div className="text-[10px] font-bold uppercase tracking-widest mb-1">
              Guaranteed
            </div>

            <div className="text-[9px] text-gray-500">
              Original Spareparts Only
            </div>
          </div>

          <div className="p-4 border border-white/5 bg-white/[0.02]">
            <Clock className="w-4 h-4 text-think-red mb-2" />

            <div className="text-[10px] font-bold uppercase tracking-widest mb-1">
              Response
            </div>

            <div className="text-[9px] text-gray-500">
              &lt; 1 Hour Response Time
            </div>
          </div>

        </div>
      </div>

      {/* Contact Form */}
      <div className="glass p-6 md:p-8 border border-white/10 shadow-2xl relative overflow-hidden">

        <div className="absolute top-0 left-0 w-[3px] h-full bg-think-red" />

        <form onSubmit={handleSubmit} className="space-y-5">

          <div className="grid md:grid-cols-2 gap-4">

            <div className="space-y-2">
              <label className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-500">
                Nama Lengkap
              </label>

              <input
                required
                type="text"
                placeholder="John Doe"
                className="w-full bg-white/5 border border-white/10 px-4 py-3 text-xs font-medium focus:border-think-red outline-none transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-500">
                Email Address
              </label>

              <input
                required
                type="email"
                placeholder="name@example.com"
                className="w-full bg-white/5 border border-white/10 px-4 py-3 text-xs font-medium focus:border-think-red outline-none transition-all"
              />
            </div>

          </div>

          <div className="space-y-2">
            <label className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-500">
              Subjek Kendala/Pertanyaan
            </label>

            <select className="w-full bg-white/5 border border-white/10 px-4 py-3 text-xs font-medium focus:border-think-red outline-none transition-all cursor-pointer">

              <option className="bg-think-black">
                Konsultasi Pembelian
              </option>

              <option className="bg-think-black">
                Klaim Garansi
              </option>

              <option className="bg-think-black">
                Technical Support
              </option>

              <option className="bg-think-black">
                Partnership
              </option>

            </select>
          </div>

          <div className="space-y-2">
            <label className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-500">
              Pesan Anda
            </label>

            <textarea
              required
              rows={4}
              placeholder="Tuliskan detail pertanyaan atau bantuan yang Anda butuhkan..."
              className="w-full bg-white/5 border border-white/10 px-4 py-3 text-xs font-medium focus:border-think-red outline-none transition-all resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={submitted}
            className="w-full bg-think-red hover:bg-[#b51f13] text-white py-4 font-black uppercase text-[11px] tracking-[0.25em] shadow-xl shadow-think-red/10 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {submitted ? (
              "Pesan Terkirim!"
            ) : (
              <>
                <Send className="w-4 h-4" />
                Kirim Pesan
              </>
            )}
          </button>

          <div className="text-[8px] text-gray-600 font-bold uppercase tracking-widest text-center mt-2 italic">
            Data Anda aman bersama kami. ThinkShield Protection Active.
          </div>

        </form>
      </div>

    </div>
  </div>
</section>  );
}
