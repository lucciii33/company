import React, { useContext, useRef } from "react";
import { motion, useScroll, useInView } from "framer-motion";
import elana from "../../img/elanaMockup.png";
import rest from "../../img/restaurantProject.png"
import olimar from "../../img/olimar.png"
import { GoogleAnalyticsTracker } from "../component/googleAnalyticsTracker";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";
import { Context } from "../store/appContext";
import "../../styles/projects.css";
import { MDBCol, MDBRow } from 'mdb-react-ui-kit';

export const Projects = () => {
  const { store, actions } = useContext(Context);
  const ref = useRef(null);
  const ref2 = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isInView2 = useInView(ref2, { once: true });

  const boxVarient2 = {
    hidden: {
      x: 0,
      opacity: 0,
      y: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.3,
      },
    },
  };
  //   const boxVarient3 = {
  //     hidden: {
  //       x: -10,
  //       opacity: 0,
  //       y: 0,
  //     },
  //     visible: {
  //       x: 0,
  //       opacity: 1,
  //       transition: {
  //         delay: 0.5,
  //       },
  //     },
  //   };
  //   const boxVarient4 = {
  //     hidden: {
  //       x: 10,
  //       opacity: 0,
  //       y: 0,
  //     },
  //     visible: {
  //       x: 0,
  //       opacity: 1,
  //       transition: {
  //         delay: 0.6,
  //       },
  //     },
  //   };

  return (
    <>
      <Navbar />
      <div className="project-container banner-padding">
        <GoogleAnalyticsTracker />
        <div className="text-center">
          <motion.h2
            className="text-gradient2 p-3"
            variants={boxVarient2}
            animate="visible"
            initial="hidden"
          >
            What we’re proud of
          </motion.h2>
          <motion.h4
            className="paragraph mb-4 p-3"
            variants={boxVarient2}
            animate="visible"
            initial="hidden"
          >
            Over the time, we have served various industries to help them achieve their goals, here is a sneak peak of our recent projects.
          </motion.h4>
        </div>
        <div className="d-flex flex-wrap justify-content-center">
          <div>
            <MDBRow ref={ref} className="d-flex justify-content-between ">
              <MDBCol md="6" lg="6" sm="12">
                <motion.div
                  className=" box-project "
                //   variants={boxVarient3}
                //   animate="visible"
                //   initial="hidden"
                // style={{
                //   transform: isInView ? "none" : "translateX(-200px)",
                //   opacity: isInView ? 1 : 0,
                //   transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                // }}
                >
                  <img src={elana} className="img-project1 ms-3"></img>
                  <h3 className="paragraph ms-3">ELANA PELVIC CARE</h3>
                  <p className="description ms-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </p>
                  <a className="button-29 ms-3" href="https://elana.health" target="_blank">see me!</a>
                </motion.div>
              </MDBCol>
              <MDBCol md="6" lg="6" sm="12">
                <motion.div
                  className=" box-project"
                //   variants={boxVarient3}
                //   animate="visible"
                //   initial="hidden"
                // style={{
                //   transform: isInView ? "none" : "translateX(-200px)",
                //   opacity: isInView ? 1 : 0,
                //   transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                // }}
                >
                  <img
                    src={olimar}
                    className="img-project1 ms-3"
                  ></img>
                  <h3 className="paragraph ms-3">Olimar Bueso</h3>
                  <p className="description ms-3">
                    blog web page developed for a therapist including features like biography, services, contact form and scheduling.
                  </p>
                  <button className="button-29 ms-3">see me!</button>
                </motion.div>
              </MDBCol>
            </MDBRow>

            <MDBRow ref={ref2} className="d-flex justify-content-between">
              <MDBCol md="6" lg="6" sm="12">
                <motion.div
                  className=" box-project col-sm-12"
                //   variants={boxVarient3}
                //   animate="visible"
                //   initial="hidden"
                // style={{
                //   transform: isInView2 ? "none" : "translateX(-50px)",
                //   opacity: isInView2 ? 1 : 0,
                //   transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                // }}
                >
                  <img
                    src={rest}
                    className="img-project1 ms-3"
                  ></img>
                  <h3 className="paragraph ms-3">Lorem Ipsum</h3>
                  <p className="description ms-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </p>
                  <a className="button-29 ms-3" href="https://olimarbueso.com/" target="_blank">see me!</a>
                </motion.div>
              </MDBCol>
              <MDBCol md="6" lg="6" sm="12">
                <motion.div
                  className=" box-project"
                //   variants={boxVarient3}
                //   animate="visible"
                //   initial="hidden"
                // style={{
                //   transform: isInView2 ? "none" : "translateX(-200px)",
                //   opacity: isInView2 ? 1 : 0,
                //   transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                // }}
                >
                  <img
                    src="https://i.pinimg.com/736x/3a/81/0f/3a810f0b7ec105cff334c412d9c9ed45.jpg"
                    className="img-project ms-3"
                  ></img>
                  <h3 className="paragraph ms-3">Lorem Ipsum</h3>
                  <p className="description ms-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </p>
                  <button className="button-29 ms-3">see me!</button>
                </motion.div>
              </MDBCol>
            </MDBRow>

          </div>
        </div>





      </div>
      <div className="bg-dark products-banner">
        <div className="d-flex justify-content-center align-items-center mt-5 pb-5 pt-5">
          <h1 className="text-center fs-50 Orbitron text-white">New Product Soon</h1>
          <div class="box-products"></div>
          <div class="box-products-2"></div>
          <div class="box-product-origin px-3">
            <h2 className="pt-4 ">Kitchen System</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <a>Click here</a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
