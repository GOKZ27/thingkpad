

import {
  ShieldCheck,
  Truck,
  RotateCcw,
  Award,
  Star,
  Quote,
} from "lucide-react";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Gilang Pakaya",
    role: "UI/UX Designer",
    text: "ThinkPad sangat nyaman dipakai untuk desain dan multitasking. Build quality premium dan performanya sangat cepat.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Malik",
    role: "Frontend Developer",
    text: "Laptop terbaik untuk coding. Keyboard nyaman, baterai tahan lama, dan performa stabil untuk kerja harian.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=15",
  },
  {
    name: "Stipen",
    role: "Content Creator",
    text: "Editing video jadi lebih ringan dan smooth. Layarnya tajam dan cocok untuk kebutuhan content creator.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=18",
  },
];

export default function Features() {
  return (
    <section className="relative overflow-hidden bg-think-black py-24 text-white">

      {/* Blur Background */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-red-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-think-red/10 blur-[120px] rounded-full" />

      {/* ADVANTAGES */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 mb-28">

        {/* Heading */}
        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Kenapa Pilih{" "}
            <span className="text-think-red">
              ThinkPad?
            </span>
          </h2>

          <p className="text-think-silver max-w-2xl mx-auto">
            Laptop premium dengan performa tinggi,
            keamanan modern, dan desain elegan untuk
            profesional masa kini.
          </p>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {[
            {
              icon: Award,
              title: "Garansi Resmi",
              desc: "Garansi premium resmi hingga 3 tahun.",
            },
            {
              icon: Truck,
              title: "Gratis Ongkir",
              desc: "Pengiriman aman ke seluruh Indonesia.",
            },
            {
              icon: RotateCcw,
              title: "Retur Mudah",
              desc: "Jaminan retur produk hingga 14 hari.",
            },
            {
              icon: ShieldCheck,
              title: "Keamanan AI",
              desc: "Proteksi data dengan TPM 2.0 & AI Security.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="
                bg-white/[0.04]
                border border-white/10
                rounded-3xl
                p-8
                backdrop-blur-sm
                hover:border-think-red/40
                hover:-translate-y-2
                transition-all duration-300
              "
            >

              {/* Icon */}
              <div
                className="
                  w-16 h-16
                  rounded-2xl
                  bg-think-red/10
                  text-think-red
                  flex items-center justify-center
                  mb-6
                "
              >
                <item.icon className="w-8 h-8" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3">
                {item.title}
              </h3>

              {/* Desc */}
              <p className="text-sm text-think-silver leading-relaxed">
                {item.desc}
              </p>

            </div>
          ))}

        </div>
      </div>

      {/* TESTIMONIALS */}
      <div className="relative z-10 py-20 bg-gradient-to-b from-think-gray/20 to-transparent overflow-hidden">

        <div className="max-w-7xl mx-auto px-4">

          {/* Heading */}
         <div className="flex flex-col items-center text-center mb-8">

  <Quote className="w-8 h-8 text-think-red/20 mb-3" />

  <h2 className="text-2xl md:text-3xl font-black mb-3">
    Apa Kata{" "}
    <span className="text-think-red">
      Client Kami?
    </span>
  </h2>

  <div className="w-16 h-[2px] bg-think-red rounded-full" />

</div>

{/* Running Testimonials */}
<div className="relative overflow-hidden">

  <motion.div
    className="flex gap-4"
    animate={{
      x: ["0%", "-50%"],
    }}
    transition={{
      repeat: Infinity,
      duration: 14,
      ease: "linear",
    }}
  >

    {[...testimonials, ...testimonials].map((t, idx) => (
      <div
        key={idx}
        className="
          min-w-[240px]
          md:min-w-[280px]
          bg-white/[0.04]
          border border-white/10
          rounded-2xl
          p-4
          backdrop-blur-md
          hover:border-think-red/40
          transition-all duration-300
          flex items-start gap-3
        "
      >

        {/* Avatar */}
        <img
          src={t.avatar}
          alt={t.name}
          className="
            w-12 h-12
            rounded-full
            object-cover
            border border-think-red
            shrink-0
          "
        />

        {/* Content */}
        <div>

          <p className="text-think-silver italic leading-relaxed mb-2 text-xs md:text-sm">
            "{t.text}"
          </p>

          <div className="font-bold text-sm">
            {t.name}
          </div>

          <div className="text-think-red text-xs mb-2">
            {t.role}
          </div>

          {/* Stars */}
          <div className="flex gap-1 text-yellow-400">
            {[...Array(t.rating)].map((_, i) => (
              <Star
                key={i}
                className="w-3 h-3 fill-current"
              />
            ))}
          </div>

        </div>
      </div>
    ))}

  </motion.div>

</div>
        </div>
      </div>
    </section>
  );
}