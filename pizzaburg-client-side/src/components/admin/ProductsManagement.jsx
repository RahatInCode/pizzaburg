// src/components/admin/ProductsManagement.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPlus, FiEdit, FiTrash2, FiSearch } from 'react-icons/fi';
import { toast } from 'react-toastify';
import productsData from '../../assets/data/products'; // Changed
import ProductModal from './ProductModal';
import './ProductsManagement.css';

const ProductsManagement = () => {
  const [products, setProducts] = useState(productsData);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter(p => p.id !== id));
      toast.success('Product deleted successfully');
    }
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setIsModalOpen(true);
  };

  const handleAdd = () => {
    setEditingProduct(null);
    setIsModalOpen(true);
  };

  const handleSave = (productData) => {
    if (editingProduct) {
      setProducts(products.map(p =>
        p.id === editingProduct.id ? { ...productData, id: p.id } : p
      ));
      toast.success('Product updated successfully');
    } else {
      setProducts([...products, { ...productData, id: products.length + 1 }]);
      toast.success('Product added successfully');
    }
    setIsModalOpen(false);
    setEditingProduct(null);
  };

  return (
    <div className="products-management">
      <motion.div
        className="page-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Products Management</h1>
        <button onClick={handleAdd} className="btn btn-primary">
          <FiPlus /> Add New Product
        </button>
      </motion.div>

      <motion.div
        className="filters-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        <div className="search-box">
          <FiSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </motion.div>

      <motion.div
        className="products-table-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <table className="products-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.id}>
                <td>
                  <img src={product.image} alt={product.name} className="product-thumb" />
                </td>
                <td className="product-name">{product.name}</td>
                <td>
                  <span className="category-badge">{product.category}</span>
                </td>
                <td className="product-price">${product.price.toFixed(2)}</td>
                <td>⭐ {product.rating}</td>
                <td>
                  <div className="action-buttons">
                    <button
                      onClick={() => handleEdit(product)}
                      className="btn-action btn-edit"
                      aria-label="Edit product"
                    >
                      <FiEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="btn-action btn-delete"
                      aria-label="Delete product"
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      <ProductModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingProduct(null);
        }}
        onSave={handleSave}
        product={editingProduct}
      />
    </div>
  );
};

export default ProductsManagement;