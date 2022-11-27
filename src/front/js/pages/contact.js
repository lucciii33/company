import React, { useState, useEffect, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import emailjs from "@emailjs/browser";
import { InlineWidget } from "react-calendly";
import { PopupWidget } from "react-calendly";
import arrow from "../../img/arrow.png";

import { Context } from "../store/appContext";

export const ContactUs = () => {
  const { store, actions } = useContext(Context);
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    terms: false,
    phone: "",
    description: "",
  });

  const boxVarient = {
    hidden: {
      x: "100vh",
    },
    visible: {
      x: 0,
      duration: 2,
      // transition: {
      // 	delay: 0.3
      // }
    },
  };
  const handleChange = (e) => {
    if (e.target.name === "terms") {
      setFormData({ ...formData, [e.target.name]: !formData.terms });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };
  //   const form = useRef();
  //   const sendEmail = (e) => {
  //     e.preventDefault();

  //     emailjs
  //       .sendForm(
  //         "service_d70o4b5",
  //         "template_7xxg1xi",
  //         form.current,
  //         "HASNJCXly2tABuH0x"
  //       )
  //       .then(
  //         (result) => {
  //           console.log(result.text);
  //         },
  //         (error) => {
  //           console.log(error.text);
  //         }
  //       );

  //     form.current.reset();
  //   };

  return (
    <div className="contai bg-ligth">
      <div className="texts">
        <motion.div
          className="squaer1"
          initial={{ scale: 0 }}
          animate={{ rotate: 180, scale: 2, x: -100, y: 100 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        />
        <motion.div
          className="squaer"
          initial={{ scale: 3 }}
          animate={{ rotate: 180, scale: 1, x: 800, y: -10 }}
          transition={{
            type: "spring",
            stiffness: 220,
            damping: 20,
          }}
        />
        <h5 className="title-contact-1">MAKE YOUR PRODUCT REALLY MATTER</h5>
        <h2 className="title-contact-2">Free project quote</h2>
        <h6 className="title-contact-3">
          Fill out the enquiry form and we’ll get back to you as soon as
          possible.
        </h6>
      </div>

      {/* <form onSubmit={sendEmail} ref={form}>
        <div className="conta-form">
          <div>
            <div className="no-mobile">
              <input
                className="email"
                placeholder="Email address"
                type="text"
                name="email"
              ></input>
              <div className="d-flex mt-3">
                <input
                  className="name"
                  placeholder="Full Name"
                  type="text"
                  name="name"
                ></input>
                <input
                  className="phone"
                  placeholder="Phone"
                  type="text"
                  name="phone"
                ></input>
              </div>
              <div className="text-area">
                <input
                  className="mensaje mt-3"
                  placeholder="Tell us about your project/product"
                  type="text"
                  name="message"
                ></input>
              </div>
              <div className="mt-2">
                <input type="checkbox" className="checkbox-round"></input>
                <span>
                  I have read and accept the{" "}
                  <strong className="strong">Terms of use </strong>&{" "}
                  <strong className="strong">Privacy Policy</strong>
                </span>
              </div>
            </div>

            <motion.div
              className="responsive-contact-form"
              transition={{ type: "spring", stiffness: 130 }}
              variants={boxVarient}
              animate="visible"
              initial="hidden"
              whileHover={{
                boxShadow: "0px, 0px, 8px, rgba(255, 255, 255)",
                scale: 1.1,
                originX: 0,
              }}
            >
              <input
                placeholder="Write your email"
                className="input-responisve"
              ></input>
              <input
                placeholder="your name"
                className="input-responisve"
              ></input>
              <input
                placeholder="your phone"
                className="input-responisve"
              ></input>
              <input placeholder="message" className="input-responisve"></input>
              <input type="submit" value="Send" className="button-29 mt-2" />
            </motion.div>

            <div>
              <input
                type="submit"
                value="Send"
                className="button-29 mt-2 no-mobile"
              />
              <button className="button-29 mt-2">Lest talk<i className="far fa-paper-plane ms-1"></i></button>
            </div>
          </div>
          <motion.div
            className="second-box"
            transition={{ type: "spring", stiffness: 130 }}
            variants={boxVarient}
            animate="visible"
            initial="hidden"
            whileHover={{
              boxShadow: "0px, 0px, 8px, rgba(255, 255, 255)",
              scale: 1.1,
              originX: 0,
            }}
          >
            <h2 className="text-center p-box">Usertive Solutions</h2>
            <div>
              <div className="d-flex">
                <i className="far fa-envelope"></i>
                <p className="text-contact-box">ilutioncode@gmail.com</p>
              </div>
              <div className="d-flex">
                <i className="fas fa-map-marker-alt"></i>
                <p className="text-contact-box">Miami, United State</p>
              </div>
              <div className="d-flex">
                <i className="fas fa-mobile-alt"></i>
                <p className="text-contact-box">9864984455</p>
              </div>
            </div>
          </motion.div>
        </div>
      </form> */}
      <br />
      <br />

      <div className="text-center">
        <h2 className="text-gradient-small">Please book a meting here</h2>
        <p className="paragraph">and let us know what you want to build</p>
        <motion.img
          src={arrow}
          className="icon-image"
          whileHover={{
            boxShadow: "0px, 0px, 8px, rgba(255, 255, 255)",
            scale: 1.1,
            originX: 0,
          }}
        ></motion.img>
      </div>

      <div className="mt-2">
        <InlineWidget
          url="https://calendly.com/angelomaiele"
          styles={{
            height: "600px",
            boxShadow: "0px, 0px, 8px, rgba(255, 255, 255)",
          }}
        />
      </div>

      <div className="">
        <input
          className="email"
          placeholder="Email address"
          type="text"
          name="email"
          onChange={handleChange}
          value={formData.email}
        ></input>
        <div className="d-flex mt-3">
          <input
            className="name"
            placeholder="Full Name"
            type="text"
            name="fullName"
            onChange={handleChange}
            value={formData.fullName}
          ></input>
          <input
            className="phone"
            placeholder="Phone"
            type="text"
            name="phone"
            onChange={handleChange}
            value={formData.phone}
          ></input>
        </div>
        <div className="text-area">
          <input
            className="mensaje mt-3"
            placeholder="Tell us about your project/product"
            type="text"
            name="description"
            onChange={handleChange}
            value={formData.description}
          ></input>
        </div>
        <div className="mt-2">
          <input
            type="checkbox"
            className="checkbox-round"
            name="terms"
            onChange={handleChange}
            value={formData.terms}
          ></input>
          <span>
            I have read and accept the{" "}
            <strong className="strong">Terms of use </strong>&{" "}
            <strong className="strong">Privacy Policy</strong>
          </span>
        </div>
        <button
          onClick={() =>
            actions.createContactForm(
              formData.email,
              formData.phone,
              formData.terms,
              formData.fullName,
              formData.description
            )
          }
        >
          send me
        </button>
      </div>
    </div>
  );
};
