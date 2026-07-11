import Contact from "../../sections/Contact";
import ScrollAnimation from "../../components/ScrollAnimation";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with SocialMan for expert digital marketing solutions in Bhubaneswar. Contact us for social media management, web development, and more.",
  openGraph: {
    title: "Contact SocialMan | Digital Agency in Bhubaneswar",
    description:
      "Get in touch with SocialMan for expert digital marketing solutions in Bhubaneswar.",
  },
};

const cardStyle = { borderRadius: "30px" };

const ContactPage = () => {
  return (
    <>
      <ScrollAnimation animation="fade">
        <div className="page-title position-relative" style={{ backgroundImage: `url(/assets/img/hero-bg.jpg)` }}>
          <div className="container position-relative">
            <h1>Contact Us</h1>
          </div>
        </div>
      </ScrollAnimation>

      <section>
        <ScrollAnimation animation="fadeUp">
          <div className="container">
            <div className="ro section-title text-center">
              <h2>Contact Info</h2>
              <h1><span>Contact </span> & Join Together</h1>
              <p className="mt-4 mx-auto">
                We are here to bring your vision to life through expert digital marketing solutions.<br />
                Get in touch with us today and let's grow your brand together!
              </p>
            </div>
            <div className="row mt-4 gap-3 justify-content-between">
              <ScrollAnimation animation="fadeUp" delay={0.1}>
                <div style={cardStyle} className="col about-card shadow d-flex align-items-center gap-2 p-3">
                  <span className="material-symbols-outlined fs-1 p-2 rounded bg-dark text-light rounded-pill">location_on</span>
                  <div>
                    <h6 className="m-0">Location</h6>
                    <h4 className="m-0">Visit Us At</h4>
                    <p className="small mb-0">Mancheswar, BBSR, OD-751010</p>
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animation="fadeUp" delay={0.2}>
                <div style={cardStyle} className="col about-card shadow d-flex align-items-center gap-2 p-3">
                  <span className="material-symbols-outlined fs-1 p-2 rounded bg-dark text-light rounded-pill">phone_android</span>
                  <div>
                    <h6 className="m-0">Mobile</h6>
                    <h4 className="m-0">Call Us On</h4>
                    <p className="small mb-0">Mob: 9090814214</p>
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animation="fadeUp" delay={0.3}>
                <div style={cardStyle} className="col about-card shadow d-flex align-items-center gap-2 p-3">
                  <span className="material-symbols-outlined fs-1 p-2 rounded bg-dark text-light rounded-pill">mail</span>
                  <div>
                    <h6 className="m-0">Drop A Line</h6>
                    <h4 className="m-0">Mail Address</h4>
                    <p className="small mb-0">hello.socialman@gmail.com</p>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </ScrollAnimation>
      </section>

      <Contact />

      <div className="m-0">
        <iframe style={{ border: 0, width: "100%", height: "400px" }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29931.58332483462!2d85.82665975374623!3d20.323106638290557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19099ba6ca97f3%3A0x1a71a53d39591cca!2sMancheswar%2C%20Bhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1737835853527!5m2!1sen!2sin"
          allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </>
  );
};

export default ContactPage;
