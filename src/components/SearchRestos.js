import React from 'react'
import MyImg from '../Assets/resto.jpg';
import MyImg2 from '../Assets/restau1.jpg';
import { Link } from 'react-router-dom';

const SearchRestos = () => {
  return (
    <div container-xxl bg-white p-0>


      <div className="container-xxl position-relative p-0">
        <div className="container-xxl py-5 bg-dark hero-header mb-5">
          <div className="container my-5 py-5">
            <div className="row g-5">
              <div className="col-lg-6 text-center">
                <h1 className="display-3 animated slideInLeft text-lg-start tit1">Chercher<br />Des restaurants</h1>
                <p className="text-brown animated slideInLeft mb-4 pb-2 text-lg-start">Trouver des restaurants en fonction de la spécialité culinaire ou de la série de votre choix. Rechercher facilement des restaurants dans votre région ou dans une autre ville que vous souhaitez visiter</p>
                <Link to="/RechercheParSpecialite"> <a href="#" class="btn btn-secondary btn9">Recherche par specialite</a></Link>
                
              </div>
              <div className="col-lg-6 text-center  overflow-hidden">
              <h1 className="display-3 text-white animated text-lg-start"><br /><br /><br /></h1>
                <p className="text-white animated mb-4 pb-2 text-lg-start"></p>
              <Link to="/RechercheParSerie"> <a href="#" class="btn btn-secondary btn9">Recherche par serie</a></Link>
              
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h5 className="section-title ff-secondary text-center text-primary fw-normal">Food Menu</h5>
            <h1 className="mb-5">Most Popular Items</h1>
          </div>
          <div className="tab-class text-center wow fadeInUp" data-wow-delay="0.1s">
            <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
              <li className="nav-item">
                <a className="d-flex align-items-center text-start mx-3 ms-0 pb-3 active" data-bs-toggle="pill" href="#tab-1">
                  <i className="fa fa-coffee fa-2x text-primary"></i>
                  <div className="ps-3">
                    <small className="text-body">Popular</small>
                    <h6 className="mt-n1 mb-0">Breakfast</h6>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a className="d-flex align-items-center text-start mx-3 pb-3" data-bs-toggle="pill" href="#tab-2">
                  <i className="fa fa-hamburger fa-2x text-primary"></i>
                  <div className="ps-3">
                    <small className="text-body">Special</small>
                    <h6 className="mt-n1 mb-0">Launch</h6>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a className="d-flex align-items-center text-start mx-3 pb-3" data-bs-toggle="pill" href="#tab-2">
                  <i className="fa fa-hamburger fa-2x text-primary"></i>
                  <div className="ps-3">
                    <small className="text-body">Special</small>
                    <h6 className="mt-n1 mb-0">Launch</h6>
                  </div>
                </a>
              </li>
            </ul>

            <div className="tab-content">
              <div id="tab-1" className="tab-pane fade show p-0 active">
                <div className="row g-4">
                  <div >
                    <div className="d-flex align-items-center">
                      <img className="flex-shrink-0 img-fluid rounded" src={MyImg} alt="" style={{ width: '80px' }} />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-primary">$115</span>
                        </h5>
                        <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                      </div>
                    </div>
                  </div>
                  <div >
                    <div className="d-flex align-items-center">
                      <img className="flex-shrink-0 img-fluid rounded" src={MyImg} alt="" style={{ width: '80px' }} />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-primary">$115</span>
                        </h5>
                        <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                      </div>
                    </div>
                  </div>
                  <div >
                    <div className="d-flex align-items-center">
                      <img className="flex-shrink-0 img-fluid rounded" src={MyImg} alt="" style={{ width: '80px' }} />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-primary">$115</span>
                        </h5>
                        <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                      </div>
                    </div>
                  </div>
                  <div >
                    <div className="d-flex align-items-center">
                      <img className="flex-shrink-0 img-fluid rounded" src={MyImg} alt="" style={{ width: '80px' }} />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-primary">$115</span>
                        </h5>
                        <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                      </div>
                    </div>
                  </div>
                  <div >
                    <div className="d-flex align-items-center">
                      <img className="flex-shrink-0 img-fluid rounded" src={MyImg} alt="" style={{ width: '80px' }} />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-primary">$115</span>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
  </div>
          </div>
                )
}

                export default SearchRestos