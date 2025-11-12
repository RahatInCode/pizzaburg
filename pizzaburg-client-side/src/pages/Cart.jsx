// src/pages/Cart.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router';
import { FiTrash2, FiMinus, FiPlus, FiShoppingBag } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import Breadcrumb from '../components/common/Breadcrumb';
import PaymentModal from '../components/common/PaymentModal';
import './Cart.css';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const subtotal = getCartTotal();
  const tax = subtotal * 0.1;
  const delivery = subtotal > 25 ? 0 : 5;
  const total = subtotal + tax + delivery;

  if (cartItems.length === 0) {
    return (
      <>
        <Breadcrumb />
        <div className="cart-page">
          <div className="container">
            <motion.div
              className="empty-cart"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <FiShoppingBag className="empty-cart-icon" />
              <h2>Your Cart is Empty</h2>
              <p>Looks like you haven't added any pizzas yet!</p>
              <Link to="/menu" className="btn btn-primary">
                Browse Menu
              </Link>
            </motion.div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Breadcrumb />
      <div className="cart-page">
        <div className="container">
          <motion.h1
            className="page-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Shopping Cart
          </motion.h1>

          <div className="cart-content">
            <div className="cart-items">
              <AnimatePresence>
                {cartItems.map((item) => (
                  <motion.div
                    key={item.id}
                    className="cart-item"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img src={item.image} alt={item.name} className="cart-item-image" />
                    
                    <div className="cart-item-info">
                      <h3>{item.name}</h3>
                      <p className="cart-item-description">{item.description}</p>
                      <span className="cart-item-price">${item.price.toFixed(2)}</span>
                    </div>

                    <div className="cart-item-actions">
                      <div className="quantity-controls">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          aria-label="Decrease quantity"
                          className="qty-btn"
                        >
                          <FiMinus />
                        </button>
                        <span className="quantity">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          aria-label="Increase quantity"
                          className="qty-btn"
                        >
                          <FiPlus />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="btn-remove"
                        aria-label="Remove item"
                      >
                        <FiTrash2 />
                      </button>
                    </div>

                    <div className="cart-item-total">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              <button onClick={clearCart} className="btn-clear-cart">
                Clear Cart
              </button>
            </div>

            <motion.div
              className="cart-summary"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2>Order Summary</h2>
              
              <div className="summary-row">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              
              <div className="summary-row">
                <span>Tax (10%):</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              
              <div className="summary-row">
                <span>Delivery:</span>
                <span>{delivery === 0 ? 'FREE' : `$${delivery.toFixed(2)}`}</span>
              </div>

              {subtotal < 25 && (
                <p className="free-delivery-note">
                  Add ${(25 - subtotal).toFixed(2)} more for free delivery!
                </p>
              )}

              <div className="summary-total">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <button
                onClick={() => setShowPaymentModal(true)}
                className="btn btn-accent btn-block"
              >
                Proceed to Payment
              </button>

              <Link to="/menu" className="btn btn-outline btn-block">
                Continue Shopping
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      <PaymentModal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        total={total}
      />
    </>
  );
};

export default Cart;