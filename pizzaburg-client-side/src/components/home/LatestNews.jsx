// src/components/home/LatestNews.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { FiArrowRight, FiCalendar, FiUser } from 'react-icons/fi';
import blogs from '../../assets/data/blogs'; // Changed
import './LatestNews.css';

const LatestNews = () => {
  const latestBlogs = blogs.slice(0, 3);

  return (
    <section className="section latest-news">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Our Latest News</h2>
          <p className="section-subtitle">
            Stay updated with our latest recipes, tips, and pizza adventures
          </p>
        </motion.div>

        <div className="blogs-grid">
          {latestBlogs.map((blog, index) => (
            <motion.article
              key={blog.id}
              className="blog-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -10 }}
            >
              <div className="blog-image">
                <img src={blog.image} alt={blog.title} />
                <span className="blog-category">{blog.category}</span>
              </div>

              <div className="blog-content">
                <div className="blog-meta">
                  <span className="meta-item">
                    <FiCalendar />
                    {new Date(blog.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </span>
                  <span className="meta-item">
                    <FiUser />
                    {blog.author}
                  </span>
                </div>

                <h3 className="blog-title">{blog.title}</h3>
                <p className="blog-excerpt">{blog.excerpt}</p>

                <Link to={`/blog/${blog.id}`} className="blog-link">
                  Read More <FiArrowRight />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;