import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import CountdownTimer from '../components/CountDownTimer';
import pizzaHero from "../assets/lotties/pizzaHero.json"
import Lottie from 'lottie-react';
import Testimonials from '../components/Testimonials';
import useTabTitleChanger from '../components/useTabTitleChanger';

const Home = () => {
   useTabTitleChanger();
  useEffect(() => {
    document.title = "Home | Pizzaburg 🍕";
  }, []);
  
 const offerEndTime = new Date();
offerEndTime.setHours(23, 59, 59, 999);

  return (
    <div>
      <Hero />
        {/* Offer Section */}
      <div className="bg-gradient-to-r from-orange-300 to-orange-500 text-white p-6">
        <div className='flex justify-center'>
          <Lottie animationData={pizzaHero} style={{ height: 150 , width:150}} />
        </div>
        <h1 className="text-3xl p-8 font-bold text-center">🔥Today's Special Offer!!</h1>
        <h3 className="text-center">Get 50% off on all pizzas - Limited time only!</h3>
        <p className="text-center mt-4">⏰ Offer ends in:</p>
        <CountdownTimer targetTime={offerEndTime} />
        <div className='flex justify-center mt-4'>
            <button className='btn '>Grab now!</button>
        </div>
      </div>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;

