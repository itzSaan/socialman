import React from "react";
import "./styles/About.css";
import aboutImg from "../assets/img/about-img.webp"
import { NavLink } from "react-router-dom";


const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container section-title" data-aos="fade-up">
        <div className="row gap-4">
          <div className="col-lg-6 ms-auto">
            <div className="row">
              <img src={aboutImg} alt="" className="img-fluid" />
            </div>
          </div>

          <div className="col-lg-5 content">
            <h2>About Us</h2>
            <h1>
              <span>Introduction</span> To Best Digital Agency!
            </h1>

            <p className="mt-4">
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat
            </p>
            <ul>
              <li>
                <i className="bi bi-check2-circle"></i>{" "}
                <span>
                Expert in social media management, website development, and digital marketing.
                </span>
              </li>
              <li>
                <i className="bi bi-check2-circle"></i>{" "}
                <span>
                Tailored strategies to enhance your brand's online presence.
                </span>
              </li>
              <li>
                <i className="bi bi-check2-circle"></i>{" "}
                <span>
                Creative solutions that drive business growth and measurable results.
                </span>
              </li>
            </ul>

            <NavLink to="/about" className="my-btn about-btn">
              More About Us
            </NavLink>
          </div>
        </div>

        
      </div>

    </section>
  );
};

export default About;
