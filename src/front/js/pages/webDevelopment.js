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
              <i class="fas fa-circle me-2" /> Web Development
            </h5>
            <h1 className="text-webdevelopment">
              We devise solutions to maximize
              <br /> your business efficiency.
            </h1>
            <div>
              <Link to="/projects" className="text-decoration-none"><button className="button-28 me-2">SEE PROJECTS</button></Link>
              <Link to="/contact" className="text-decoration-none"><button className="button-29 controller-p">
                ASK FOR QUOTE
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
                    Bluelight Tech helps businesses and organizations establish a strong online presence, improve their visibility and accessibility, and drive growth and revenue.

                    Our services include designing, developing, testing, and maintaining websites that meet the specific needs and requirements of clients.

                  </p>
                  <p className="mt-4 ubunto">
                    Be it custom Web applications development and SaaS
                    platforms, ecommerce website development or informative lead
                    generation sites, our value proposition, when it comes to
                    web development, is to build solutions by prioritizing the
                    context and needs of the end-users, ensuring meaningful
                    results.
                  </p>

                </MDBCol>
                <MDBCol className="d-flex mt-2 m-5" sm="12" md="4" lg="4">
                  <div className="">
                    <div className="box-chart">
                      <h6>
                        Management Systems

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
                        Web development

                        <br />
                      </h6>
                    </div>
                    <div className="box-charts-four">
                      <h6>
                        E-commerce Development


                      </h6>
                    </div>
                  </div>
                </MDBCol>
              </MDBRow>
            </div>
          </div>
          <div className="techWeuseBanner blue-gradient-background contact-section-padding">
            <div className="text-center">
              <h2 className="text-white fs-50 Orbitron">Why is Web Development Important?</h2>
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
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <Link to="/projects" className="text-decoration-none">
                  <div className="button-display-mobile">
                    <button className="button-28">SEE PROJECTS</button>
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
