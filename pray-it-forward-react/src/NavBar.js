
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#D87093' }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Pray It Forward
        </Link>

        <div className="navbar-nav">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/prayers">Prayer Requests</Link>
          <Link className="nav-link" to="/create">Create Prayer</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
