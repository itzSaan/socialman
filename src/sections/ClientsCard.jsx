import React from "react";
import "./styles/ClientsCard.css";
import client1 from "../assets/img/clients/1.png";
import client2 from "../assets/img/clients/2.png";
import client3 from "../assets/img/clients/3.png";
import client4 from "../assets/img/clients/4.png";
import client5 from "../assets/img/clients/5.png";

function ClientsCard() {
  return (
    <div id="clients-card" className="clients-card">
      <div className="container" data-aos="fade-up">
        <div className="clients d-flex justify-content-between align-item-center">
          <div className="col-auo" data-aos="fade-up" data-aos-delay="100">
            <img src={client1} className="img-fluid" alt="Client-1" />
          </div>
          <div className="col-auo" data-aos="fade-up" data-aos-delay="150">
            <img src={client2} className="img-fluid" alt="Client-1" />
          </div>
          <div className="col-ato" data-aos="fade-up" data-aos-delay="200">
            <img src={client3} className="img-fluid" alt="Client-1" />
          </div>
          <div className="col-ato" data-aos="fade-up" data-aos-delay="250">
            <img src={client4} className="img-fluid" alt="Client-1" />
          </div>
          <div className="col-auo" data-aos="fade-up" data-aos-delay="300">
            <img src={client5} className="img-fluid" alt="Client-1" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientsCard;
