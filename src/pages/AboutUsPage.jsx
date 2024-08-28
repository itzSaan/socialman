import React, {useEffect} from 'react'
import Team from '../sections/Team'

const cardStyle = { 'borderRadius': '30px' }

const AboutUsPage = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  }, [])
  return (
    <>
      <div className="page-title position-relative" data-aos="fade" style={{"backgroundImage": "url('/src/assets/img/hero-bg.jpg')"}}>
      <div className="container position-relative">
        <h1>About Us <br/></h1>        
      </div>
    </div>  

    <section id="about" className="about section">
      <div className="container section-title" data-aos="fade-up">
        <div className="row gap-4">
           <div className="col-lg-5 content">
            <h2>About Us</h2>
            <h1>
              <span>Introduction</span> To Best Digital Agency!
            </h1>
          </div>

          <div className="col-lg-6 ms-auto">
            <div className="row">
            <div className="col">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam explicabo expedita natus optio facere amet, deleniti nihil fuga! Adipisci, laboriosam.</div>
            <div className="col">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam explicabo expedita natus optio facere amet, deleniti nihil fuga! Adipisci, laboriosam.</div>
            </div>
          </div>

          <div className="row mt-4 gap-3 justify-content-between">
            <div style={cardStyle} className="col about-card shadow d-flex align-items-center gap-2 p-3">
                <span className="material-symbols-outlined fs-1 p-3 rounded bg-dark text-light rounded-pill">
                    currency_rupee
                    </span>
                <div>
                <h4 className='m-0'>Best Price Guaranteed</h4>
                <p className='small mb-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, aut.</p>
                </div>
            </div>
            <div style={cardStyle} className="col about-card shadow d-flex align-items-center gap-2  p-3">
                <span className="material-symbols-outlined fs-1 p-3 rounded bg-dark text-light rounded-pill">
                    query_stats
                    </span>
                <div>
                <h4 className='m-0'>Financial Analysis</h4>
                <p className='small mb-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, aut.</p>
                </div>
            </div>
            <div style={cardStyle} className="col about-card shadow d-flex align-items-center gap-2  p-3">
                <span className="material-symbols-outlined fs-1 p-3 rounded bg-dark text-light rounded-pill">
                    manage_accounts
                    </span>
                <div>
                <h4 className='m-0'>Professional Team</h4>
                <p className='small mb-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, aut.</p>
                </div>
            </div>
          </div>


        <div className="row" data-aos="fade-up">
        <img src="src/assets/img/about-img.png" alt="" />
      </div>

        </div>
        
      </div>
      

    </section>

    <Team />
    </>
  )
}

export default AboutUsPage