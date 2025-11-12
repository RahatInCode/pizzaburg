// src/components/home/OurStory.jsx
import { motion } from 'framer-motion';
import { FiAward, FiHeart, FiUsers } from 'react-icons/fi';
import './OurStory.css';

const OurStory = () => {
  const stats = [
    { icon: <FiAward />, number: '15+', label: 'Years Experience' },
    { icon: <FiHeart />, number: '50K+', label: 'Happy Customers' },
    { icon: <FiUsers />, number: '25+', label: 'Expert Chefs' }
  ];

  return (
    <section className="section our-story">
      <div className="container">
        <div className="story-content">
          <motion.div
            className="story-image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=600&h=700&fit=crop"
              alt="Our Story - Pizza Making"
            />
            <div className="story-badge">
              <span className="badge-text">Since 2009</span>
            </div>
          </motion.div>

          <motion.div
            className="story-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title" style={{ textAlign: 'left' }}>
              Our Story
            </h2>
            <p className="story-paragraph">
              What started as a small family kitchen in Naples has grown into a beloved 
              pizza destination. Our founder, Chef Mario, brought generations of Italian 
              pizza-making traditions to create Pizzaburg.
            </p>
            <p className="story-paragraph">
              Every pizza we make is a testament to our commitment to quality, authenticity, 
              and the joy of sharing great food with great people. We use only the finest 
              ingredients, from San Marzano tomatoes to fresh mozzarella di bufala.
            </p>
            <p className="story-paragraph">
              Our wood-fired ovens, imported from Naples, cook each pizza to perfection 
              at 900°F, creating that signature crispy crust and smoky flavor that keeps 
              our customers coming back.
            </p>

            <div className="story-stats">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="stat-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                >
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;