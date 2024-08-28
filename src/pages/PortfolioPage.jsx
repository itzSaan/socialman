import React, {useEffect} from 'react'
import Subscribe from '../sections/Subscribe'

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

const PortfolioPage = () => {

    useEffect(() => {
        window.scrollTo(0,0)
      }, [])

  return (
    <>
    <div className="page-title position-relative" data-aos="fade" style={{"backgroundImage": "url('src/assets/img/hero-bg.jpg')"}}>
      <div className="container position-relative">
        <h1>Portfolio List<br/></h1>
      </div>
    </div>

    <section className="portfolio" id="portfolio">
        <div className="container">           
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

    <Subscribe />

    </>
  )
}

export default PortfolioPage