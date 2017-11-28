import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="text-center">
    <nav className="navbar navbar-default">
      <Link to="/" activeClassName="active">
        Home
      </Link>
      {' | '}
      <Link to="search" activeClassName="active">
        Search
      </Link>
    </nav>
  </div>
);

export default Header;
