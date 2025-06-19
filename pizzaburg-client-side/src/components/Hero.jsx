import heroLottie from '../assets/lotties/heroLottie.json'; 
import FloatingEmojis from './FloatingEmojis';
import Lottie from "lottie-react";
import bitcoin from "../assets/images/bitcoin-removebg-preview.png"
import fifa22 from "../assets/images/fifa22.jpeg"
import friends from "../assets/images/friends.jpeg"
import dragon from "../assets/images/house-of-the-dragon.webp"
import instagram from "../assets/images/instagram.png"
import tiktok from "../assets/images/tiktok.png"
import spongebob from "../assets/images/Tired-SpongeBob.jpeg"
import pubg from "../assets/images/pubg.avif"
import putin from "../assets/images/putin.avif"
import simpsons from "../assets/images/simpsons.jpeg"

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      
      {/* --- Background Layer (Stickers + Logo) --- */}
      <div className="absolute inset-0 z-0 bg-[url('https://cdn.corporatefinanceinstitute.com/assets/united-states-dollar-usd.jpeg')] bg-cover bg-center">
        {/* PizzaBurg Logo */}
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl font-bold bg-red-600 px-6 py-2 rounded shadow-lg">
          PizzaBurg
        </h1>

        {/* Stickers */}
        <img src={bitcoin} className="absolute top-10 left-10 w-25 rotate-6" />
        <img src={friends} className="absolute bottom-24 left-20 w-52" />
        <img src={putin} className="absolute top-24 right-10 w-60" />
        <img src={dragon} className="absolute top-1/3 left-1/4 w-48" />
        <img src={instagram} className="absolute bottom-10 left-10 w-20" />
        <img src={tiktok} className="absolute bottom-10 left-24 w-20" />
        <img src={fifa22}className="absolute top-8 right-24 w-46" />
        <img src={pubg} className="absolute bottom-8 right-20 w-46" />
        <img src={spongebob} className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-42" />
        <img src={simpsons} className="absolute bottom-4 right-4 w-30" />
      </div>

      {/* --- Foreground Content Layer --- */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center justify-between px-6">
        {/* LEFT CONTENT */}
        <div className="space-y-6 max-w-xl">
          <h1 className="text-5xl font-bold text-gray-900">
            Fastest <span className="text-orange-600">Pizza</span> in Town
          </h1>
          <p className="text-lg text-gray-600">
            Burger, Pizza, Fries, Drinks – Hot & Fresh delivered to your door in minutes!
          </p>
          <div className="flex gap-4">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition">Order Now</button>
            <button className="bg-white text-gray-900 border px-6 py-3 rounded-md hover:bg-gray-100 transition">View Menu</button>
          </div>
        </div>

        {/* Right: Emojis + Lottie */}
        <div className="relative w-full md:w-1/2 max-w-md">
          <FloatingEmojis />
          <Lottie animationData={heroLottie} loop={true} />

         
        </div>
      </div>
      
    </section>
  );
};

export default Hero;

