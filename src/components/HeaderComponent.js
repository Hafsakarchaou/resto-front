import React from 'react';
import { Link } from 'react-router-dom';

const HeaderComponent = ({ handleLogout }) => {
  const handleLogoutClick = () => {
    // Call the handleLogout function passed from the parent component
    localStorage.removeItem("localuser");
  };
  return (
    <nav className="navbar navbar-expand-md fixed-top navbar-scroll shadow-0">
      <div className="container">
        <div class="col-auto" className='ico'>
        <i className="fa fa-coffee fa-lg text-gray-300"></i>
          <i className="fa fa-hamburger fa-lg text-gray-3100"></i>
          <i class="fas fa-utensils fa-lg text-gray-300"></i>
          
        </div>
        <a className="navbar-brand">
          <Link to="/admin/home" className="navLink link">
            Manage restaurants
          </Link>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarExample01"
          aria-controls="navbarExample01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarExample01">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item active">
              <a className="nav-link px-3">
                <Link to="/admin/ville" className="navLink link">
                  Villes
                </Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3">
                <Link to="/admin/zones" className="navLink link">
                  Zones
                </Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3">
                <Link to="/admin/specialites" className="navLink link">
                  Specialites
                </Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3">
                <Link to="/admin/series" className="navLink link">
                  Series
                </Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3">
                <Link to="/admin/restaurants" className="navLink link">
                  Restaurants
                </Link>
              </a>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">



              <button className="nav-link btn btn-link" onClick={handleLogoutClick}>
                <Link to="/login" className="navLink link">
                  Logout
                </Link>
              </button>

            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default HeaderComponent;
