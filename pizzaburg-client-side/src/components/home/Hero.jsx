// src/components/home/Hero.jsx
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router';
import './Hero.css';

const Hero = () => {
  const floatingIngredients = [
    { emoji: '🧅', delay: 0, duration: 3 },
    { emoji: '🫒', delay: 0.5, duration: 3.5 },
    { emoji: '🍃', delay: 1, duration: 4 },
    { emoji: '🌶️', delay: 1.5, duration: 3.2 },
    { emoji: '🧀', delay: 2, duration: 3.8 }
  ];

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Handmade, With an Extra
              <span className="highlight"> Pinch of Love</span>
            </motion.h1>
            
            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Experience the authentic taste of Italy with our wood-fired pizzas, 
              crafted with passion and the finest ingredients.
            </motion.p>

            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Link to="/menu" className="btn btn-primary">
                Order Now <FiArrowRight />
              </Link>
              <Link to="/about" className="btn btn-outline">
                Our Story
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="pizza-container">
              <motion.img
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&h=600&fit=crop"
                alt="Delicious Pizzaburg Pizza"
                className="hero-pizza"
                animate={{ rotate: [0, 5, 0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              />
              
              {floatingIngredients.map((item, index) => (
                <motion.div
                  key={index}
                  className={`floating-ingredient ingredient-${index + 1}`}
                  animate={{
                    y: [-20, 20, -20],
                    rotate: [0, 360]
                  }}
                  transition={{
                    delay: item.delay,
                    duration: item.duration,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {item.emoji}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="hero-decoration">
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#FFF8E1"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,144C960,149,1056,139,1152,122.7C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;