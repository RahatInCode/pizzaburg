// src/components/home/BookTable.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { FiCalendar, FiClock, FiUsers } from 'react-icons/fi';
import './BookTable.css';

const BookTable = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success(`Table booked successfully for ${data.guests} guests on ${data.date} at ${data.time}!`, {
      position: "top-center",
      autoClose: 5000,
    });
    
    reset();
    setIsSubmitting(false);
  };

  return (
    <section className="section book-table">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Book A Table</h2>
          <p className="section-subtitle">
            Reserve your spot and enjoy an unforgettable dining experience
          </p>
        </motion.div>

        <div className="book-table-content">
          <motion.div
            className="booking-image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=700&fit=crop"
              alt="Restaurant Interior"
            />
          </motion.div>

          <motion.form
            className="booking-form"
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
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
                      message: 'Invalid email address'
                    }
                  })}
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && <span className="error-message">{errors.email.message}</span>}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone *</label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  {...register('phone', { required: 'Phone is required' })}
                  className={errors.phone ? 'error' : ''}
                />
                {errors.phone && <span className="error-message">{errors.phone.message}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="guests">
                  <FiUsers /> Number of Guests *
                </label>
                <select
                  id="guests"
                  {...register('guests', { required: 'Please select number of guests' })}
                  className={errors.guests ? 'error' : ''}
                >
                  <option value="">Select...</option>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                  ))}
                </select>
                {errors.guests && <span className="error-message">{errors.guests.message}</span>}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="date">
                  <FiCalendar /> Date *
                </label>
                <input
                  id="date"
                  type="date"
                  min={new Date().toISOString().split('T')[0]}
                  {...register('date', { required: 'Date is required' })}
                  className={errors.date ? 'error' : ''}
                />
                {errors.date && <span className="error-message">{errors.date.message}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="time">
                  <FiClock /> Time *
                </label>
                <select
                  id="time"
                  {...register('time', { required: 'Time is required' })}
                  className={errors.time ? 'error' : ''}
                >
                  <option value="">Select...</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="13:00">1:00 PM</option>
                  <option value="14:00">2:00 PM</option>
                  <option value="17:00">5:00 PM</option>
                  <option value="18:00">6:00 PM</option>
                  <option value="19:00">7:00 PM</option>
                  <option value="20:00">8:00 PM</option>
                  <option value="21:00">9:00 PM</option>
                </select>
                {errors.time && <span className="error-message">{errors.time.message}</span>}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Special Requests</label>
              <textarea
                id="message"
                rows="4"
                placeholder="Any special requirements or allergies?"
                {...register('message')}
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-block"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Booking...' : 'Book Table Now'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default BookTable;