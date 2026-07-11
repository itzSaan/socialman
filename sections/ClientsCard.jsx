"use client";
import ScrollAnimation from "../components/ScrollAnimation";
import "./styles/ClientsCard.css";

function ClientsCard() {
  return (
    <div id="clients-card" className="clients-card">
      <ScrollAnimation animation="fadeUp">
        <div className="container">
          <div className="clients row justify-content-center">
            <ScrollAnimation animation="fadeUp" delay={0.1}>
              <div className="col-lg-2 col-sm-4 col-4 d-flex align-items-center justify-content-center">
                <img src="/assets/img/clients/hotel-sunbay.png" className="img-fluid" alt="Client-1" />
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fadeUp" delay={0.15}>
              <div className="col-lg-2 col-sm-4 col-4 d-flex align-items-center justify-content-center">
                <img src="/assets/img/clients/sudhansu-arts.png" className="img-fluid" alt="Client-1" />
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fadeUp" delay={0.2}>
              <div className="col-lg-2 col-sm-4 col-4 d-flex align-items-center justify-content-center">
                <img src="/assets/img/clients/incredible-paradip.png" className="img-fluid" alt="Client-1" />
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fadeUp" delay={0.25}>
              <div className="col-lg-2 col-sm-4 col-4 d-flex align-items-center justify-content-center">
                <img src="/assets/img/clients/fly-high.png" className="img-fluid" alt="Client-1" />
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fadeUp" delay={0.25}>
              <div className="col-lg-2 col-sm-4 col-4 d-flex align-items-center justify-content-center">
                <img src="/assets/img/clients/wisetech-light-logo.png" className="img-fluid" alt="Client-1" />
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fadeUp" delay={0.3}>
              <div className="col-lg-2 col-sm-4 col-4 d-flex align-items-center justify-content-center">
                <img src="/assets/img/clients/utkal-print.png" className="img-fluid" alt="Client-1" />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
}

export default ClientsCard;
