import React from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./styles/Goal.css";
import roundImg from "../assets/img/rounded-dots.svg"

const Goal = () => {

    const goalData = [
        {
            gName: 'Marketing',
            gText: 'We craft impactful digital marketing strategies that boost engagement and brand visibility.',
            gPercentage: 95,
        },
        {
            gName: 'Solution',
            gText: 'Our tailored solutions solve business challenges with effective, scalable results.',
            gPercentage: 85,
        },
        {
            gName: 'Success',
            gText: 'With a proven track record, we consistently deliver high success rates for business growth.',
            gPercentage: 90,
        }
    ]

    const GoalCard = ({data}) => {
        return (
            <div
                className="text-center"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="card-item">
                  <CircularProgressbar
                    strokeWidth={2}
                    value={data.gPercentage}
                    text={`${data.gPercentage}%`}
                    styles={
                        buildStyles({
                        rotation: 0.25,
                        textSize: '24px',
                        textWeight: 700,
                        pathTransitionDuration: 0.5,
                        pathColor: '#fff',
                        textColor: '#fff',
                        trailColor: '#aaa',
                    })}
                  />
                  <h4 className="">
                    <a href="" className="stretched-link">
                      {data.gName}
                    </a>
                  </h4>
                  <p>{data.gText}</p>
                </div>
              </div>
        )
    }

  return (
    <section id="goal" className="goal">
      <div className="container" data-aos="fade-up">
        <div className="row gy-4">
          <div className="col-lg-6  section-title h-100 text-center">
            <div className="circle">
            <h2>Our Goal</h2>
            <h1>
              <span>Mission </span> We Aim for You!
            </h1>
            <p className="mt-4">
            We aim to be at the forefront of digital innovation, consistently adapting to the evolving needs of businesses and empowering them to succeed in the dynamic online world.
            </p>
            </div>
          </div>

          <div className="col-lg-6 my-auto">
            <div className="d-flex justify-content-between align-items-center gap-4">
              {goalData.map((data, id) =>  <GoalCard data={data} key={id} /> )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Goal;
