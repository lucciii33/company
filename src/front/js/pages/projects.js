import React, { useContext, useRef } from "react";
import { motion, useScroll, useInView } from "framer-motion";
import elana from "../../img/captureElana.png";
import { GoogleAnalyticsTracker } from "../component/googleAnalyticsTracker";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";
import { Context } from "../store/appContext";
import "../../styles/projects.css";

export const Projects = () => {
  const { store, actions } = useContext(Context);
  const ref = useRef(null);
  const ref2 = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isInView2 = useInView(ref2, { once: true });

  const boxVarient2 = {
    hidden: {
      x: -10,
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
            Over the last 2 years, we’ve delivered more than 500 projects to our
            clients worldwide.
            <br /> Have a look at some of the examples.
          </motion.h4>
        </div>
        <div className="d-flex flex-wrap">
          <div ref={ref} className="d-flex justify-content-between">
            <motion.div
              className="margin-left box-project"
              //   variants={boxVarient3}
              //   animate="visible"
              //   initial="hidden"
              style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            >
              <img src={elana} className="img-project1 ms-3"></img>
              <h3 className="paragraph ms-3">Lorem Ipsum</h3>
              <p className="description ms-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
              <button className="button-29 ms-3">see me!</button>
            </motion.div>
            <motion.div
              className="margin-left box-project"
              //   variants={boxVarient3}
              //   animate="visible"
              //   initial="hidden"
              style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            >
              <img
                src="https://i.pinimg.com/originals/e1/b8/79/e1b879128c55a9c38d8c6a5f57282b46.png"
                className="img-project ms-3"
              ></img>
              <h3 className="paragraph ms-3">Lorem Ipsum</h3>
              <p className="description ms-3">
                Loremn! ipsum dolor sit amet, consectetur adipiscing elit
              </p>
              <button className="button-29 ms-3">see me!</button>
            </motion.div>
          </div>
          <div ref={ref2} className="d-flex justify-content-between">
            <motion.div
              className="margin-left box-project"
              //   variants={boxVarient3}
              //   animate="visible"
              //   initial="hidden"
              style={{
                transform: isInView2 ? "none" : "translateX(-200px)",
                opacity: isInView2 ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            >
              <img
                src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/06cd2159578771.5a4c3e28ae18c.jpg"
                className="img-project ms-3"
              ></img>
              <h3 className="paragraph ms-3">Lorem Ipsum</h3>
              <p className="description ms-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
              <button className="button-29 ms-3">see me!</button>
            </motion.div>
            <motion.div
              className="margin-left box-project"
              //   variants={boxVarient3}
              //   animate="visible"
              //   initial="hidden"
              style={{
                transform: isInView2 ? "none" : "translateX(-200px)",
                opacity: isInView2 ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
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
