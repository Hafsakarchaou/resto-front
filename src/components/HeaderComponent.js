import React from 'react'

import { Link } from 'react-router-dom'

const HeaderComponent = () => {
  return (
    /*<nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar w/ text</a>
        <button
          class="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
            <Link to=
                      {"/specialites"}
                      className="navLink link"> Specialites </Link>
                  
            </li>
            <li class="nav-item">
            <Link to=
                      {"/RechercheParSpecialite"}
                      className="navLink link"> Chercher par specialite </Link>
            </li>
            <li class="nav-item">
            <Link to=
                      {"/ville"}
                      className="navLink link"> Villes </Link>
            </li>
          </ul>
          <span class="navbar-text">
            Navbar text with an inline element
          </span>
        </div>
      </div>
      </nav> */
    // style="background-color: #ffede7;
    <nav className="navbar navbar-expand-md fixed-top navbar-scroll shadow-0">
      <div className="container">
        <a className="navbar-brand" ><Link to=
          {"/"} className="navLink link"> Manage restaurants</Link></a>
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
              <a className="nav-link px-3"><Link to=
                {"/ville"}
                className="navLink link"> Villes </Link></a>

            </li>
            <li className="nav-item">
              <a className="nav-link px-3"><Link to=
                {"/zones"}
                className="navLink link"> Zones </Link></a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3"><Link to=
                {"/specialites"}
                className="navLink link"> Specialites </Link></a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3" ><Link to=
                {"/series"}
                className="navLink link">Series</Link></a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3" ><Link to=
                {"/restaurants"}
                className="navLink link">Restaurants</Link></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default HeaderComponent