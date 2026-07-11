"use client";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ScrollAnimation from "../components/ScrollAnimation";
import "./styles/Contact.css";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      isSuccess && setIsSuccess(false);
      isError && setIsError(false);
    }, 5000);
  }, [isLoading]);

  const form = useRef();

  const sendEmail = (e) => {
    setIsLoading(true);
    e.preventDefault();
    emailjs.sendForm("service_bnytnsq", "template_kpdl1ym", form.current, { publicKey: "fgveaITehct9ivUUs" })
      .then(() => {
        setIsLoading(false);
        setIsSuccess(true);
        form.current.reset();
      }, (error) => {
        setIsLoading(false);
        setIsError(true);
        form.current.reset();
      });
  };

  return (
    <section id="contact" className="contact section">
      <ScrollAnimation animation="fadeUp">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-4 section-title">
              <h2>Contact</h2>
              <h1><span>Contact</span> Us & Join Together</h1>
              <ScrollAnimation animation="fadeUp" delay={0.3}>
                <div className="info-item d-flex align-items-center mt-5">
                  <span className="material-symbols-outlined">location_on</span>
                  <div><h3>Location</h3><p>Mancheswar, BBSR, OD, IND 751010</p></div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animation="fadeUp" delay={0.4}>
                <div className="info-item d-flex align-items-center">
                  <span className="material-symbols-outlined">phone</span>
                  <div><h3>Call Us</h3><p>+91 90908 14214</p></div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animation="fadeUp" delay={0.5}>
                <div className="info-item d-flex align-items-center">
                  <span className="material-symbols-outlined">mail</span>
                  <div><h3>Email Us</h3><p>hello.socialman@gmail.com</p></div>
                </div>
              </ScrollAnimation>
            </div>
            <ScrollAnimation animation="fadeUp" delay={0.2}>
              <div className="col-lg-4 ms-auto">
                <form ref={form} onSubmit={sendEmail} method="post" className="php-email-form">
                  <h2 className="text-center fw-bolder">Get in Touch</h2>
                  <p className="text-center">Feel free to contact & Reach us !!</p>
                  <div className="row gy-4">
                    <div className="col-md-12"><input type="text" name="name" className="form-control" placeholder="Your Name" required /></div>
                    <div className="col-md-12"><input type="email" className="form-control" name="email" placeholder="Your Email" required /></div>
                    <div className="col-md-12"><textarea className="form-control" name="message" rows="6" placeholder="Message" required></textarea></div>
                    <div className="col-md-12 text-center">
                      {isLoading && <div className="loading">Loading</div>}
                      {isError && <div className="error-message">Opps! There is some error, please try again.</div>}
                      {isSuccess && <div className="sent-message">Your message has been sent. Thank you!</div>}
                      <button className="my-btn my-btn-lg" type="submit">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </ScrollAnimation>
      <img className="contact-img" src="/assets/img/business-woman.png" alt="" />
    </section>
  );
};

export default Contact;
