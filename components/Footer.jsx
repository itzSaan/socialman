"use client";
import Link from 'next/link';
import ScrollAnimation from './ScrollAnimation';
import './styles/Footer.css';

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <ScrollAnimation animation="fadeUp">
        <div className="container footer-top">
          <div className="row gy-4">
            <ScrollAnimation animation="fadeUp" delay={0.1}>
              <div className="col-lg-4 col-md-6 footer-about">
                <Link href="/" className="logo d-flex align-items-center">
                  <span className="sitename">SocialMan</span>
                </Link>
                <div className="footer-contact">
                  <p className="w-75">
                  Empowering your brand with expert digital solutions in social media, web development, content creation, and design.
                  </p>
                </div>
                <div className="social-links d-flex mt-4">
                  <a href="" target="__blank">
                    <i className="bi bi-twitter-x"></i>
                  </a>
                  <a href="https://www.facebook.com/msocialman" target="__blank">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="https://www.instagram.com/socialman.official" target="__blank">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="" target="__blank">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeUp" delay={0.2}>
              <div className="col-lg-2 col-md-3 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/about">About us</Link></li>
                  <li><Link href="/services">Services</Link></li>
                  <li><Link href="/terms-and-conditions">Terms of service</Link></li>
                  <li><Link href="/privacy-policy">Privacy policy</Link></li>
                </ul>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeUp" delay={0.3}>
              <div className="col-lg-2 col-md-3 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li><Link href="/services">Web Design</Link></li>
                  <li><Link href="/services">Web Development</Link></li>
                  <li><Link href="/services">Product Management</Link></li>
                  <li><Link href="/services">Digital Marketing</Link></li>
                  <li><Link href="/services">Graphic Design</Link></li>
                </ul>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeUp" delay={0.4}>
              <div className="col-lg-4 col-md-12 footer-contact">
                <h4>Contact Information</h4>
                <p>Feel free to contact & Reach us !!</p>
                <ul>
                  <li>
                    <span className="material-symbols-outlined">location_on</span>
                    <p>Mancheswar, Bhubaneswar, OD - 751010</p>
                  </li>
                  <li>
                    <span className="material-symbols-outlined">phone</span>
                    <p>+91 90908 14214</p>
                  </li>
                  <li>
                    <span className="material-symbols-outlined">mail</span>
                    <p><a href="mailto:hello.socialman@gmail.com" style={{color: "inherit"}}>hello.socialman@gmail.com</a></p>
                  </li>
                </ul>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation animation="fadeUp" delay={0.5}>
        <div className="container copyright text-center mt-4">
          <p>
            © <span>Copyright</span>{" "}
            <strong className="px-1 sitename">SocialMan</strong>{" "}
            <span>All Rights Reserved</span>
          </p>
          <div className="credits">
            Designed & Developed by <a href="https://sapiora.in/"><b>Sapiora Tech</b></a>
          </div>
        </div>
      </ScrollAnimation>
    </footer>
  );
};

export default Footer;