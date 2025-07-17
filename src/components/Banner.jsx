import React, { useEffect, useState } from "react";

const slides = [
  "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
  "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp",
  "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp",
  "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp",
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
    <div className="carousel w-full">
      {slides.map((url, index) => (
        <div
          key={index}
          className={`carousel-item w-full absolute transition-opacity duration-700 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={url} className="w-full object-cover" alt={`slide-${index}`} />
        </div>
      ))}

      <div className="absolute left-5 right-5 top-1/2 flex justify-between items-center transform -translate-y-1/2 z-10">
        <button className="w-10 h-10 flex items-center justify-center bg-[#800000] text-white rounded-full shadow-md hover:bg-red-900" onClick={handlePrev}>❮</button>
        <button className="w-10 h-10 flex items-center justify-center bg-[#800000] text-white rounded-full shadow-md hover:bg-red-900" onClick={handleNext}>❯</button>
      </div>
    </div>
  );
};

export default AutoCarousel;
