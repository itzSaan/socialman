"use client";
import Link from 'next/link';
import ScrollAnimation from '../components/ScrollAnimation';
import './styles/Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero section">
        <img src="/assets/img/hero-bg.jpg" alt="hero-image" fetchPriority="high" />
      <ScrollAnimation animation="fadeIn">
      </ScrollAnimation>
      <div className="container">
        <div className="row">
          <div className="d-flex flex-column align-items-center">
            <ScrollAnimation animation="fadeUp">
              <h2 className='text-center'>Unlock Your <span>Brand's Potential </span>with Expert Social Media Strategies</h2>
            </ScrollAnimation>
            <ScrollAnimation animation="fadeUp" delay={0.1}>
              <p>Your Partner in Social Media Success</p>
            </ScrollAnimation>
            <ScrollAnimation animation="fadeUp" delay={0.2}>
              <div className="d-flex mt-4">
                <Link href="/services" className="my-btn my-btn-lg cta-btn">Our Services</Link>
                <Link href="/contact" className="my-btn my-btn-lg cta-btn">Get a Quote</Link>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
