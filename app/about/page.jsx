import ScrollAnimation from "../../components/ScrollAnimation";
import Image from "next/image";

const cardStyle = { borderRadius: "30px" };

const AboutUsPage = () => {
  return (
    <>
      <ScrollAnimation animation="fade">
        <div
          className="page-title position-relative"
          style={{ backgroundImage: `url(/assets/img/hero-bg.jpg)` }}
        >
          <div className="container position-relative">
            <h1>About Us</h1>
          </div>
        </div>
      </ScrollAnimation>

      <section id="about" className="about section">
        <ScrollAnimation animation="fadeUp">
          <div className="container section-title">
            <div className="row gap-4">
              <div className="col-lg-5 content">
                <h2>About Us</h2>
                <h1><span>Introduction</span> To Best Digital Agency!</h1>
              </div>
              <div className="col-lg-6 ms-auto">
                <div className="row">
                  <div className="col">
                    Our expert team provides innovative marketing strategies that boost your brand's online presence, engage your target audience, and deliver measurable growth.
                  </div>
                  <div className="col">
                    With a strong focus on creativity and data-driven insights, we offer a wide range of services, including social media management, SEO, paid advertising, and brand development.
                  </div>
                </div>
              </div>
              <div className="row mt-4 gap-3 justify-content-between">
                <div style={cardStyle} className="col about-card shadow d-flex align-items-center gap-2 p-3">
                  <span className="material-symbols-outlined fs-1 p-3 rounded bg-dark text-light rounded-pill">currency_rupee</span>
                  <div>
                    <h4 className="m-0">Best Price Guaranteed</h4>
                    <p className="small mb-0">We offer the best value for your digital solutions, ensuring top-quality services at unbeatable prices.</p>
                  </div>
                </div>
                <div style={cardStyle} className="col about-card shadow d-flex align-items-center gap-2 p-3">
                  <span className="material-symbols-outlined fs-1 p-3 rounded bg-dark text-light rounded-pill">query_stats</span>
                  <div>
                    <h4 className="m-0">Financial Analysis</h4>
                    <p className="small mb-0">Our expert financial analysis helps businesses optimize their budgets and maximize returns.</p>
                  </div>
                </div>
                <div style={cardStyle} className="col about-card shadow d-flex align-items-center gap-2 p-3">
                  <span className="material-symbols-outlined fs-1 p-3 rounded bg-dark text-light rounded-pill">manage_accounts</span>
                  <div>
                    <h4 className="m-0">Professional Team</h4>
                    <p className="small mb-0">Our skilled and experienced team delivers exceptional results with dedication and creativity.</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <Image src="/assets/img/about-img.png" alt="About SocialMan" width={800} height={600} />
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </section>
    </>
  );
};

export default AboutUsPage;
