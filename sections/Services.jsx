"use client";
import Link from "next/link";
import ScrollAnimation from "../components/ScrollAnimation";
import "./styles/Services.css";

const Services = () => {
  return (
    <section id="services" className="services section">
      <ScrollAnimation animation="fadeUp">
        <div className="container section-title">
          <div className="row gap-4">
            <div className="col-lg-5">
              <h2>Services</h2>
              <h1><span>Services</span> We can Help you with</h1>
              <p className="mt-4">At SocialMan, we drive your business growth through powerful digital marketing strategies, delivering measurable results and impactful engagement. Let your brand's voice shine with our creative expertise.</p>
              <ul>
                <li><i className="bi bi-check2-circle"></i> <span>Strategically managing Facebook, Instagram, and YouTube accounts to grow audience engagement.</span></li>
                <li><i className="bi bi-check2-circle"></i> <span>Building user-friendly, SEO-optimized websites that reflect your brand identity.</span></li>
                <li><i className="bi bi-check2-circle"></i> <span>Crafting visually appealing logos, banners, and other branding elements.</span></li>
              </ul>
            </div>
            <div className="col-lg-6 ms-auto">
              <div className="row gy-4">
                <ScrollAnimation animation="fadeUp" delay={0.1}>
                  <div className="col-lg-6">
                    <div className="card-item">
                      <span className="material-symbols-outlined">monitoring</span>
                      <h4><a href="" className="stretched-link">Social Media Management</a></h4>
                    </div>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation animation="fadeUp" delay={0.2}>
                  <div className="col-lg-6">
                    <div className="card-item">
                      <span className="material-symbols-outlined">partner_exchange</span>
                      <h4><a href="" className="stretched-link">Content Creation</a></h4>
                    </div>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation animation="fadeUp" delay={0.3}>
                  <div className="col-lg-6">
                    <div className="card-item">
                      <span className="material-symbols-outlined">developer_mode</span>
                      <h4><a href="" className="stretched-link">Website Development and Design</a></h4>
                    </div>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation animation="fadeUp" delay={0.3}>
                  <div className="col-lg-6">
                    <div className="card-item">
                      <span className="material-symbols-outlined">linked_services</span>
                      <h4><a href="" className="stretched-link">Digital Marketing and SEO</a></h4>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animation="fadeUp" delay={0.5}>
        <div className="container appointment-card">
          <div className="row gy-3 align-items-center">
            <div className="col-lg-4 col-md-4 d-flex align-items-center gap-3 border-lg-end">
              <span className="material-symbols-outlined fs-2 p-3 border border-2 rounded-pill">phone_in_talk</span>
              <div className="appointment-contact">
                <p className="m-0 text-uppercase">Get a Free Consultation</p>
                <h4 className="mb-0">+919090814214</h4>
              </div>
            </div>
            <div className="col-lg-5 col-sm-12 me-auto">
              <p>Have questions? Call us now for a free consultation and start enhancing your online presence today!</p>
            </div>
            <div className="col-auto">
              <a href="#contact" className="m-auto my-btn appointment-btn">Make Appointment</a>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default Services;
