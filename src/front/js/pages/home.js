import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import main1 from "../../img/main1.png";
import elana from "../../img/Logo.png";
import elana1 from "../../img/figma.png";
import elana2 from "../../img/elana.png";
import "../../styles/home.css";
import Chatboot from "../component/Chatboot";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ProcessBanner from "../component/ProcessBanner";
import CallToActionHome from "../component/CallToActionHome";
import HomepageBanner2 from "../component/HomepageBanner2";
import HomepageBanner3 from "../component/HomepageBanner3";
import { GoogleAnalyticsTracker } from "../component/googleAnalyticsTracker";

export const Home = () => {
  const { store, actions } = useContext(Context);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

  useEffect(() => {
    handleShow();
  }, []);

  // useEffect(() => {
  //   handleShow();
  // }, []);
  const renderSlides = () =>
    [
      {
        project: "elana pelvic care",
        duration: "1 year",
      },
      {
        project: "doc page",
        duration: "2 year",
      },
      {
        project: "lorem",
        duration: "2 moth",
      },
      {},
    ].map((num) => (
      <div>
        <div className="carouselController">
          <div className="info-project-home">
            <img
              src="https://images.vexels.com/media/users/3/210770/preview2/251338a9d465357850c03418dafd39f4-mobile-app-mockup-design.jpg"
              className="img-project-1"
            ></img>
          </div>
          <div className="my-auto">
            <div className="border-name-project">
              <h5>{num.project}</h5>
            </div>

            <h2>title test</h2>
            <p>
              Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div>
              <button className="button-29">VIEW PROJECT</button>
              <button className="button-29">CONTACT US</button>
            </div>
          </div>
        </div>
      </div>
    ));
  function Arrow(props) {
    let className = props.type === "next" ? "nextArrow" : "prevArrow";
    className += " arrow";
    const char = props.type === "next" ? "👉" : "👈";
    return (
      <div className={className} onClick={props.onClick}>
        {char}
      </div>
    );
  }

  function customPaging(i) {
    // console.log(i);
    return <span>{i + 1}</span>;
    // return <img src={elana} />
  }

  // function appendDots(dots) {
  //   return (
  //     <div style={{ backgroundColor: "#eee", marginTop: "30px" }}>
  //       <ul style={{ margin: "3px" }}> {dots} </ul>
  //     </div>
  //   );
  // }
  console.log(store.language);
  return (
    <div>
      <GoogleAnalyticsTracker />
      {show && (
        <div class="modal" tabindex="-1">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Modal title</h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <p>Modal body text goes here.</p>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={handleClose()}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="d-flex conta">
        <div className="m-top">
          <h2 className="text-white title ">
            {store.language === "en"
              ? "Your website needs"
              : "Tu pagina necesita"}
          </h2>
          <div className="d-grid">
            <h1>
              <span className="m-left">to be</span>
              <div className="message">
                <div className="word1">creative</div>
                <div className="word2">modern</div>
                <div className="word3">amused</div>
                <div className="word4">usefull</div>
                <div className="word5">prety</div>
                <div className="word6">cool</div>
              </div>
            </h1>
          </div>
          <h2 className="text-white title2 bg-future">And we can help you </h2>

          <p className="text-white">
            Lorem ipsum is placeholder text commonly used in the graphic, <br />
            print, and publishing industries for previewing layouts and visual
            mockups <br />
            Lorem ipsum is placeholder text commonly used in the graphic, <br />
            print, and publishing industries for previewing layouts and visual
            mockups.
          </p>
          <div className="d-flex">
            <Link to="/contact" className="text-decoration-none">
              <button className="button-29 me-3">Contact Us</button>
            </Link>
            <Link to="/projects" className="text-decoration-none">
              <button className="button-29">Our Portfolio</button>
            </Link>
          </div>
        </div>

        <div className="">
          <img src={main1} className="imagemain"></img>
        </div>
      </div>
      <Chatboot />
      <HomepageBanner2 width={windowDimensions.width} />
      <HomepageBanner3 width={windowDimensions.width} />
      {/* until here is the div */}
      <div className="bg-banner-3">
        <div className="">
          <Slider
            className="d-flex align-items-center"
            nextArrow={<Arrow type="next" />}
            prevArrow={<Arrow type="prev" />}
            dots={true}
            customPaging={customPaging}
            autoplay={true}
            autoplaySpeed={2000}
          // appendDots={appendDots}
          >
            {renderSlides()}
          </Slider>
        </div>
        {/* <Slider
          dots={false}
          slidesToShow={1}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={2000}
        >
          {renderSlides()}
        </Slider> */}
      </div>
      <div className="bg-grey-lines pt-5">
        <div className=" position-relative">
          <div className="border-large  position-absolute top-50 start-50 translate-middle"></div>
          <div className="border-med position-absolute top-50 start-50 translate-middle"></div>
          <div className="border-med-min mx-auto"></div>
        </div>
      </div>
      <ProcessBanner />
      <CallToActionHome />
    </div>
  );
};
