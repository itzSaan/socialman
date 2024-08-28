import React from 'react'
import './styles/Portfolio.css'

const Portfolio = () => {

    const portfolioData = [
        {
            id: 1,
            img: 'portfolio/p-1.jpg',
        },
        {
            id: 2,
            img: 'portfolio/p-1.jpg',
        },
        {
            id: 3,
            img: 'portfolio/p-1.jpg',
        },
        {
            id: 4,
            img: 'portfolio/p-1.jpg',
        },
        {
            id: 5,
            img: 'portfolio/p-1.jpg',
        },
        {
            id: 6,
            img: 'portfolio/p-1.jpg',
        },
    ]

  return (
    <section className="portfolio" id="portfolio">
        <div className="container">
            <div className="ro section-title text-center" data-aos="fade-up">
            <h2>Our Portfolio</h2>
            <h1>
              <span>Activities </span> We Completed!
            </h1>
            <p className="mt-4 mx-auto">
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in 
            </p>
            </div>
            <div className="row gy-5" data-aos="fade-up" data-aos-delay="100">
                {portfolioData.map((data) => (
                    <div className="col-lg-4 col-sm-6" key={data.id}>
                    <a href="">
                        <img src={data.img} className='img-fluid' alt="" />
                    </a>
                </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Portfolio