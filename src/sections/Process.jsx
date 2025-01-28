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
        Before we begin, we thoroughly understand your brand, goals, and audience through research and analysis. This helps us create a tailored strategy that aligns with your objectives for optimal results. 
        </p>
        </div>
        <div className="row">
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay='100'>
                <div className="process-circle first mb-auto">
                    <h5>Research Project</h5>
                    <p>We analyze trends and audience behavior to craft data-driven strategies.</p>
                </div>
            </div>
            <div className="col-lg-4 mt-auto" data-aos="fade-up" data-aos-delay='200'>
                <div className="process-circle second mx-auto">
                    <h5>Evaluate Plan</h5>
                    <p>We refine marketing strategies to maximize engagement and growth.</p>
                </div>
            </div>
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay='300'>
                <div className="process-circle third ms-auto mb-auto">
                    <h5>Best Results</h5>
                    <p>We deliver measurable success through proven techniques.</p>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Process