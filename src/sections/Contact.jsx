import React from 'react'
import './styles/Contact.css'
import contactImg from "../assets/img/business-woman.png"

const Contact = () => {
  return (
    <section id="contact" className="contact section">

      <div className="container" data-aos="fade-up">
        <div className="row gy-4">
          <div className="col-lg-4 section-title">

        <h2>Contact</h2>
        <h1><span>Contact</span> Us & Join Together</h1>
      

           <div className="info-item d-flex align-items-center mt-5" data-aos="fade-up" data-aos-delay="300">
              <span className="material-symbols-outlined">location_on</span>
              <div>
                <h3>Location</h3>
                <p>N6, Nayapalli, BBSR, OD, IND 751015</p>
              </div>
            </div>

            <div className="info-item d-flex align-items-center" data-aos="fade-up" data-aos-delay="400">
             <span className="material-symbols-outlined">phone</span>
              <div>
                <h3>Call Us</h3>
                <p>+91 90408 14214</p>
              </div>
            </div>

            <div className="info-item d-flex align-items-center" data-aos="fade-up" data-aos-delay="500">
              <span className="material-symbols-outlined">mail</span>
              <div>
                <h3>Email Us</h3>
                <p>contact@socialman.co.in</p>
              </div>
            </div>

          </div>

          <div className="col-lg-4 ms-auto">
            <form action="forms/contact.php" method="post" className="php-email-form" data-aos="fade-up" data-aos-delay="200">
            <h2 className='text-center fw-bolder'>Get in Touch</h2>
            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum magni</p>
              <div className="row gy-4">

                <div className="col-md-12">
                  <input type="text" name="name" className="form-control" placeholder="Your Name" required=""/>
                </div>

                <div className="col-md-12 ">
                  <input type="email" className="form-control" name="email" placeholder="Your Email" required=""/>
                </div>

                <div className="col-md-12">
                  <textarea className="form-control" name="message" rows="6" placeholder="Message" required=""></textarea>
                </div>

                <div className="col-md-12 text-center">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div>

                  <button className='my-btn my-btn-lg' type="submit">Send Message</button>
                </div>

              </div>
            </form>
          </div>

        </div>

      </div>

      <img className='contact-img' src={contactImg} alt="" />

      {/* card container */}
      <div className="container row gy-2 achievement-card" data-aos="fade-up">

          <div className="col-lg-3 col-sm-6 col-auto mx-auto text-center d-flex flex-column align-items-center border-lg-end border-md-">
            <span className="material-symbols-outlined mb-3">fact_check</span>
              <h1 className="m-0">3k+</h1>
              <p className="m-0 text-uppercase">Completed Projects</p>
          </div>

          <div className="col-lg-3 col-sm-6 col-auto mx-auto text-center d-flex flex-column align-items-center border-lg-end border-md-bottom">
            <span className="material-symbols-outlined mb-3">sentiment_very_satisfied</span>
              <h1 className="m-0">20k+</h1>
              <p className="m-0 text-uppercase">Happy Customers</p>
          </div>

          <div className="col-lg-3 col-sm-6 col-auto mx-auto text-center d-flex flex-column align-items-center border-lg-end border-md-bottom">
            <span className="material-symbols-outlined  mb-3">social_leaderboard</span>
              <h1 className="m-0">13+</h1>
              <p className="m-0 text-uppercase">Award Winning</p>
          </div>

          <div className="col-lg-3 col-sm-6 col-auto mx-auto text-center d-flex flex-column align-items-center">
            <span className="material-symbols-outlined mb-3">workspace_premium</span>
              <h1 className="m-0">99%</h1>
              <p className="m-0 text-uppercase">Satisfaction Rate</p>
          </div>
          

      </div>
      {/* end of card container */}

      {/* <div className="mt-5" data-aos="fade-up" data-aos-delay="200">
        <iframe style={{border:0, width: "100%", height: "400px",}} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus" frameborder="0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div> */}

    </section>
  )
}

export default Contact