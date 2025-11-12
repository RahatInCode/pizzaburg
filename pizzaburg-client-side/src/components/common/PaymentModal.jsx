// src/components/common/PaymentModal.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiCreditCard, FiCheck } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router';
import './PaymentModal.css';

const PaymentModal = ({ isOpen, onClose, total }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { clearCart } = useCart();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsProcessing(false);
    setPaymentSuccess(true);

    setTimeout(() => {
      toast.success('Order placed successfully! 🍕', {
        position: "top-center",
        autoClose: 3000
      });
      clearCart();
      onClose();
      setPaymentSuccess(false);
      navigate('/');
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="modal-overlay" onClick={onClose}>
        <motion.div
          className="payment-modal"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 50 }}
          transition={{ duration: 0.3 }}
        >
          {!paymentSuccess ? (
            <>
              <div className="modal-header">
                <h2>
                  <FiCreditCard /> Payment Details
                </h2>
                <button onClick={onClose} className="modal-close" aria-label="Close modal">
                  <FiX />
                </button>
              </div>

              <div className="modal-body">
                <div className="payment-amount">
                  <span>Total Amount:</span>
                  <span className="amount">${total.toFixed(2)}</span>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="payment-form">
                  <div className="form-group">
                    <label htmlFor="cardName">Cardholder Name *</label>
                    <input
                      id="cardName"
                      type="text"
                      placeholder="John Doe"
                      {...register('cardName', { required: 'Name is required' })}
                      className={errors.cardName ? 'error' : ''}
                    />
                    {errors.cardName && <span className="error-message">{errors.cardName.message}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="cardNumber">Card Number *</label>
                    <input
                      id="cardNumber"
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      maxLength="19"
                      {...register('cardNumber', {
                        required: 'Card number is required',
                        pattern: {
                          value: /^[\d\s]{13,19}$/,
                          message: 'Invalid card number'
                        }
                      })}
                      className={errors.cardNumber ? 'error' : ''}
                    />
                    {errors.cardNumber && <span className="error-message">{errors.cardNumber.message}</span>}
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="expiry">Expiry Date *</label>
                      <input
                        id="expiry"
                        type="text"
                        placeholder="MM/YY"
                        maxLength="5"
                        {...register('expiry', {
                          required: 'Expiry date is required',
                          pattern: {
                            value: /^(0[1-9]|1[0-2])\/\d{2}$/,
                            message: 'Format: MM/YY'
                          }
                        })}
                        className={errors.expiry ? 'error' : ''}
                      />
                      {errors.expiry && <span className="error-message">{errors.expiry.message}</span>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="cvv">CVV *</label>
                      <input
                        id="cvv"
                        type="text"
                        placeholder="123"
                        maxLength="3"
                        {...register('cvv', {
                          required: 'CVV is required',
                          pattern: {
                            value: /^\d{3}$/,
                            message: 'Invalid CVV'
                          }
                        })}
                        className={errors.cvv ? 'error' : ''}
                      />
                      {errors.cvv && <span className="error-message">{errors.cvv.message}</span>}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-accent btn-block"
                    disabled={isProcessing}
                  >
                    {isProcessing ? 'Processing...' : `Pay $${total.toFixed(2)}`}
                  </button>
                </form>

                <p className="payment-note">
                  🔒 Your payment information is secure and encrypted
                </p>
              </div>
            </>
          ) : (
            <motion.div
              className="payment-success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="success-icon">
                <FiCheck />
              </div>
              <h2>Payment Successful!</h2>
              <p>Your order has been placed successfully</p>
              <div className="success-animation">🎉</div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default PaymentModal;