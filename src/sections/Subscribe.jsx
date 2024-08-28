import React from "react";
import "./styles/Subscribe.css";

const Subscribe = () => {
  return (
    <section id="subscribe" className="subscribe">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-6 section-title">
            <h2>Subscribe</h2>
            <h1>
              <span>Subscribe</span> To Get Latest Updates From Us
            </h1>
            </div>
            <div className="col-lg-6">
              <p className="mt-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Similique qui quasi quaerat accusamus deleniti consectetur
                voluptatum id aliquid neque fugit! 
              </p>
              <form
                action="forms/newsletter.php"
                method="post"
                className="php-email-form"
              >
                <div className="subscribe-form d-flex gap-2">
                  <input className="w-100" type="email" name="email" placeholder="Your Email" />
                  <input className="my-btn my-btn-lg" type="submit" value="Subscribe" />
                </div>
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">
                  Your subscription request has been sent. Thank you!
                </div>
              </form>
            
          </div>
        </div>
      </div>

      <div className="container"></div>
    </section>
  );
};

export default Subscribe;
