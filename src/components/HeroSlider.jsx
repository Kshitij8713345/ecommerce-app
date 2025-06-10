import React, { useState, useEffect } from "react";

const images = [
  `${import.meta.env.BASE_URL}Banner1.jpg`,
  `${import.meta.env.BASE_URL}Banner2.jpg`,
  `${import.meta.env.BASE_URL}Banner4.jpg`,
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-60 md:h-96 overflow-hidden rounded-xl shadow mb-8">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`Slide ${i}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
