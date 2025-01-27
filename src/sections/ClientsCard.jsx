import React from "react";
import "./styles/ClientsCard.css";
import client1 from "../assets/img/clients/hotel-sunbay.png";
import client2 from "../assets/img/clients/sudhansu-arts.png";
import client3 from "../assets/img/clients/incredible-paradip.png";
import client4 from "../assets/img/clients/wisetech-light-logo.png";
import client5 from "../assets/img/clients/utkal-print.png";
import client6 from "../assets/img/clients/fly-high.png";

function ClientsCard() {
  return (
    <div id="clients-card" className="clients-card">
      <div className="container" data-aos="fade-up">
        <div className="clients row justify-content-center">
          <div className="col-lg-2 col-sm-4 col-4 d-flex align-items-center justify-content-center" data-aos="fade-up" data-aos-delay="100">
            <img src={client1} className="img-fluid" alt="Client-1" />
          </div>
          <div className="col-lg-2 col-sm-4 col-4 d-flex align-items-center justify-content-center" data-aos="fade-up" data-aos-delay="150">
            <img src={client2} className="img-fluid" alt="Client-1" />
          </div>
          <div className="col-lg-2 col-sm-4 col-4 d-flex align-items-center justify-content-center" data-aos="fade-up" data-aos-delay="200">
            <img src={client3} className="img-fluid" alt="Client-1" />
          </div>
          <div className="col-lg-2 col-sm-4 col-4 d-flex align-items-center justify-content-center" data-aos="fade-up" data-aos-delay="250">
            <img src={client6} className="img-fluid" alt="Client-1" />
          </div>
          <div className="col-lg-2 col-sm-4 col-4 d-flex align-items-center justify-content-center" data-aos="fade-up" data-aos-delay="250">
            <img src={client4} className="img-fluid" alt="Client-1" />
          </div>
          <div className="col-lg-2 col-sm-4 col-4 d-flex align-items-center justify-content-center" data-aos="fade-up" data-aos-delay="300">
            <img src={client5} className="img-fluid" alt="Client-1" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientsCard;
