// src/components/layout/Footer.jsx
import { Link } from 'react-router';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { toast } from 'react-toastify';
import './Footer.css';

const Footer = () => {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    if (email) {
      toast.success('Thank you for subscribing to our newsletter!', {
        position: "bottom-right",
        autoClose: 3000
      });
      e.target.reset();
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">About Pizzaburg</h3>
            <p className="footer-text">
              We craft the finest handmade pizzas using traditional recipes and the freshest ingredients. 
              Every bite tells a story of passion and quality.
            </p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <FaYoutube />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Top Items</h3>
            <ul className="footer-links">
              <li><Link to="/menu">Margherita Pizza</Link></li>
              <li><Link to="/menu">Pepperoni Pizza</Link></li>
              <li><Link to="/menu">Mexicana Pizza</Link></li>
              <li><Link to="/menu">BBQ Chicken</Link></li>
            </ul>
          </div>

<div className="footer-section">
  <h3 className="footer-title">Useful Links</h3>
  <ul className="footer-links">
    <li><Link to="/">Home</Link></li>
    <li><Link to="/menu">Menu</Link></li>
    <li><Link to="/offers">Special Offers</Link></li>
    <li><Link to="/about">About Us</Link></li>
    <li><Link to="/contact">Contact</Link></li>
  </ul>
</div>

          <div className="footer-section">
            <h3 className="footer-title">Contact Info</h3>
            <ul className="footer-contact">
              <li>
                <FiMapPin />
                <span>123 Pizza Street, Food City, FC 12345</span>
              </li>
              <li>
                <FiPhone />
                <span>+1 (555) 123-4567</span>
              </li>
              <li>
                <FiMail />
                <span>info@pizzaburg.com</span>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Newsletter</h3>
            <p className="footer-text">Subscribe to get special offers and updates!</p>
            <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Your email address"
                required
                aria-label="Email for newsletter"
              />
              <button type="submit" className="btn btn-accent">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Pizzaburg. All rights reserved. Crafted with ❤️ for pizza lovers.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;