import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import pic1 from "../../img/group-people-working-website-template.jpg";
import { GoogleAnalyticsTracker } from "../component/googleAnalyticsTracker";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import react from "../../img/react.png";
import jslogo from "../../img/jslogo.png";
import nodejs from "../../img/nodejs.png";
import mongo from "../../img/mongo.png";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";
import "../../styles/home.css";

export const WebDevelopment = () => {
  const { store, actions } = useContext(Context);
  return (
    <>
      <Navbar />
      <GoogleAnalyticsTracker />
      <div>
        <div className="position-relative">
          <div>
            <img src={pic1} className="webDevelopment-image"></img>
          </div>
          <div className="position-absolute top-50 start-0 translate-middle-y mar-controller">
            <h5 className="title-webdevelopment border-down-web-development">
              <i class="fas fa-circle me-2" />  {store.language === "en" ? "Web Development" : "Desarollo Web"}
            </h5>
            <h1 className="text-webdevelopment">
              We devise solutions to maximize
              <br /> your business efficiency.
            </h1>
            <div>
              <Link to="/projects" className="text-decoration-none"><button className="button-28 me-2">{store.language === "en" ? "SEE PROJECTS" : "PROYECTOS"}</button></Link>
              <Link to="/contact" className="text-decoration-none"><button className="button-29 controller-p">
                {store.language === "en" ? "ASK FOR QUOTE" : "PEDIR UN PRESUPUESTO"}
              </button></Link>
            </div>
          </div>
        </div>
        <div className="wD-2banner ">
          <div className="d-flex justify-content-center">
            <div>
              <MDBRow className="webD-flex letters-top" sm="12" md="8" lg="8">
                <MDBCol className="mletter-5 ">
                  <h3 className="mt-2 Orbitron">
                    Your development partner.<br /> We stand for excellence!
                  </h3>
                  <p className="mt-4 ubunto">
                    {store.language === "en" ? "Bluelight Tech helps businesses and organizations establish a strong online presence, improve their visibility and accessibility, and drive growth and revenue. Our services include designing, developing, testing, and maintaining websites that meet the specific needs and requirements of clients." : "Bluelight Tech ayuda a empresas y organizaciones a establecer una sólida presencia en línea, mejorar su visibilidad y accesibilidad, y impulsar el crecimiento y los ingresos. Nuestros servicios incluyen el diseño, desarrollo, prueba y mantenimiento de sitios web que cumplen con las necesidades y requisitos específicos de los clientes."}

                  </p>
                  <p className="mt-4 ubunto">
                    {store.language === "en" ? "Be it custom Web applications development and SaaS platforms, ecommerce website development or informative leadgeneration sites, our value proposition, when it comes to web development, is to build solutions by prioritizing the context and needs of the end-users, ensuring meaningful results." : " Ya sea el desarrollo de aplicaciones web personalizadas y plataformas SaaS, el desarrollo de sitios web de comercio electrónico o sitios informativos para la generación de leads, nuestra propuesta de valor, en cuanto al desarrollo web, es construir soluciones priorizando el contexto y las necesidades de los usuarios finales, garantizando resultados significativos."}
                  </p>

                </MDBCol>
                <MDBCol className="d-flex mt-2 m-5" sm="12" md="4" lg="4">
                  <div className="">
                    <div className="box-chart">
                      <h6>
                        {store.language === "en" ? "Management Systems" : "Sistemas de Gestión"}
                        <br />
                      </h6>
                    </div>
                    <div className="box-charts-two">
                      <h6>
                        Software
                        <br />
                      </h6>
                    </div>
                  </div>
                  <div className="">
                    <div className="box-charts-three">
                      <h6 className=" my-auto">
                        {store.language === "en" ? "Web development" : "Desarollo web"}

                        <br />
                      </h6>
                    </div>
                    <div className="box-charts-four">
                      <h6>
                        {store.language === "en" ? "E-commerce Development" : "Tienda Online"}


                      </h6>
                    </div>
                  </div>
                </MDBCol>
              </MDBRow>
            </div>
          </div>
          <div className="techWeuseBanner blue-gradient-background contact-section-padding">
            <div className="text-center">
              <h2 className="text-white fs-50 Orbitron">{store.language === "en" ? "Why is Web Development Important?" : "¿Por qué es importante el Desarrollo Web?"}</h2>
            </div>
            <MDBRow className="mt-5">
              <MDBCol className="p-md-3 p-lg-5" sm="12" md="12" lg="6">
                <img
                  src="https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  className="image-web-development rounded"
                ></img>
              </MDBCol>
              <MDBCol className="my-auto py-5" sm="12" md="12" lg="6">
                <h3 className="text-white Orbitron text-size-controller">Creating an Online Presence</h3>
                {/* <h6 className="text-white">Lorem impsum text here</h6> */}
                <p className="pe-4 text-white ubunto">
                  In today's world whether you are working on a personal website
                  or making a platform for your buisness it is important to have
                  a place where people can view your work.
                </p>
                <p className="pe-4 text-white ubunto">
                  Web development is also important for online marketing, as it allows businesses to promote their products and services online, reach new audiences, and improve customer engagement. E-commerce: Developing e-comm
                </p>
                <Link to="/projects" className="text-decoration-none">
                  <div className="button-display-mobile">
                    <button className="button-28">{store.language === "en" ? "SEE PROJECTS" : "PROYECTOS"}</button>
                  </div>
                </Link>
              </MDBCol>
            </MDBRow>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
