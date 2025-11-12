// src/components/home/WhyChooseUs.jsx
import { motion } from 'framer-motion';
import { FiClock, FiAward, FiTruck, FiThumbsUp } from 'react-icons/fi';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FiClock />,
      title: 'Fast Delivery',
      description: 'Hot and fresh pizza delivered to your door in 30 minutes or less'
    },
    {
      icon: <FiAward />,
      title: 'Premium Quality',
      description: 'Only the finest ingredients sourced from trusted local suppliers'
    },
    {
      icon: <FiTruck />,
      title: 'Free Shipping',
      description: 'Enjoy free delivery on all orders above $25 in your area'
    },
    {
      icon: <FiThumbsUp />,
      title: '100% Satisfaction',
      description: 'Not happy? We\'ll make it right or give you a full refund'
    }
  ];

  return (
    <section className="section why-choose-us">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Why We Are The Best</h2>
          <p className="section-subtitle">
            Discover what makes Pizzaburg the #1 choice for pizza lovers
          </p>
        </motion.div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -10 }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;