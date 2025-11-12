// src/components/common/ProductCard.jsx
import { motion } from 'framer-motion';
import { FiShoppingCart, FiStar } from 'react-icons/fi';
import { useCart } from '../../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div
      className="product-card"
      variants={cardVariants}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className="product-image-wrapper">
        <img src={product.image} alt={product.name} className="product-image" />
        <div className="product-overlay">
          <button
            className="btn btn-accent quick-add"
            onClick={() => addToCart(product)}
            aria-label={`Add ${product.name} to cart`}
          >
            <FiShoppingCart /> Quick Add
          </button>
        </div>
      </div>

      <div className="product-info">
        <div className="product-rating">
          {[...Array(5)].map((_, i) => (
            <FiStar
              key={i}
              className={i < Math.floor(product.rating) ? 'star-filled' : 'star-empty'}
            />
          ))}
          <span className="rating-text">({product.rating})</span>
        </div>

        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>

        <div className="product-footer">
          <span className="product-price">${product.price.toFixed(2)}</span>
          <button
            className="btn-add-cart"
            onClick={() => addToCart(product)}
            aria-label={`Add ${product.name} to cart`}
          >
            <FiShoppingCart />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;