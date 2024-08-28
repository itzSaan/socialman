import React, { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './styles/Header.css'

const Header = () => {
  const [show, setShow] = useState(false)
  const [navScrollEffect, setNavScrollEffect] = useState(true)

  const mobileNavToggle = (e) => {
    setShow((prev) => !prev)
  }

  return (
    <header id="header" className={`header fixed-top ${show && 'mobile-nav-active'}`}>

    <div className="topbar d-flex align-items-center">
      <div className="container d-flex justify-content-center justify-content-md-between">
        <div className="contact-info d-flex align-items-center">
          <i className="bi bi-envelope d-flex align-items-center"><a to="mailto:contact@example.com">contact@socialman.co.in</a></i>
          <i className="bi bi-phone d-flex align-items-center ms-4"><span>+91 90408 14214</span></i>
        </div>
        <div className="social-links d-none d-md-flex align-items-center">
          <ul>
            <li><a to=""><i className="bi bi-facebook"></i></a></li>
            <li><a to=""><i className="bi bi-twitter"></i></a></li>
            <li><a to=""><i className="bi bi-instagram"></i></a></li>
            <li><a to=""><i className="bi bi-google"></i></a></li>
          </ul>
        </div>
      </div>
    </div> 

    <div className="branding d-flex align-items-cente">

      <div className="container position-relative d-flex align-items-center justify-content-between">
        <Link to="/" className="logo d-flex align-items-center me-auto me-xl-0">
          {/* <img src={Logo} alt=""/> */}
          <h1 className="sitename">SocialMan</h1>
        </Link>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li><NavLink to="/">Home<br/></NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/portfolio">Portfolio</NavLink></li>
            <li><NavLink to="/blog">Blogs</NavLink></li>           
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <i 
            className={`mobile-nav-toggle d-xl-none ${show ? 'bi bi-x' : 'bi bi-list'}`}
            onClick={() => mobileNavToggle()}
            ></i>
        </nav>

        <NavLink className="my-btn btn-get-a-quote d-none d-xl-block" to="/contact">Get a Quote</NavLink>

      </div>

    </div>

  </header>
  )
}

export default Header