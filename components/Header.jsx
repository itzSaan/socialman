"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './styles/Header.css';

const Header = () => {
  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const mobileNavToggle = () => {
    setShow((prev) => !prev);
  };

  const closeMobileNav = () => {
    setShow(false);
  };

  const isActive = (path) => {
    return pathname === path ? 'active' : '';
  };

  useEffect(() => {
    const toggleScrolled = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    toggleScrolled();
    window.addEventListener('scroll', toggleScrolled);

    return () => {
      window.removeEventListener('scroll', toggleScrolled);
    };
  }, []);

  return (
    <header id="header" className={`header fixed-top ${show && 'mobile-nav-active'} ${scrolled ? 'scrolled' : ''}`}>
      <div className="topbar d-flex align-items-center">
        <div className="container d-flex justify-content-center justify-content-md-between">
          <div className="contact-info d-flex align-items-center">
            <i className="bi bi-envelope d-flex align-items-center">
              <a href="mailto:hello.socialman@gmail.com">hello.socialman@gmail.com</a>
            </i>
            <i className="bi bi-whatsapp d-flex align-items-center ms-4">
              <span><a href="https://wa.me/+919090814214">+91 90908 14214</a></span>
            </i>
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
          <Link href="/" className="logo d-flex align-items-center me-auto me-xl-0">
            <h1 className="sitename">SocialMan</h1>
          </Link>

          <nav id="navmenu" className="navmenu">
            <ul>
              <li><Link href="/" className={isActive('/')} onClick={closeMobileNav}>Home</Link></li>
              <li><Link href="/about" className={isActive('/about')} onClick={closeMobileNav}>About</Link></li>
              <li><Link href="/services" className={isActive('/services')} onClick={closeMobileNav}>Services</Link></li>
              <li><Link href="/blogs" className={isActive('/blogs')} onClick={closeMobileNav}>Blogs</Link></li>
              <li><Link href="/contact" className={isActive('/contact')} onClick={closeMobileNav}>Contact</Link></li>
            </ul>
            <i 
              className={`mobile-nav-toggle d-xl-none ${show ? 'bi bi-x' : 'bi bi-list'}`}
              onClick={mobileNavToggle}
            ></i>
          </nav>

          <Link className="my-btn btn-get-a-quote d-none d-xl-block" href="/contact">Get a Quote</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;