import React, { useState, useEffect, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import emailjs from "@emailjs/browser";
import { InlineWidget } from "react-calendly";
import { PopupWidget } from "react-calendly";
import arrow from "../../img/arrow.png";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";

import { Context } from "../store/appContext";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";

export const ContactUs = () => {



  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  };

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });


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
    <>
      <Navbar />
      <div className="contai bg-ligth">
        <div className="contact-section-padding">
          <div className="texts pb-5">
            {/* <motion.div
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
          /> */}
            <h5 className="title-contact-1 text-center">
              MAKE YOUR PRODUCT REALLY MATTER
            </h5>
            <h2 className="title-contact-2 text-center fs-50">Free project quote</h2>
            <h6 className="title-contact-3 text-center ubunto">
              Fill out the inquiry form and we’ll get back to you as soon as
              possible.
            </h6>
          </div>

          <div className="conta-form">
            <MDBRow>
              <MDBCol
                className="d-flex justify-content-center mb-5"
                sm="12"
                md="12"
                lg="6"
              >
                <div>
                  <input
                    className="email w-100 ubunto"
                    placeholder="Email address"
                    type="text"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                  ></input>
                  <div className="d-flex mt-3">
                    <input
                      className="name w-100 ubunto"
                      placeholder="Full Name"
                      type="text"
                      name="fullName"
                      onChange={handleChange}
                      value={formData.fullName}
                    ></input>
                    <input
                      className="phone w-100 ubunto"
                      placeholder="Phone"
                      type="text"
                      name="phone"
                      onChange={handleChange}
                      value={formData.phone}
                    ></input>
                  </div>
                  <div className="text-area">
                    <textarea
                      className="mensaje mt-3 w-100 contact-text-area p-2 ubunto"
                      placeholder="Tell us about your project/product"
                      type="text"
                      name="description"
                      onChange={handleChange}
                      value={formData.description}
                    ></textarea>
                  </div>
                  <div className="mt-2">
                    <input
                      type="checkbox"
                      className="checkbox-round"
                      name="terms"
                      onChange={handleChange}
                      // value={formData.terms}
                      checked={formData.terms}
                    ></input>
                    <span>
                      I have read and accept the{" "}
                      <strong className="strong">Terms of use </strong>&{" "}
                      <strong className="strong">Privacy Policy</strong>
                    </span>
                  </div>
                  <div className="contact-button-box">
                    <button
                      className="mt-3 button-29"
                      onClick={() => {
                        if (
                          formData.email != "" ||
                          formData.phone != "" ||
                          formData.terms != false ||
                          formData.fullName != "" ||
                          formData.description != ""
                        ) {
                          actions.createContactForm(
                            formData.email,
                            formData.phone,
                            formData.terms,
                            formData.fullName,
                            formData.description
                          );
                          setFormData({
                            email: "",
                            fullName: "",
                            terms: !formData,
                            phone: "",
                            description: "",
                          });
                        }
                      }}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </MDBCol>
              <MDBCol
                className="d-flex justify-content-center"
                sm="12"
                md="12"
                lg="6"
              >
                <motion.div
                  className="second-box p-3"
                  transition={{ type: "spring", stiffness: 130 }}
                  variants={boxVarient}
                  animate="visible"
                  initial="hidden"
                  whileHover={{
                    boxShadow: "0px, 0px, 8px, rgba(255, 255, 255)",
                    scale: 1.1,
                  }}
                >
                  <h2 className="text-center p-box">Bluelight Tech</h2>
                  <div>
                    <div className="d-flex">
                      <i className="far fa-envelope"></i>
                      <p className="text-contact-box ubunto">
                        bluelighttech22@gmail.com
                      </p>
                    </div>
                    <div className="d-flex">
                      <i className="fas fa-map-marker-alt"></i>
                      <p className="text-contact-box ubunto">Miami, United States</p>
                    </div>
                    <div className="d-flex">
                      <i className="fas fa-mobile-alt icon-white me-3"></i>
                      <p className="text-contact-box ubunto">(646) 257-0133</p>
                    </div>
                  </div>
                </motion.div>
              </MDBCol>
            </MDBRow>
          </div>
        </div>

        <div className="blue-gradient-background contact-section-padding">
          <div className="text-center">
            <h2 className="text-gradient-small m-0">
              Please book a meeting here
            </h2>
            <p className="paragraph text-white ubunto">
              Let us know what you want to build and we can help
            </p>
            <motion.img
              src={arrow}
              className="icon-image"
              whileHover={{
                boxShadow: "0px, 0px, 8px, rgba(255, 255, 255)",
                scale: 1.1,
              }}
            ></motion.img>
          </div>

          <div className="mt-2">
            <InlineWidget
              url={windowDimensions.width > 700 ? "https://calendly.com/bluelighttech/" : "https://calendly.com/bluelighttech/meeting"}
              styles={{
                height: "650px",
                boxShadow: "0px, 0px, 8px, rgba(255, 255, 255)",
              }}
            />
          </div>
        </div>

        {/* <div className="">
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
            // value={formData.terms}
            checked={formData.terms}
          ></input>
          <span>
            I have read and accept the{" "}
            <strong className="strong">Terms of use </strong>&{" "}
            <strong className="strong">Privacy Policy</strong>
          </span>
        </div>
        <button
          onClick={() => {
            if (
              formData.email != "" ||
              formData.phone != "" ||
              formData.terms != false ||
              formData.fullName != "" ||
              formData.description != ""
            ) {
              actions.createContactForm(
                formData.email,
                formData.phone,
                formData.terms,
                formData.fullName,
                formData.description
              );
              setFormData({
                email: "",
                fullName: "",
                terms: !formData,
                phone: "",
                description: "",
              });
            }
          }}
        >
          send me
        </button>
      </div> */}
      </div>

      <Footer />
    </>
  );
};
