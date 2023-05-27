import React from 'react';
import { Link } from 'react-router-dom';

const UserHeaderComponent = () => {

  return (
    <nav className="navbar navbar1 navbar-expand-md fixed-top navbar-scroll shadow-0">
      <div className="container">
      <div class="col-auto" className='ico'>
        <i className="fa fa-coffee fa-lg text-gray-300"></i>
          <i className="fa fa-hamburger fa-lg text-gray-3100"></i>
          <i class="fas fa-utensils fa-lg text-gray-300"></i>
          
        </div>
        <a className="navbar-brand">
          <Link to="/" className="navLink link">
            Search for Restaurants
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
                <Link to="/" className="navLink link">
                  Home
                </Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3">
                <Link to="/RechercheParSerie" className="navLink link">
                  Search By Serie
                </Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3">
                <Link to="RechercheParSpecialite" className="navLink link">
                Search By Specialite
                </Link>
              </a>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default UserHeaderComponent;
