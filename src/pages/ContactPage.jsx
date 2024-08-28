import React, {useEffect} from "react";
import "/src/sections/styles/Contact.css";
import contactImg from "/src/assets/img/business-woman.png";

const cardStyle = { borderRadius: "30px" };

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  }, [])
  return (
    <>
      <div
        className="page-title position-relative"
        data-aos="fade"
        style={{ backgroundImage: "url('src/assets/img/hero-bg.jpg')" }}
      >
        <div className="container position-relative">
          <h1>
            Contact Us <br />
          </h1>
        </div>
      </div>

      <section>
        <div className="container">
          <div className="ro section-title text-center" data-aos="fade-up">
            <h2>Contact Info</h2>
            <h1>
              <span>Contact </span> & Join Together
            </h1>
            <p className="mt-4 mx-auto">
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in
            </p>
          </div>

          <div className="row mt-4 gap-3 justify-content-between">
            <div
              style={cardStyle}
              className="col about-card shadow d-flex align-items-center gap-2 p-3"
            >
              <span className="material-symbols-outlined fs-1 p-2 rounded bg-dark text-light rounded-pill">
                location_on
              </span>
              <div>
                <h6 className="m-0">Location</h6>
                <h4 className="m-0">Visit Us At</h4>
                <p className="small mb-0">Nayapalli, BBSR, OD-751015</p>
              </div>
            </div>
            <div
              style={cardStyle}
              className="col about-card shadow d-flex align-items-center gap-2  p-3"
            >
              <span className="material-symbols-outlined fs-1 p-2 rounded bg-dark text-light rounded-pill">
                phone_android
              </span>
              <div>
                <h6 className="m-0">Mobile</h6>
                <h4 className="m-0">Call Us On</h4>
                <p className="small mb-0">Mob: 9040814214</p>
              </div>
            </div>
            <div
              style={cardStyle}
              className="col about-card shadow d-flex align-items-center gap-2  p-3"
            >
              <span className="material-symbols-outlined fs-1 p-2 rounded bg-dark text-light rounded-pill">
                mail
              </span>
              <div>
                <h6 className="m-0">Drop A Line</h6>
                <h4 className="m-0">Mail Address</h4>
                <p className="small mb-0">hello@socialman.co.in</p>
              </div>
            </div>
            <div
              style={cardStyle}
              className="col about-card shadow d-flex align-items-center gap-2  p-3"
            >
              <span className="material-symbols-outlined fs-1 p-2 rounded bg-dark text-light rounded-pill">
                schedule
              </span>
              <div>
                <h6 className="m-0">Office Hours</h6>
                <h4 className="m-0">Opening Time</h4>
                <p className="small mb-0">
                  Mon - Fri : 9am - 6pm <br /> Sunday(Closed)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="contact section">
        <div className="container" data-aos="fade-up">
          <div className="row gy-4">
            <div className="col-lg-4 section-title">
              <h2>Contact</h2>
              <h1>
                <span>Contact</span> Us & Join Together
              </h1>

              <div
                className="info-item d-flex align-items-center mt-5"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <span className="material-symbols-outlined">location_on</span>
                <div>
                  <h3>Location</h3>
                  <p>N6, Nayapalli, BBSR, OD, IND 751015</p>
                </div>
              </div>

              <div
                className="info-item d-flex align-items-center"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <span className="material-symbols-outlined">phone</span>
                <div>
                  <h3>Call Us</h3>
                  <p>+91 90408 14214</p>
                </div>
              </div>

              <div
                className="info-item d-flex align-items-center"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <span className="material-symbols-outlined">mail</span>
                <div>
                  <h3>Email Us</h3>
                  <p>contact@socialman.co.in</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 ms-auto">
              <form
                action="forms/contact.php"
                method="post"
                className="php-email-form"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h2 className="text-center fw-bolder">Get in Touch</h2>
                <p className="text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                  magni
                </p>
                <div className="row gy-4">
                  <div className="col-md-12">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Your Name"
                      required=""
                    />
                  </div>

                  <div className="col-md-12 ">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Your Email"
                      required=""
                    />
                  </div>

                  <div className="col-md-12">
                    <textarea
                      className="form-control"
                      name="message"
                      rows="6"
                      placeholder="Message"
                      required=""
                    ></textarea>
                  </div>

                  <div className="col-md-12 text-center">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>

                    <button className="my-btn my-btn-lg" type="submit">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <img className='contact-img' src={contactImg} alt="" />
      </section>
      <div className="m-0">
        <iframe
          style={{ border: 0, width: "100%", height: "400px" }}
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default ContactPage;
