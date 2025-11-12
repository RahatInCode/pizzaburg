// src/pages/Offers.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiTag, FiClock, FiCopy, FiCheck } from 'react-icons/fi';
import { toast } from 'react-toastify';
import Breadcrumb from '../components/common/Breadcrumb';
import offers from '../assets/data/offers';
import './Offers.css';

const Offers = () => {
  const [copiedCode, setCopiedCode] = useState(null);

  const copyCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    toast.success(`Code "${code}" copied to clipboard!`, {
      position: "bottom-right",
      autoClose: 2000
    });
    
    setTimeout(() => {
      setCopiedCode(null);
    }, 2000);
  };

  const calculateDaysLeft = (validUntil) => {
    const today = new Date();
    const endDate = new Date(validUntil);
    const timeDiff = endDate - today;
    const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    return daysLeft > 0 ? daysLeft : 0;
  };

  return (
    <>
      <Breadcrumb />
      <div className="offers-page">
        <div className="container">
          <motion.div
            className="offers-header"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>
              <FiTag /> Special Offers
            </h1>
            <p>
              Save big with our exclusive deals and limited-time offers. 
              Don't miss out on these amazing discounts!
            </p>
          </motion.div>

          <div className="offers-grid">
            {offers.map((offer, index) => {
              const daysLeft = calculateDaysLeft(offer.validUntil);
              
              return (
                <motion.div
                  key={offer.id}
                  className={`offer-card ${offer.popular ? 'popular' : ''}`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -10 }}
                >
                  {offer.popular && (
                    <div className="popular-badge">
                      🔥 Most Popular
                    </div>
                  )}

                  <div className="offer-image">
                    <img src={offer.image} alt={offer.title} />
                    <div className="discount-badge">
                      {offer.discount}% OFF
                    </div>
                  </div>

                  <div className="offer-content">
                    <h3 className="offer-title">{offer.title}</h3>
                    <p className="offer-description">{offer.description}</p>

                    <div className="offer-pricing">
                      <div className="price-group">
                        <span className="original-price">
                          ${offer.originalPrice.toFixed(2)}
                        </span>
                        <span className="offer-price">
                          ${offer.offerPrice.toFixed(2)}
                        </span>
                      </div>
                      <div className="savings">
                        Save ${(offer.originalPrice - offer.offerPrice).toFixed(2)}
                      </div>
                    </div>

                    <div className="offer-validity">
                      <FiClock />
                      <span>
                        {daysLeft > 0 
                          ? `Expires in ${daysLeft} ${daysLeft === 1 ? 'day' : 'days'}`
                          : 'Offer expired'}
                      </span>
                    </div>

                    <div className="offer-code">
                      <div className="code-box">
                        <span className="code-label">Promo Code:</span>
                        <span className="code-value">{offer.code}</span>
                      </div>
                      <button
                        className="copy-btn"
                        onClick={() => copyCode(offer.code)}
                        aria-label="Copy promo code"
                      >
                        {copiedCode === offer.code ? (
                          <FiCheck className="check-icon" />
                        ) : (
                          <FiCopy />
                        )}
                      </button>
                    </div>

                    <button 
                      className="btn btn-primary btn-block"
                      disabled={daysLeft === 0}
                    >
                      {daysLeft > 0 ? 'Claim This Offer' : 'Offer Expired'}
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className="offers-info"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <h2>How to Use Promo Codes</h2>
            <ol className="info-list">
              <li>
                <strong>Select Your Items:</strong> Browse our menu and add your favorite pizzas to the cart
              </li>
              <li>
                <strong>Copy the Code:</strong> Click the copy button next to your chosen promo code
              </li>
              <li>
                <strong>Apply at Checkout:</strong> Paste the code in the promo code field during checkout
              </li>
              <li>
                <strong>Enjoy Your Savings:</strong> Watch your total decrease and enjoy your delicious pizza!
              </li>
            </ol>

            <div className="terms-notice">
              <p>
                <strong>Note:</strong> Promo codes cannot be combined with other offers. 
                Terms and conditions apply. Valid for a limited time only.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Offers;