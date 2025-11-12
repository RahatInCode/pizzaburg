
// src/pages/About.jsx
import { motion } from 'framer-motion';
import Breadcrumb from '../components/common/Breadcrumb';
import OurStory from '../components/home/OurStory';
import WhyChooseUs from '../components/home/WhyChooseUs';
import './About.css';

const About = () => {
  return (
    <>
      <Breadcrumb />
      <div className="about-page">
        <div className="container">
          <motion.div
            className="about-hero"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>About Pizzaburg</h1>
            <p>
              Crafting the finest pizzas since 2009, bringing authentic Italian flavors 
              to your doorstep with love and passion.
            </p>
          </motion.div>
        </div>
        
        <OurStory />
        <WhyChooseUs />
      </div>
    </>
  );
};

export default About;