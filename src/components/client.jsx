import React from "react";
import "./clientslider.css";

const logos = [
  "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
];

export default function ClientSlider() {
  return (
    <div className="slider-wrapper">
      <div className="slider">
        {logos.concat(logos).map((logo, index) => (
          <div className="slide" key={index}>
            <img src={logo} alt={`logo-${index}`} className="h-16 object-contain"/>
          </div>
        ))}
      </div>
 {/* Blur kiri */}
      <div className="absolute left-10 top-0 w-24 h-full bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
      {/* Blur kanan */}
      <div className="absolute right-10 top-0 w-24 h-full bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
    
    </div>
  );
}
