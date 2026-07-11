import Image from "next/image";
import ScrollAnimation from "../../components/ScrollAnimation";

export const metadata = {
  title: "Portfolio",
  description:
    "Browse our portfolio showcasing SocialMan's successful projects in social media management, web development, digital marketing, and creative design for businesses in Bhubaneswar.",
  openGraph: {
    title: "Our Portfolio | SocialMan Digital Agency",
    description:
      "Browse our portfolio showcasing SocialMan's successful projects in social media management, web development, digital marketing, and creative design.",
  },
};

const portfolioData = [
  { id: 1, img: 'portfolio/p-1.jpg' },
  { id: 2, img: 'portfolio/p-1.jpg' },
  { id: 3, img: 'portfolio/p-1.jpg' },
  { id: 4, img: 'portfolio/p-1.jpg' },
  { id: 5, img: 'portfolio/p-1.jpg' },
  { id: 6, img: 'portfolio/p-1.jpg' },
];

const PortfolioPage = () => {
  return (
    <>
      <ScrollAnimation animation="fade">
        <div className="page-title position-relative" style={{ backgroundImage: `url(/assets/img/hero-bg.jpg)` }}>
          <div className="container position-relative">
            <h1>Portfolio List</h1>
          </div>
        </div>
      </ScrollAnimation>

      <section className="portfolio" id="portfolio">
        <ScrollAnimation animation="fadeUp" delay={0.1}>
          <div className="container">
            <div className="row gy-5">
              {portfolioData.map((data) => (
                <div className="col-lg-4 col-sm-6" key={data.id}>
                  <a href="">
                    <Image src={data.img} alt="" className="img-fluid" width={400} height={300} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </section>
    </>
  );
};

export default PortfolioPage;
