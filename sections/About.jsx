"use client";
import Link from "next/link";
import ScrollAnimation from "../components/ScrollAnimation";
import "./styles/About.css";

const About = () => {
  return (
    <section id="about" className="about section">
      <ScrollAnimation animation="fadeUp">
        <div className="container section-title">
          <div className="row gap-4">
            <div className="col-lg-6 ms-auto">
              <div className="row">
                <img src="/assets/img/about-img.webp" alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-5 content">
              <h2>About Us</h2>
              <h1><span>Introduction</span> To Best Digital Agency!</h1>
              <p className="mt-4">
                At SocialMan, we specialize in helping businesses thrive in the ever-evolving digital landscape. Our expert team provides innovative marketing strategies that boost your brand's online presence, engage your target audience, and deliver measurable growth.
              </p>
              <ul>
                <li><i className="bi bi-check2-circle"></i> <span>Expert in social media management, website development, and digital marketing.</span></li>
                <li><i className="bi bi-check2-circle"></i> <span>Tailored strategies to enhance your brand's online presence.</span></li>
                <li><i className="bi bi-check2-circle"></i> <span>Creative solutions that drive business growth and measurable results.</span></li>
              </ul>
              <Link href="/about" className="my-btn about-btn">More About Us</Link>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default About;
