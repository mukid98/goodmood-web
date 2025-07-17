import React, { useEffect, useState } from "react";

const slides = [
  "https://i.imgur.com/OqMw94s.jpg",
  "https://i.imgur.com/XFC1vjX.jpg",
  "https://i.imgur.com/X1LNvQE.jpg"
];


const AutoCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full h-[300px] sm:h-[500px] overflow-hidden rounded-lg shadow-lg">
      {slides.map((url, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={url}
            alt={`slide-${index}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Navigasi tombol kiri-kanan */}
      <div className="absolute inset-0 flex justify-between items-center px-10 z-20">
        <button
          onClick={handlePrev}
          className="w-12 h-12  flex items-center justify-center bg-[#a5a5a55b] text-white rounded-2xl shadow-md hover:bg-[#800000]"
        >
          ❮
        </button>
        <button
          onClick={handleNext}
          className="w-12 h-12 flex items-center justify-center bg-[#a5a5a55b] text-white rounded-2xl shadow-md hover:bg-[#800000]"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default AutoCarousel;
