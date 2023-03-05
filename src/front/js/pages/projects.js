import React, { useContext, useRef, useState } from "react";
import { motion, useScroll, useInView } from "framer-motion";
import elana from "../../img/elanaMockup.png";
import rest from "../../img/Line5.jpeg"
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
  const [text, setText] = useState("Kitchen System");
  const [textLong, setTextLong] = useState("BlueTable will allow you to track employees, manage inventory, organize tasks, control aspects of your restaurant, and streamline order handling. The system will provide tools to manage schedules, monitor attendance, reorder supplies, generate reports, visualize data, set pricing, adjust menus, and track sales. ");
  const [isClicked, setIsClicked] = useState(false);
  const [isAvailable, setIsAvailable] = useState(true);

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

  const handleClick = () => {
    setIsClicked(!isClicked);
    if (!isClicked) {
      setText("BlueMedical");
      setTextLong("BlueMedical is a comprehensive platform that enables healthcare providers to efficiently manage patient information and provide personalized care. Designed to provide a streamlined approach to patient care, making it easy for healthcare providers to access patient information in one place.")
    }
    else {
      setText("Kitchen System");
      setTextLong("BlueTable will allow you to track employees, manage inventory, organize tasks, control aspects of your restaurant, and streamline order handling. The system will provide tools to manage schedules, monitor attendance, reorder supplies, generate reports, visualize data, set pricing, adjust menus, and track sales. ")
    }


  };

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
                  <a className="button-29 ms-3" href="https://olimarbueso.com/" target="_blank">see me!</a>
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
                  <a className="button-29 ms-3" href="https://olimarbueso.com/" disabled={true} target="_blank">see me!</a>
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
                  <button className="button-29 ms-3" disabled={true}>see me!</button>
                </motion.div>
              </MDBCol>
            </MDBRow>

          </div>
        </div>





      </div>
      <div className="bg-dark products-banner">
        <div className="d-flex justify-content-center align-items-center mt-5 pb-5 pt-5">
          <h2 className="text-center fs-50 Orbitron text-white">New Product Soon</h2>
          <div class="box-products"></div>
          <div class="box-products-2"></div>
          <div class="box-product-origin px-3">
            <h2 className="pt-4 ">{text}</h2>
            <p>{textLong}</p>
            {isClicked === false && <span className="mb-2"><i className="fas fa-arrow-circle-right icon-projects ms-2" onClick={handleClick}></i></span>}
            {isClicked === true && <span className="mb-2"><i className="fas fa-arrow-circle-left icon-projects ms-2 " onClick={handleClick}></i></span>}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
