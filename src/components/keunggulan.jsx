import React from "react";
import { motion } from "framer-motion";

const benefits = [
  {
    title: "Proses Cepat",
    desc: "Proses Cepat & Tepat Menyesuaikan dengan deadline serta melayani kebutuhan urgent",
    img: "/src/images/benefit1.webp",
  },
  {
    title: "Free Delivery",
    desc: "Gratis Biaya Pengiriman 1 spot area Jakarta Untuk Customer B2B (S & K Berlaku)",
    img: "/src/images/benefit2.webp",
  },
  {
    title: "Fleksibel",
    desc: "Terbuka untuk berbagai mekanisme kerjasama dan sistem pembayaran fleksibel",
    img: "/src/images/benefit3.webp",
  },
  {
    title: "Fast Response",
    desc: "Layanan CS yang siap merespon segala kebutuhan percetakan anda dengan tepat",
    img: "/src/images/benefit4.webp",
  },
];

export default function Keunggulan() {
  return (
    <section className="py-16 bg-[#fff1f15e]">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-10">Keunggulan Kami</h2>

        {/* Grid responsif */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {benefits.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <img
                src={item.img}
                alt={item.title}
                className="mb-4 max-h-50 w-auto object-contain"
              />
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-700 text-sm mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
