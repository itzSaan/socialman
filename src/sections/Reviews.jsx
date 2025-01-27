import React from 'react'
import './styles/Reviews.css'
import img from '../assets/img/reviews/reviews-1.jpg'
import img2 from '../assets/img/reviews/reviews-2.jpg'
import img3 from '../assets/img/reviews/reviews-3.jpg'

const Reviews = () => {

  return (
    <section id="reviews" className="reviews section">

    <div className="container" data-aos="fade-up">
        <div className="row">
            <div className="col-lg-6 section-title">
            <h2>Client Reviews</h2>
            <h1><span>Reviews</span> of our Clients</h1>
            </div>

            <div className="col-lg-6 d-flex justify-content-between align-items-center">
                <p className='w-75'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi voluptates nihil odio soluta. Maxime, soluta! Dignissimos voluptate quisquam deserunt officia recusandae.</p>
                <a href="#" className='my-btn reviews-btn'>View More</a>
            </div>
        </div>
      
    </div>

    <div className="container" data-aos="fade-up" data-aos-delay="100">

         <div className="row gx-5 gy-3">

            <div className="review-item col-lg-4">
              <img src={img} className="review-img" alt=""/>
              <div className='review-wrap'>
             <p>
                <i className=" bi bi-quote quote-icon-left"></i>
              <span><b>Excellent Service!</b> 
              SocialMan transformed our online presence with their expert social media management and web design. Highly recommended!</span>
              <i className="bi bi-quote quote-icon-right"></i>
              </p>
              <hr/>
              <h3>Saul Goodman</h3>
              <h4>Ceo &amp; Founder</h4>
              </div>
            </div>
          
            <div className="review-item col-lg-4">
              <img src={img2} className="review-img" alt=""/>
              <div className='review-wrap'>
              <p>
                <i className="bi bi-quote quote-icon-left"></i>
                <span><b>Results-Driven Team!</b>
                The team at SocialMan helped us boost engagement and sales with tailored digital strategies. Their work speaks for itself!</span>
                <i className="bi bi-quote quote-icon-right"></i>
              </p>
              <hr/>
              <h3>Sara Wilsson</h3>
              <h4>Designer</h4>
              </div>
            </div>
          
            <div className="review-item col-lg-4">
              <img src={img3} className="review-img" alt=""/>
              <div className='review-wrap'>
              <p>
                <i className="bi bi-quote quote-icon-left"></i>
                <span><b>Top-notch Quality!</b>
                From website development to content creation, SocialMan delivers exceptional quality. Our brand has never looked better online!</span>
                <i className="bi bi-quote quote-icon-right"></i>
              </p>
              <hr/>
              <h3>Jena Karlis</h3>
              <h4>Store Owner</h4>
              </div>
            </div>
          
        </div>
        
      </div>

  </section>
  )
}

export default Reviews