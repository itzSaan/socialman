import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './styles/Header.css';

const Header = () => {
  const [show, setShow] = useState(false);

  const mobileNavToggle = () => {
    setShow((prev) => !prev);
  };

  const closeMobileNav = () => {
    setShow(false);
  };

  return (
    <header id="header" className={`header fixed-top ${show && 'mobile-nav-active'}`}>

      <div className="topbar d-flex align-items-center">
        <div className="container d-flex justify-content-center justify-content-md-between">
          <div className="contact-info d-flex align-items-center">
            <i className="bi bi-envelope d-flex align-items-center">
              <a href="mailto:hello.socialman@gmail.com">hello.socialman@gmail.com</a>
            </i>
            <i className="bi bi-phone d-flex align-items-center ms-4"><span>+91 90908 14214</span></i>
          </div>
          <div className="social-links d-none d-md-flex align-items-center">
            <ul>
              <li><a href="https://facebook.com/msocialman/" target='_blank' rel="noopener noreferrer"><i className="bi bi-facebook"></i></a></li>
              <li><a href="https://x.com/socialman.officail/" target='_blank' rel="noopener noreferrer"><i className="bi bi-twitter"></i></a></li>
              <li><a href="https://instagram.com/socialman.officail/" target='_blank' rel="noopener noreferrer"><i className="bi bi-instagram"></i></a></li>
              <li><a href="https://linkedin.com/in/socialman.officail/" target='_blank' rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="branding d-flex align-items-center">
        <div className="container position-relative d-flex align-items-center justify-content-between">
          <Link to="/" className="logo d-flex align-items-center me-auto me-xl-0">
            <h1 className="sitename">SocialMan</h1>
          </Link>

          <nav id="navmenu" className="navmenu">
            <ul>
              <li><NavLink to="/" onClick={closeMobileNav}>Home</NavLink></li>
              <li><NavLink to="/about" onClick={closeMobileNav}>About</NavLink></li>
              <li><NavLink to="/services" onClick={closeMobileNav}>Services</NavLink></li>
              {/* <li><NavLink to="/portfolio" onClick={closeMobileNav}>Portfolio</NavLink></li> */}
              <li><NavLink to="/blog" onClick={closeMobileNav}>Blogs</NavLink></li>
              <li><NavLink to="/contact" onClick={closeMobileNav}>Contact</NavLink></li>
            </ul>
            <i 
              className={`mobile-nav-toggle d-xl-none ${show ? 'bi bi-x' : 'bi bi-list'}`}
              onClick={mobileNavToggle}
            ></i>
          </nav>

          <NavLink className="my-btn btn-get-a-quote d-none d-xl-block" to="/contact">Get a Quote</NavLink>

        </div>
      </div>

    </header>
  );
};

export default Header;
