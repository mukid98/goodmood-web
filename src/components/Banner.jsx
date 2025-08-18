import React, { useEffect, useState } from "react";
import img1 from "../images/1.jpg";
import img2 from "../images/2.jpg";
import img3 from "../images/3.jpg";

const slides = [img1, img2, img3];

const AutoCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [paused]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div
      className="relative w-full overflow-hidden shadow-lg group "
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Wrapper dengan tinggi responsif */}
      <div className="relative w-full h-[200px] sm:h-[300px] md:h-[550px]">
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
              className="w-full h-full object-cover object-right " 
              // 🔥 mobile/tab rata kanan, desktop rata tengah
              loading={index === currentSlide ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>

      {/* Tombol navigasi kiri-kanan */}
      <div className="absolute inset-0 flex justify-between items-center px-3 sm:px-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <button
          onClick={handlePrev}
          aria-label="Previous Slide"
          className="w-9 h-9 sm:w-12 sm:h-12 flex items-center justify-center bg-black/40 text-white rounded-full shadow-md hover:bg-red-700 transition"
        >
          ❮
        </button>
        <button
          onClick={handleNext}
          aria-label="Next Slide"
          className="w-9 h-9 sm:w-12 sm:h-12 flex items-center justify-center bg-black/40 text-white rounded-full shadow-md hover:bg-red-700 transition"
        >
          ❯
        </button>
      </div>

      {/* Dot Indicator */}
      <div className="absolute bottom-3 sm:bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2 sm:gap-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-red-600 scale-110"
                : "bg-gray-300 hover:bg-gray-500"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default AutoCarousel;
