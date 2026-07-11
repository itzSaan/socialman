import ScrollAnimation from "../../components/ScrollAnimation";
import Process from "../../sections/Process";

export const metadata = {
  title: "Services",
  description:
    "Explore SocialMan's comprehensive digital services including social media management, content creation, website development, digital marketing, SEO, branding, and graphic design.",
  openGraph: {
    title: "Our Services | SocialMan Digital Agency",
    description:
      "Explore SocialMan's comprehensive digital services including social media management, content creation, website development, digital marketing, SEO, branding, and graphic design.",
  },
};

const services = [
  { icon: 'monitoring', name: 'Social Media Management' },
  { icon: 'edit_square', name: 'Content Creation' },
  { icon: 'campaign', name: 'Influence Marketing' },
  { icon: 'query_stats', name: 'Social Media Marketing & SEO' },
  { icon: 'developer_mode', name: 'Website Development & Design' },
  { icon: 'draw', name: 'Branding & Graphic Design' },
  { icon: 'analytics', name: 'Analysis & Reporting' },
  { icon: 'phone_android', name: 'Digital Solutions' },
];

const ServicesPage = () => {
  return (
    <>
      <ScrollAnimation animation="fade">
        <div className="page-title position-relative" style={{ backgroundImage: `url(/assets/img/hero-bg.jpg)` }}>
          <div className="container position-relative">
            <h1>Services</h1>
          </div>
        </div>
      </ScrollAnimation>

      <section id="services" className="services section">
        <ScrollAnimation animation="fadeUp">
          <div className="container section-title">
            <div className="row gy-4">
              {services.map((service, id) => (
                <ScrollAnimation animation="fadeUp" delay={(id + 1) * 0.1} key={id}>
                  <div className="col-lg-3">
                    <div className="card-item">
                      <span className="material-symbols-outlined">{service.icon}</span>
                      <h4><a href="" className="stretched-link">{service.name}</a></h4>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animation="fadeUp" delay={0.8}>
          <div className="container appointment-card">
            <div className="row gy-3 align-items-center">
              <div className="col-lg-4 col-md-4 d-flex align-items-center gap-3 md-border-end">
                <span className="material-symbols-outlined fs-2 p-3 border border-2 rounded-pill">phone_in_talk</span>
                <div className="appointment-contact">
                  <p className="m-0 text-uppercase">Get a Free Consultation</p>
                  <h4 className="mb-0">+919090814214</h4>
                </div>
              </div>
              <div className="col-lg-5 col-sm-12 me-auto">
                <p>Have questions? Call us now for a free consultation and start enhancing your online presence today!</p>
              </div>
              <div className="col-auto">
                <a href="#contact" className="m-auto my-btn appointment-btn">Make Appointment</a>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </section>

      <Process />
    </>
  );
};

export default ServicesPage;
