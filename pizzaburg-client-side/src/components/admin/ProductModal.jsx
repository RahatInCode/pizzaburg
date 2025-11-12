// src/components/admin/ProductModal.jsx
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import './ProductModal.css';

const ProductModal = ({ isOpen, onClose, onSave, product }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  useEffect(() => {
    if (product) {
      reset(product);
    } else {
      reset({
        name: '',
        description: '',
        price: '',
        category: 'pizza',
        image: '',
        rating: 4.5
      });
    }
  }, [product, reset]);

  const onSubmit = (data) => {
    onSave({
      ...data,
      price: parseFloat(data.price),
      rating: parseFloat(data.rating),
      popular: data.popular || false
    });
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="modal-overlay" onClick={onClose}>
        <motion.div
          className="product-modal"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 50 }}
          transition={{ duration: 0.3 }}
        >
          <div className="modal-header">
            <h2>{product ? 'Edit Product' : 'Add New Product'}</h2>
            <button onClick={onClose} className="modal-close" aria-label="Close modal">
              <FiX />
            </button>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="modal-form">
            <div className="form-group">
              <label htmlFor="name">Product Name *</label>
              <input
                id="name"
                type="text"
                placeholder="Margherita Pizza"
                {...register('name', { required: 'Product name is required' })}
                className={errors.name ? 'error' : ''}
              />
              {errors.name && <span className="error-message">{errors.name.message}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="description">Description *</label>
              <textarea
                id="description"
                rows="3"
                placeholder="Describe the product..."
                {...register('description', { required: 'Description is required' })}
                className={errors.description ? 'error' : ''}
              />
              {errors.description && <span className="error-message">{errors.description.message}</span>}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="price">Price ($) *</label>
                <input
                  id="price"
                  type="number"
                  step="0.01"
                  placeholder="12.99"
                  {...register('price', {
                    required: 'Price is required',
                    min: { value: 0.01, message: 'Price must be greater than 0' }
                  })}
                  className={errors.price ? 'error' : ''}
                />
                {errors.price && <span className="error-message">{errors.price.message}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="category">Category *</label>
                <select
                  id="category"
                  {...register('category', { required: 'Category is required' })}
                  className={errors.category ? 'error' : ''}
                >
                  <option value="pizza">Pizza</option>
                  <option value="sides">Sides</option>
                  <option value="drinks">Drinks</option>
                  <option value="desserts">Desserts</option>
                </select>
                {errors.category && <span className="error-message">{errors.category.message}</span>}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="image">Image URL *</label>
              <input
                id="image"
                type="url"
                placeholder="https://example.com/image.jpg"
                {...register('image', { required: 'Image URL is required' })}
                className={errors.image ? 'error' : ''}
              />
              {errors.image && <span className="error-message">{errors.image.message}</span>}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="rating">Rating (0-5) *</label>
                <input
                  id="rating"
                  type="number"
                  step="0.1"
                  min="0"
                  max="5"
                  placeholder="4.5"
                  {...register('rating', {
                    required: 'Rating is required',
                    min: { value: 0, message: 'Minimum rating is 0' },
                    max: { value: 5, message: 'Maximum rating is 5' }
                  })}
                  className={errors.rating ? 'error' : ''}
                />
                {errors.rating && <span className="error-message">{errors.rating.message}</span>}
              </div>

              <div className="form-group">
                <label className="checkbox-label">
                  <input type="checkbox" {...register('popular')} />
                  <span>Mark as Popular</span>
                </label>
              </div>
            </div>

            <div className="modal-actions">
              <button type="button" onClick={onClose} className="btn btn-outline">
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                {product ? 'Update Product' : 'Add Product'}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProductModal;