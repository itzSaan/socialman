import React from "react";
import "./styles/Services.css";
import avtar from "../assets/img/reviews/reviews-1.jpg";
import { NavLink } from "react-router-dom";

const Services = () => {
  return (
    <section id="services" className="services section">
      <div className="container section-title" data-aos="fade-up">
        <div className="row gap-4">
          <div className="col-lg-5">
            <h2>Services</h2>
            <h1>
              <span>Services</span> We can Help you with
            </h1>

            <p className="mt-4">
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident
            </p>
            <ul>
              <li>
                <i className="bi bi-check2-circle"></i>{" "}
                <span>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </span>
              </li>
              <li>
                <i className="bi bi-check2-circle"></i>{" "}
                <span>
                  Duis aute irure dolor in reprehenderit in voluptate velit.
                </span>
              </li>
              <li>
                <i className="bi bi-check2-circle"></i>{" "}
                <span>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor
                </span>
              </li>
            </ul>

            <div className="d-flex justify-content-between align-items-center mt-4">
              <div className="d-flex align-items-center gap-2 border-end pe-lg-5 pe-3 border-secondary">
                <div className="col">
                  <img
                    src={avtar}
                    width={54}
                    className="img-fluid rounded-pill"
                    alt=""
                  />
                </div>
                <div className="">
                  <h5 className="m-0 text-white">Sitansu Sekhar</h5>
                  <span>Founder</span>
                </div>
              </div>
              <div className="ms-auto">
                <NavLink to="/services" className="my-btn service-btn">
                  More Services
                </NavLink>
              </div>
            </div>
          </div>

          <div className="col-lg-6 ms-auto">
            <div className="row gy-4">
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                <div className="card-item">
                  <span className="material-symbols-outlined">monitoring</span>
                  <h4>
                    <a href="" className="stretched-link">
                      Social Media Management
                    </a>
                  </h4>
                </div>
              </div>

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                <div className="card-item">
                  <span className="material-symbols-outlined">
                    partner_exchange
                  </span>
                  <h4>
                    <a href="" className="stretched-link">
                      Content Creation
                    </a>
                  </h4>
                </div>
              </div>

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
                <div className="card-item">
                  <span className="material-symbols-outlined">
                    developer_mode
                  </span>
                  <h4>
                    <a href="" className="stretched-link">
                      Influencer Marketing
                    </a>
                  </h4>
                </div>
              </div>

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
                <div className="card-item">
                  <span className="material-symbols-outlined">
                    linked_services
                  </span>
                  <h4>
                    <a href="" className="stretched-link">
                      Analytics and Reporting
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* card container */}
      <div className="container appointment-card" data-aos="fade-up" data-aos-delay="500">
        <div className="row gy-3 align-items-center">
          <div className="col-lg-4 col-md-4 d-flex align-items-center gap-3 border-lg-end">
            <span className="material-symbols-outlined fs-2 p-3 border border-2 rounded-pill">phone_in_talk</span>
            <div className="appointment-contact">
              <p className="m-0 text-uppercase">Get a Free Consultation</p>
              <h4 className="mb-0">+919040814214</h4>
            </div>
          </div>
          <div className="col-lg-5 col-sm-12 me-auto">
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
              sint ut blanditiis inventore veniam est.
            </p>
          </div>
          <div className="col-auto">
            <a href="#contact" className="m-auto my-btn appointment-btn ">
              Make Appointment
            </a>
            </div>
        </div>
      </div>
      {/* end of card container */}
    </section>
  );
};

export default Services;
