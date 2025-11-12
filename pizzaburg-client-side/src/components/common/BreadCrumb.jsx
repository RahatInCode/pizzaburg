// src/components/common/Breadcrumb.jsx
import { Link, useLocation } from 'react-router';
import { FiChevronRight, FiHome } from 'react-icons/fi';
import './Breadcrumb.css';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (pathnames.length === 0) return null;

  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <div className="container">
        <ol className="breadcrumb-list">
          <li>
            <Link to="/" className="breadcrumb-link">
              <FiHome /> Home
            </Link>
          </li>
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            const displayName = name.charAt(0).toUpperCase() + name.slice(1);

            return (
              <li key={routeTo}>
                <FiChevronRight className="breadcrumb-separator" />
                {isLast ? (
                  <span className="breadcrumb-current">{displayName}</span>
                ) : (
                  <Link to={routeTo} className="breadcrumb-link">
                    {displayName}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;