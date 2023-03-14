import React from "react";
import { Card } from "./card";
import design from "../../img/design.png";
import code from "../../img/code.png";
import webdesign from "../../img/webdesign.png";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";

const HomepageBanner3 = ({ width }) => {
  return (
    <div className="bg-banner-2 homepage-banner-padding">
      <h2 className="text-center tech-text-blue fs-50 Orbitron">Services</h2>
      <MDBRow className="d-flex align-items-center justify-content-evenly mx-3">
        <MDBCol sm="12" md="12" lg="4">
          <Card
            title="Web Development"
            description="Our designers meticulously incorporate your instructions to design your website exactly as per your needs.            "
            img={<img src={design} className="logo-image"></img>}
            type="Create"
            to="/webDevelopment"
          />
        </MDBCol>
        <MDBCol sm="12" md="12" lg="4">
          <Card
            title="Mobile Apps"
            description="Digital marketing is flawed without web applications. In fact, experience tells us that websites are necessary to capture online, or perhaps global, market share."
            img={<img src={webdesign} className="logo-image"></img>}
            type="Design"
            to="/mobileApps"
          />
        </MDBCol>
        <MDBCol sm="12" md="12" lg="4">
          <Card
            title="Sotfware"
            description="Web presence is necessary, for website allows brands opportunity to meet millions of web servers. In fact, business websites are crucial touch point of sale closure."
            img={<img src={code} className="logo-image"></img>}
            type="Develop"
            to="/webDevelopment"
          />
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default HomepageBanner3;
