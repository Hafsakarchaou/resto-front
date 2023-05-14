import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../App.css';

const FooterComponent = () => {
  const footerStyle = {
    marginTop: 'auto',
    backgroundColor: '#A3A3A3',
    padding: '1rem',
    color: '#fff',
  };
  return (
    <footer className="footer py-3 d-flex justify-content-center align-items-center " style={footerStyle}>
      <div className="container">
        <section className=" justify-content-center " >
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <FontAwesomeIcon icon={['fab', 'facebook-f']} />
          </a>
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <FontAwesomeIcon icon={['fab', 'twitter']} />
          </a>
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <FontAwesomeIcon icon={['fab', 'google']} />
          </a>
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <FontAwesomeIcon icon={['fab', 'instagram']} />
          </a>
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
          </a>
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <FontAwesomeIcon icon={['fab', 'github']} />
          </a>
        </section>

        <section className="">
          <div className="text-center">
            <p className="mb-0">
              © {new Date().getFullYear()} Your Company Name. All rights reserved.
            </p>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default FooterComponent;