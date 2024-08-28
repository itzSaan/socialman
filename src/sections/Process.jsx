import React from 'react'
import './styles/Process.css'

const Process = () => {
  return (
    <section className="process" id="process">
    <div className="container">
        <div className="section-title text-center" data-aos="fade-up">
        <h2>Our Process</h2>
        <h1>
          <span>Process </span> We Follow!
        </h1>
        <p className="mt-4 mx-auto">
          Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in 
        </p>
        </div>
        <div className="row">
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay='100'>
                <div className="process-circle first mb-auto">
                    <h5>Research Project</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, saepe.</p>
                </div>
            </div>
            <div className="col-lg-4 mt-auto" data-aos="fade-up" data-aos-delay='200'>
                <div className="process-circle second mx-auto">
                    <h5>Evaluate Plan</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, saepe.</p>
                </div>
            </div>
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay='300'>
                <div className="process-circle third ms-auto mb-auto">
                    <h5>Best Results</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, saepe.</p>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Process