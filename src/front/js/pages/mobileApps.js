import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import pic1 from "../../img/pexels-fauxels-3183153.jpg"
import { CardMobileApp } from "../component/cardMobileApps";
import { GoogleAnalyticsTracker } from "../component/googleAnalyticsTracker";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";
import { TabsMobile } from "../component/tabsMobileApp";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";


export const MobileApps = () => {
    const { store, actions } = useContext(Context);
    return (
        <>
            <Navbar />
            <GoogleAnalyticsTracker />
            <div className="position-relative">
                <div>
                    <img src={pic1} className="webDevelopment-image"></img>
                </div>
                <div className="position-absolute top-50 start-0 translate-middle-y m-5">
                    <h5 className="title-webdevelopment-2 border-down-web-development"><i class="fas fa-circle me-2"></i>Mobile Apps</h5>
                    <h2 className="text-webdevelopment">We leverage the mobile device capabilities to create<br /> a memorable end-user experience to spur your brand’s growth.<br /> A trusted mobile app development company for world-class brands.</h2>
                    <div className="d-flex">
                        <Link to="/projects" className="text-decoration-none"><button className="button-28 me-2">PROJECTS</button></Link>
                        <Link to="/contact" className="text-decoration-none"><button className="button-29 controller-p">ASK FOR QUOTE</button></Link>
                    </div>
                </div>
            </div>
            <div className="wD-2banner">
                {/* <div className="d-flex justify-content-evenly mt-5">
                    <div className="d-flex mt-5 m-5">
                        <div className="">
                            <div className="box-chart">
                                <h6>more that 10<br /> projects in 2022</h6>
                            </div>
                            <div className="box-charts-two">
                                <h6>more that 10<br /> projects in 2022</h6>
                            </div>
                        </div>
                        <div className="">
                            <div className="box-charts-three">
                                <h6 className=" my-auto">more that 10<br /> projects in 2022</h6>
                            </div>
                            <div className="box-charts-four">
                                <h6>more that 10<br /> projects in 2022</h6>
                            </div>
                        </div>
                    </div>
                    <div className="m-5">
                        <h3 className="mt-2">Your development partner. We stand for excellence!</h3>
                        <p className="mt-4">Over the past decade, we have mastered the art of creating websites that innovate, engage and deliver results through a combination of human-centric approach and development ingenuity. Hire top web developers to make your dream a reality.</p>
                        <p className="mt-4">Be it custom Web applications development and SaaS platforms, ecommerce website development or informative lead generation sites, our value proposition, when it comes to web development, is to build solutions by prioritizing the context and needs of the end-users, ensuring meaningful results.</p>
                        <p className="mt-4">Be it custom Web applications development and SaaS platforms, ecommerce website development or informative lead generation sites, our value proposition, when it comes to web development, is to build solutions by prioritizing the context and needs of the end-users, ensuring meaningful results.</p>
                    </div>

                </div> */}
                <div className="d-flex justify-content-center">
                    <div>
                        <MDBRow className="webD-flex letters-top" sm="12" md="8" lg="8">
                            <MDBCol className="mletter-5 ">
                                <h3 className="mt-2 Orbitron">
                                    Your development partner.<br /> We stand for excellence!
                                </h3>
                                <p className="mt-4 ubunto">

                                    Our agency especialices in creating customized, user-friendly mobile applications for businesses and individuals.

                                    We work closely with our clients to understand their needs and provide tailored solutions that meet their specific requirements.


                                </p>
                                <p className="mt-4 ubunto">
                                    Overall, we aim to provide comprehensive mobile app development services that help our clients achieve their business goals and provide their users with a seamless and engaging mobile experience.

                                </p>
                                <p className="mt-4 ubunto">
                                    From ideation to launch, we guide you through every step of the development process, ensuring that your app is developed within budget and on time. We also provide ongoing support and maintenance to ensure that your app stays up-to-date and performs at its best.
                                </p>
                            </MDBCol>
                            <MDBCol className="d-flex mt-2 m-5" sm="12" md="4" lg="4">
                                <div className="">
                                    <div className="box-chart">
                                        <h6>
                                            App design
                                            <br />
                                        </h6>
                                    </div>
                                    <div className="box-charts-two">
                                        <h6>
                                            App development

                                            <br />
                                        </h6>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="box-charts-three">
                                        <h6 className=" my-auto">
                                            Support

                                            <br />
                                            and Maintenance
                                        </h6>
                                    </div>
                                    <div className="box-charts-four">
                                        <h6>
                                            App marketing

                                        </h6>
                                    </div>
                                </div>
                            </MDBCol>
                        </MDBRow>
                    </div>
                </div>
            </div>
            <div className="  pt-5">
                <div className=" position-relative">

                    {/* <div className="border-large  position-absolute top-50 start-50 translate-middle"></div>
                    <div className="border-med  position-absolute top-50 start-50 translate-middle"></div> */}
                    {/* <div className="border-med position-absolute top-50 start-50 translate-middle"></div>
                    <div className="border-med-min mx-auto"></div> */}
                </div>
            </div>
            <div className="mt-5 pad-controller-tab">
                <TabsMobile />
            </div>
            <Footer />
        </>
    );
};
