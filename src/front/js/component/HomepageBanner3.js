import React, { useContext } from "react";
import { Card } from "./card";
import design from "../../img/design.png";
import code from "../../img/code.png";
import webdesign from "../../img/webdesign.png";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import { Context } from "../store/appContext";


const HomepageBanner3 = ({ width }) => {
  const { store } = useContext(Context)
  return (
    <div className="bg-banner-2 homepage-banner-padding">
      <h2 className="text-center tech-text-blue fs-50 Orbitron">{store.language == "en" ? "Services" : "Servicios"}</h2>
      <MDBRow className="d-flex align-items-center justify-content-evenly mx-3">
        <MDBCol sm="12" md="12" lg="4">
          <Card
            title={store.language == "en" ? "Web Development" : "Dessarollo Web"}
            description={store.language == "en" ? "Our designers meticulously incorporate your instructions to design your website exactly as per your needs." : "Nuestros diseñadores incorporan meticulosamente sus instrucciones para diseñar su sitio web exactamente según sus necesidades."}
            img={<img src={design} className="logo-image"></img>}
            type={store.language == "en" ? "Let's Create" : "Creamos"}
            to="/webDevelopment"
          />
        </MDBCol>
        <MDBCol sm="12" md="12" lg="4">
          <Card
            title={store.language == "en" ? "Mobile Apps" : "Aplicación Móvil"}
            description={store.language == "en" ? "Digital marketing is flawed without web applications. In fact, experience tells us that websites are necessary to capture online, or perhaps global, market share." : "El marketing digital está incompleto sin aplicaciones web. De hecho, la experiencia nos dice que los sitios web son necesarios para capturar una cuota de mercado en línea, o quizás a nivel global."}
            img={<img src={webdesign} className="logo-image"></img>}
            type={store.language == "en" ? "Let's Design" : "Diseñamos"}
            to="/mobileApps"
          />
        </MDBCol>
        <MDBCol sm="12" md="12" lg="4">
          <Card
            title="Software"
            description={store.language == "en" ? "Web presence is necessary, for website allows brands opportunity to meet millions of web servers. In fact, business websites are crucial touch point of sale closure." : "La presencia en la web es necesaria, ya que el sitio web permite a las marcas tener la oportunidad de conectarse con millones de servidores web. De hecho, los sitios web comerciales son un punto de contacto crucial para el cierre de ventas."}
            img={<img src={code} className="logo-image"></img>}
            type={store.language == "en" ? "Let's Develop" : "Desarrollamos"}
            to="/webDevelopment"
          />
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default HomepageBanner3;
