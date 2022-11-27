import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import main1 from "../../img/main1.png";
import elana from "../../img/Logo.png";
import elana1 from "../../img/figma.png";
import elana2 from "../../img/elana.png";
import design from "../../img/design.png";
import code from "../../img/code.png";
import webdesign from "../../img/webdesign.png";
import Card from "../component/Card";
import "../../styles/home.css";
import Chatboot from "../component/Chatboot";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const Home = () => {
  const { store, actions } = useContext(Context);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
    console.log(i);
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
      <Chatboot></Chatboot>
      <div className="bg-banner-1">
        <h2 className="text-center text-gradient-home pt-5">
          Story of the company
        </h2>
        <div className="d-flex">
          <div className="m-5">
            <div className="d-flex ">
              <div className="person1 me-3">
                <img
                  src="https://images.pexels.com/photos/2102415/pexels-photo-2102415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  className="img-person-1"
                ></img>
              </div>
              <div className="person2">
                <img
                  src="https://images.pexels.com/photos/3178744/pexels-photo-3178744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  className="img-person-2"
                ></img>
              </div>
            </div>
            <div className="d-flex ">
              <div className="person3 me-3">
                <img
                  src="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  className="img-person-3"
                ></img>
              </div>
              <div className="person4">
                <img
                  src="https://images.pexels.com/photos/7989039/pexels-photo-7989039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  className="img-person-4"
                ></img>
              </div>
            </div>
          </div>
          <div className="text-controller-2 my-auto px-5">
            <h2 className="title-home-text">TEXT TITLE</h2>
            <p className="paragraph-home-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              "There's one exception to the rule above: If you are using the
              display property to define your div as a flex container, then you
              can't use the text-align property to center text horizontally
              inside the div. Instead, you have to use the justify-content
              property with the value
              center."https://blog.hubspot.com/website/center-div-css
            </p>
          </div>
        </div>
      </div>
      {/* Here start the div of Mau  */}
      <div className="bg-banner-2">
        <div className="d-flex align-items-center justify-content-evenly container-card-banner-2">
          <Card
            title="Branding"
            description="Branding is mandatory for businesses, as it changes how target audience perceive your brand; it increases brand awareness, and ultimately drives sales"
            img=<img src={design} className="icon-banner"></img>
          />
          <Card
            title="Web Design"
            description="Digital marketing is flawed without web applications. In fact, experience tells us that websites are necessary to capture online, or perhaps global, market share."
            img=<img src={webdesign} className="icon-banner2 "></img>
          />
          <Card
            title="Web Development"
            description="Web presence is necessary, for website allows brands opportunity to meet millions of web servers. In fact, business websites are crucial touch point of sale closure."
            img=<img src={code} className="icon-banner3 "></img>
          />
        </div>
      </div>
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
      <div className="bg-banner-4">
        <h2>Banner four description of our bussiness </h2>
      </div>
    </div>
  );
};
