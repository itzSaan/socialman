import React from "react";
import "./styles/Team.css";

const Team = () => {
  const teamData = [
    {
      name: "Sony Madison",
      degn: "CEO, Director",
      img: "team/team-1.jpg",
    },
    {
      name: "Harry Warth",
      degn: "Head Manager",
      img: "team/team-2.jpg",
    },
    {
      name: "Jenny Hobb",
      degn: "Branch Manager",
      img: "team/team-3.jpg",
    },
    {
      name: "Johny Smith",
      degn: "Supervisor",
      img: "team/team-4.jpg",
    },
  ];
  return (
    <section className="team" id="team">
      <div className="container">
        <div className="ro section-title text-center" data-aos="fade-up">
          <h2>Our team</h2>
          <h1>
            <span>Team </span> Members
          </h1>
          <p className="mt-4 mx-auto">
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in
          </p>
        </div>
        <div className="row gy-4 gx-4" data-aos="fade-up">
          {teamData.map((data, id) => (
            <div className="col-lg-3 col-xs-6" key={id}>
              <div href="" className="streched-link">
                <img src={data.img} className="img-fluid" alt="" />
                <div className="team-card-content">
                  <h4 className="team-title">{data.name}</h4>
                  <p className="team-text">{data.degn}</p>
                </div>
                <div className="social-links d-flex mt-4">
                  <a href="">
                    <i className="bi bi-twitter-x"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
