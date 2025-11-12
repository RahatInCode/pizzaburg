import React, { useState, useEffect } from "react";
import pizza1 from "../assets/images/hero-pizza.jpg";
import pizza2 from "../assets/images/hero-pizza-2.jpg";
import pizza3 from "../assets/images/hero-pizza-3.webp";
import pizza4 from "../assets/images/hero-pizza-3.jpg";

const images = [pizza1, pizza2, pizza3, pizza4];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="h-screen bg-cover bg-center relative flex items-center justify-center text-center transition-all duration-1000 ease-in-out"
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-1000"></div>

      <div className="relative z-10 text-white">
        <p className="text-yellow-400 text-xl italic mb-2">
          Authentic Italian Pizzas
        </p>
        <h1 className="text-5xl font-bold mb-4">The Best Pizza in Town</h1>
        <button className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-full hover:bg-yellow-500 transition">
          ORDER ONLINE NOW
        </button>
      </div>
    </div>
  );
};

export default Hero;



