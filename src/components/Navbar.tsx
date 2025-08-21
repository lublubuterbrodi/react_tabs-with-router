import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const isTabs = pathname === '/tabs' || pathname.startsWith('/tabs/');

  return (
    <nav className="navbar is-light is-fixed-top has-shadow" data-cy="Nav">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className={`navbar-item${isHome ? ' is-active' : ''}`}>
            Home
          </Link>

          <Link
            to="/tabs"
            className={`navbar-item${isTabs ? ' is-active' : ''}`}
          >
            Tabs
          </Link>
        </div>
      </div>
    </nav>
  );
}
