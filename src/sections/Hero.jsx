import React from 'react'
import './styles/Hero.css'
import heroImage from '../assets/img/hero-bg.jpg'
import { NavLink } from 'react-router-dom'

const Hero = () => {
  return (
    <section id="hero" className="hero section">

      <img src={heroImage} alt="" data-aos="fade-in"/>

      <div className="container">
        <div className="row">
          <div className="d-flex flex-column align-items-center">
            <h2 className='text-center' data-aos="fade-up" data-aos-delay="100">Unlock Your <span>Brand's Potential </span>with Expert Social Media Strategies</h2>
            <p data-aos="fade-up" data-aos-delay="200">
            Your Partner in Social Media Success</p>
            <div className="d-flex mt-4" data-aos="fade-up" data-aos-delay="300">
              <NavLink to="/portfolio" className="my-btn my-btn-lg cta-btn">Our Portfolio</NavLink>
              <NavLink to="/contact" className="my-btn my-btn-lg cta-btn">Get a Quote</NavLink>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Hero