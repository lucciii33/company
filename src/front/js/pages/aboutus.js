import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import tech from "../../img/tech.jpg";
import tech2 from "../../img/tech2.jpg";
import { Context } from "../store/appContext";
import OurVision from "../component/OurVision";
import Locations from "../component/Locations";
import { GoogleAnalyticsTracker } from "../component/googleAnalyticsTracker";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";

export const Aboutus = () => {
  const { store, actions } = useContext(Context);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [didUserScrollDown, setDidUserScrollDown] = useState(false);
  //function below constantly updates scrollPosition with the pageYOffset. Starts at 0, and increases as
  //the user scrolls down
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    //As soon as the user moves and the position is no longer 0, the second hook is set to true which
    //triggers the toast
    position != 0 ? setDidUserScrollDown(true) : null;
  };

  //adds the event listener on initial render and cleans it up when finished.
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toastStyles = {
    position: "fixed",
    bottom: "3%",
    right: "3%",
    zIndex: "2",
  };

  const boxVarient = {
    hidden: {
      x: "-100vh",
      y: 65,
    },
    visible: {
      x: 0,
      duration: 2,
      // transition: {
      // 	delay: 0.3
      // }
    },
  };

  const boxVarient2 = {
    hidden: {
      x: -10,
      opacity: 0,
      y: 65,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.9,
      },
    },
  };

  const boxVarient3 = {
    hidden: {
      x: -10,
      opacity: 0,
      y: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 1.1,
      },
    },
  };
  return (

    <>
      <Navbar />
      <div className="contai bg-ligth px-1">
        <GoogleAnalyticsTracker />
        <div>
          <div
            className={didUserScrollDown ? "toast show" : "toast hide"}
            style={toastStyles}
            n
          >
            <div className="toast-header" style={{ backgroundColor: "#5c58b6" }}>
              <strong className="me-auto" style={{ color: "black" }}>
                New Here?
              </strong>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="toast"
              ></button>
            </div>
            <div
              className="toast-body "
              style={{ backgroundColor: "ghostwhite" }}
            >
              <p>
                Want 20% off?{" "}
                <Link to="/tutorial" className=".active">
                  click here
                </Link>
                !
              </p>
            </div>
          </div>

          <div className="text-center">
            {/* <motion.h5
            className="ourvision"
            animate={{
              y: 25,
              opacity: 1,
            }}
            initial={{
              opacity: 0.6,
            }}
            transition={{ type: "spring", stiffness: 130 }}
          >
            OUR VISION
          </motion.h5> */}
            <motion.h2
              className="text-gradient"
              animate={{
                y: 55,
                opacity: 1,
              }}
              initial={{
                opacity: 0.6,
              }}
              transition={{ type: "spring", stiffness: 130 }}
            >
              Getting the most out <br className="no-phone-display" /> of your web presence
            </motion.h2>
            <motion.h4
              className="paragraph ubunto"
              transition={{ type: "spring", stiffness: 130 }}
              variants={boxVarient}
              animate="visible"
              initial="hidden"
            >
              We’re a unique combination of a software house and interactive
              agency,
              <br className="no-phone-display" />
              creating custom web solutions custom-fit to support the growth of
              modern startups.
            </motion.h4>
            {/* <motion.p
            className="paragraph"
            variants={boxVarient2}
            animate="visible"
            initial="hidden"
          >
            With top-notch technical foundations, unique design, and engaging
            content,
            <br /> we build smooth customer journeys with a proven track record
            of skyrocketing conversion rates.
          </motion.p> */}
            <motion.div
              className="p-image"
              variants={boxVarient3}
              animate="visible"
              initial="hidden"
            >
              <img src={tech} className="tech-image"></img>
              <img src={tech2} className="tech2-image"></img>
              <h3 className="text-gradient-2 mt-4">
                We believe that effectiveness <br className="no-phone-display" /> is the common characteristic
                of <br className="no-phone-display" /> all great products
              </h3>
              <p className="paragraph ubunto">
                That’s why you can expect us to put the highest emphasis on
                <br className="no-phone-display" /> seamless UX, high performance, scalability, and
                accessibility in the solutions we deliver.
              </p>
            </motion.div>
          </div>
          <OurVision />
        </div>
        <Locations />

      </div>
      <Footer />
    </>



  );
};
