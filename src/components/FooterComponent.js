import React from 'react';

const FooterComponent = () => {
  return (
    
      <footer className="footer">
        <div className="container p-4">
          <div className="row">
            <div className="col-lg-6 col-md-12 mb-4">
              <h5 className="mb-3 text-dark">Find Restaurants </h5>
              <h5 className="mb-3 text-dark">You Are Looking For</h5>
              <p>
              Find restaurants based on the culinary specialty or series of your choice. Easily search for restaurants in your area or in another city you want to visit!
              </p>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <h5 className="mb-3 text-dark">links</h5>
              <ul className="list-unstyled mb-0">
                <li className="mb-1">
                  <a href="#!" className="footer-link">FAQ</a>
                </li>
                <li className="mb-1">
                  <a href="#!" className="footer-link">Classes</a>
                </li>
                <li className="mb-1">
                  <a href="#!" className="footer-link">Pricing</a>
                </li>
                <li>
                  <a href="#!" className="footer-link">Safety</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <h5 className="mb-1 text-dark">opening hours</h5>
              <table className="table footer-table">
                <tbody>
                  <tr>
                    <td>Mon - Fri:</td>
                    <td>8am - 9pm</td>
                  </tr>
                  <tr>
                    <td>Sat - Sun:</td>
                    <td>8am - 1am</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="text-center p-3 footer-bottom">
          © 2020 Copyright:
          <a className="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
        </div>
      </footer>
  );
};

export default FooterComponent;
