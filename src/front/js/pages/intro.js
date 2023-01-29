import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import logo from "../../img/Group3.png";
import { GoogleAnalyticsTracker } from "../component/googleAnalyticsTracker";

export const Intro = () => {
  const boxVarient3 = {
    hidden: {
      x: -20,
      opacity: 0,
      y: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.6,
      },
    },
  };
  const boxVarient4 = {
    hidden: {
      x: -20,
      opacity: 0,
      y: 50,
    },
    visible: {
      x: 0,
      opacity: 1,
      scale: [0, 0.5, 0.9, 1.2, 1.5],
      rotate: [0, 0, 360, 270, 0],
      transition: {
        delay: 0.6,
      },
    },
  };

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/home");
    }, 2500);
  }, []);

  return (
    <div className="bg-ligth ">
      <GoogleAnalyticsTracker />
      <motion.div
        className=""
        variants={boxVarient3}
        animate="visible"
        initial="hidden"
      >
        <h3 className="text-dark text-center pt-5">WELCOME TO BLUE LIGHT TECH</h3>
        <div className="d-flex justify-content-center align-items-center mt-5">
          <motion.div variants={boxVarient4} animate="visible" initial="hidden" className="mt-5">
            <img src={logo} className="intro-image"></img>
          </motion.div>
        </div>
      </motion.div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};
