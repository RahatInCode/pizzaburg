// src/pages/Contact.jsx
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { FiMail, FiPhone, FiMapPin, FiClock } from 'react-icons/fi';
import Breadcrumb from '../components/common/Breadcrumb';
import './Contact.css';

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Contact form:', data);
    toast.success('Message sent successfully! We will get back to you soon.');
    reset();
  };

  const contactInfo = [
    {
      icon: <FiPhone />,
      title: 'Phone',
      info: '+1 (555) 123-4567'
    },
    {
      icon: <FiMail />,
      title: 'Email',
      info: 'info@pizzaburg.com'
    },
    {
      icon: <FiMapPin />,
      title: 'Address',
      info: '123 Pizza Street, Food City, FC 12345'
    },
    {
      icon: <FiClock />,
      title: 'Working Hours',
      info: 'Mon - Sun: 11:00 AM - 11:00 PM'
    }
  ];

  return (
    <>
      <Breadcrumb />
      <div className="contact-page">
        <div className="container">
          <motion.div
            className="contact-header"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Get In Touch</h1>
            <p>Have questions? We'd love to hear from you. Send us a message!</p>
          </motion.div>

          <div className="contact-content">
            <motion.div
              className="contact-info-section"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2>Contact Information</h2>
              <p className="info-description">
                Feel free to reach out to us through any of these channels. 
                We're here to help!
              </p>

              <div className="contact-cards">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    className="contact-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <div className="contact-icon">{item.icon}</div>
                    <h3>{item.title}</h3>
                    <p>{item.info}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="contact-form-section"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      {...register('name', { required: 'Name is required' })}
                      className={errors.name ? 'error' : ''}
                    />
                    {errors.name && <span className="error-message">{errors.name.message}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email'
                        }
                      })}
                      className={errors.email ? 'error' : ''}
                    />
                    {errors.email && <span className="error-message">{errors.email.message}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="How can we help?"
                    {...register('subject', { required: 'Subject is required' })}
                    className={errors.subject ? 'error' : ''}
                  />
                  {errors.subject && <span className="error-message">{errors.subject.message}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    rows="6"
                    placeholder="Your message..."
                    {...register('message', { required: 'Message is required' })}
                    className={errors.message ? 'error' : ''}
                  />
                  {errors.message && <span className="error-message">{errors.message.message}</span>}
                </div>

                <button type="submit" className="btn btn-primary btn-block">
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;