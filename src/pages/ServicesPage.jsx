import  {useEffect} from 'react'
import Process from '../sections/Process'
import heroBg from '../assets/img/hero-bg.jpg'

const services = [
    {
        icon: 'monitoring',
        name: 'Social Media Management',
    },
    {
        icon: 'edit_square',
        name: 'Content Creation',
    },
    {
        icon: 'campaign',
        name: 'Influence Marketing',
    },
    {
        icon: 'query_stats',
        name: 'Socail Media Marketing & SEO',
    },
    {
        icon: 'developer_mode',
        name: 'Website Development & Design',
    },
    {
        icon: 'draw',
        name: 'Branding & Graphic Design',
    },
    {
        icon: 'analytics',
        name: 'Analysis & Reporting',
    },
    {
        icon: 'phone_android',
        name: 'Digital Solutions',
    },
]

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  }, [])
  return (
    <>
    <div className="page-title position-relative" data-aos="fade" style={{"backgroundImage": `url(${heroBg})`}}>
      <div className="container position-relative">
        <h1>Services<br/></h1>
      </div>
    </div>

    <section id="services" className="services section">
      <div className="container section-title" data-aos="fade-up">
        <div className="row gy-4">
            {services.map((service, id) => (
                <div className="col-lg-3" key={id} data-aos="fade-up" data-aos-delay={`${(id+1)*100}`}>
                <div className="card-item">
                <span className="material-symbols-outlined">{service.icon}</span>
                <h4>
                    <a href="" className="stretched-link">
                    {service.name}
                    </a>
                </h4>
                </div>
            </div>
            ))}
        </div>
      </div>

      {/* card container */}
      <div className="container appointment-card" data-aos="fade-up">
        <div className="row gy-3 align-items-center">
          <div className="col-lg-4 col-md-4 d-flex align-items-center gap-3 md-border-end">
            <span className="material-symbols-outlined fs-2 p-3 border border-2 rounded-pill">phone_in_talk</span>
            <div className="appointment-contact">
              <p className="m-0 text-uppercase">Get a Free Consultation</p>
              <h4 className="mb-0">+919090814214</h4>
            </div>
          </div>
          <div className="col-lg-5 col-sm-12 me-auto">
            <p className="">
            Have questions? Call us now for a free consultation and start enhancing your online presence today!
            </p>
          </div>
          <div className="col-auto">
            <a href="#contact" className="m-auto my-btn appointment-btn ">
              Make Appointment
            </a>
            </div>
        </div>
      </div>
      {/* end of card container */}
    </section>

    <Process />



    </>
  )
}

export default ServicesPage