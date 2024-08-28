import React from "react";
import "./styles/Footer.css";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6 footer-about" data-aos="fade-up">
            <a href="index.html" className="logo d-flex align-items-center">
              <span className="sitename">SocialMan</span>
            </a>
            <div className="footer-contact">
              <p className="w-75">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
                veniam sint quae voluptate asperiores expedita natus cumque
                obcaecati fugit. At.
              </p>
            </div>
            <div className="social-links d-flex mt-4">
              <a href="">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-2 col-md-3 footer-links" data-aos="fade-up" data-aos-delay="100">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Terms of service</a>
              </li>
              <li>
                <a href="#">Privacy policy</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links" data-aos="fade-up" data-aos-delay="200">
            <h4>Our Services</h4>
            <ul>
              <li>
                <a href="#">Web Design</a>
              </li>
              <li>
                <a href="#">Web Development</a>
              </li>
              <li>
                <a href="#">Product Management</a>
              </li>
              <li>
                <a href="#">Marketing</a>
              </li>
              <li>
                <a href="#">Graphic Design</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-12 footer-contact" data-aos="fade-up" data-aos-delay="300">
            <h4>Contact Information</h4>
            <p>Feel free to contact & Reach us !!</p>
            <ul>
              <li>
                <span className="material-symbols-outlined">location_on</span>
                <p>N6, Nayapalli, Bhubaneswar, OD - 751015</p>
              </li>
              <li>
                <span className="material-symbols-outlined">phone</span>
                <p>+91 90408 14214</p>
              </li>
              <li>
                <span className="material-symbols-outlined">mail</span>
                <p>contact@socialman.co.in</p>
              </li>
            </ul>
            {/* <form action="forms/newsletter.php" method="post" className="php-email-form">
            <div className="newsletter-form">
                <input type="email" name="email"/>
                <input type="submit" value="Subscribe"/>
                </div>
            <div className="loading">Loading</div>
            <div className="error-message"></div>
            <div className="sent-message">Your subscription request has been sent. Thank you!</div>
          </form> */}
          </div>
        </div>
      </div>

      <div className="container copyright text-center mt-4" data-aos="fade-up" data-aos-delay="400">
        <p>
          © <span>Copyright</span>{" "}
          <strong className="px-1 sitename">SocialMan</strong>{" "}
          <span>All Rights Reserved</span>
        </p>
        <div className="credits">
          Designed by <a href="https://cybruxlabs.com/">Cybrux Labs</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
