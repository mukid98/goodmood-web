import React from "react";
import { motion } from "framer-motion";
import {
  Printer,
  Book,
  Megaphone,
  Package,
  ShoppingBag,
  PenTool,
  Shirt,
  Camera,
} from "lucide-react";

const categories = [
  {
    title: "Large Format Digital",
    icon: Printer,
    color: "from-pink-500 to-red-400",
    desc: "Cetak banner, spanduk, backdrop, dan media besar lainnya dengan kualitas tinggi.",
  },
  {
    title: "Offset Printing",
    icon: Book,
    color: "from-blue-500 to-indigo-400",
    desc: "Cetak massal brosur, katalog, majalah, dan kebutuhan bisnis lainnya.",
  },
  {
    title: "Display Promotion",
    icon: Megaphone,
    color: "from-green-500 to-emerald-400",
    desc: "Media promosi kreatif seperti X-banner, roll-up banner, dan display booth.",
  },
  {
    title: "Merchandise",
    icon: ShoppingBag,
    color: "from-yellow-500 to-orange-400",
    desc: "Buat merchandise custom seperti tumbler, mug, pin, dan gift set.",
  },
  {
    title: "Stationary",
    icon: PenTool,
    color: "from-purple-500 to-pink-400",
    desc: "Kartu nama, map, kop surat, dan kebutuhan kantor lainnya.",
  },
  {
    title: "Packaging",
    icon: Package,
    color: "from-teal-500 to-cyan-400",
    desc: "Kotak produk, paper bag, dan kemasan kreatif sesuai branding.",
  },
  {
    title: "Clothing & Textile",
    icon: Shirt,
    color: "from-rose-500 to-pink-400",
    desc: "Sablon kaos, totebag, jersey, dan berbagai bahan tekstil.",
  },
  {
    title: "Photo & Home Decor",
    icon: Camera,
    color: "from-indigo-500 to-purple-400",
    desc: "Cetak foto, canvas, wall art, dan dekorasi rumah yang estetik.",
  },
];

const Layanan = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
        >
          Layanan Kami
        </motion.h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 rounded-2xl bg-white shadow-md hover:shadow-xl hover:-translate-y-2 transition-all cursor-pointer group`}
            >
              <div
                className={`w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-r ${cat.color} text-white mb-4 group-hover:scale-110 transition-transform`}
              >
                <cat.icon size={28} />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {cat.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {cat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Layanan;
