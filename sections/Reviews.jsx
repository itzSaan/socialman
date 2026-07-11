"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import ScrollAnimation from "../components/ScrollAnimation";
import "./styles/Reviews.css";

const Reviews = () => {
  const reviews = [
    { reviewerName: "Sudhansu Sutar", reviewerTitle: "Proprietor, Sudhansu Arts", serviceType: "Google My Business Support", reviewText: "We are very happy with the GMB service from SocialMan. They helped us set up and manage our Google listing properly. Now, more guests can easily find our hotel on Google with all the right details.", image: "reviewer_images/sudhansu.jpg" },
    { reviewerName: "Santosh Panigrahi", reviewerTitle: "Owner, Fly High Social", serviceType: "Social Media Poster Design", reviewText: "SocialMan designs our social media posters regularly. The designs are clean, attractive, and match our hotel's branding. Our online presence looks much better now, and our followers are growing.", image: "reviewer_images/santosh.jpg" },
    { reviewerName: "Himansu Sekhar", reviewerTitle: "Utkal Graphics", serviceType: "Timely Service", reviewText: "We appreciate the timely work from the SocialMan team. Whether it's content creation delivery or account updates, they always complete the tasks on time. Very professional and helpful.", image: "reviewer_images/himansu.jpg" },
    { reviewerName: "Sangram Kishor", reviewerTitle: "Wise IT Solutions", serviceType: "Website Development", reviewText: "SocialMan developed our company website and we are very satisfied. The site is mobile-friendly, loads fast, and shows all the needed information clearly. It has helped us showcase our brands.", image: "reviewer_images/sangram.jpg" },
    { reviewerName: "Amit Sahu", reviewerTitle: "Manager, Hotel Sunbay", serviceType: "Complete Digital Support", reviewText: "SocialMan is a one-stop solution for all our digital needs, Google My Business setup & management, social media, website, and more. Their team understands our business well and supports us like a digital partner.", image: "reviewer_images/amit.jpg" },
  ];

  return (
    <section id="reviews" className="reviews section">
      <ScrollAnimation animation="fadeUp">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 section-title">
              <h2>Client Reviews</h2>
              <h1><span>Reviews</span> of our Clients</h1>
            </div>
            <div className="col-lg-6 d-flex justify-content-between align-items-center">
              <p className="w-75">We take pride in delivering exceptional services. <br />See what our clients say about their experience with us!</p>
              <a href="#" className="my-btn reviews-btn">View More</a>
            </div>
          </div>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animation="fadeUp" delay={0.1}>
        <div className="container">
          <Swiper modules={[FreeMode, Pagination, Navigation]} spaceBetween={30} slidesPerView={3}
            pagination={{ clickable: true }} navigation={true}
            breakpoints={{ 320: { slidesPerView: 1, spaceBetween: 10 }, 768: { slidesPerView: 2, spaceBetween: 20 }, 1024: { slidesPerView: 3, spaceBetween: 30 } }}
            className="mySwiper">
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <div className="review-item col-lg-">
                  {review.image && <img className="review-img" src={review.image} alt={review.reviewerName} />}
                  <div className="review-wrap">
                    <p><i className="bi bi-quote quote-icon-left"></i><span><b>{review.serviceType}</b> <br />{review.reviewText}</span><i className="bi bi-quote quote-icon-right"></i></p>
                    <hr />
                    <h3>{review.reviewerName}</h3>
                    <h4>{review.reviewerTitle}</h4>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default Reviews;
