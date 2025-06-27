import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./styles/Subscribe.css";

const Subscribe = () => {
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

  const sendSubscribeEmail = (e) => {
    setIsLoading(true);
    e.preventDefault();

    emailjs
      .sendForm("service_bnytnsq", "template_kpdl1ym", form.current, {
        publicKey: "fgveaITehct9ivUUs",
      })
      .then(
        () => {
          console.log("Success");
          setIsLoading(false);
          setIsSuccess(true);
          form.current.reset();
        },
        (error) => {
          console.log("Failed...", error.text);
          setIsLoading(false);
          setIsError(true);
          form.current.reset();
        }
      );
  };
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
              Stay ahead of the game! Subscribe to our newsletter for the latest
              digital marketing tips, trends, and exclusive updates straight to
              your inbox.
            </p>
            <form
              ref={form}
              onSubmit={sendSubscribeEmail}
              method="post"
              className="php-email-form"
            >
              <div className="subscribe-form d-flex gap-2">
                <input
                  className="w-100"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                />
                <input
                  className="my-btn my-btn-lg"
                  type="submit"
                  value="Subscribe"
                />
              </div>
              <div className="col-md-12 text-center">
                {isLoading && <div className="loading">Loading</div>}
                {isError && (
                  <div className="error-message">
                    Opps! There is some error, please try again.
                  </div>
                )}
                {isSuccess && (
                  <div className="sent-message">
                    Thank you for Subscribing! Welcome to our Family
                  </div>
                )}
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
