import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import pic1 from "../../img/group-people-working-website-template.jpg"
import { GoogleAnalyticsTracker } from "../component/googleAnalyticsTracker";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import react from "../../img/react.png";
import jslogo from "../../img/jslogo.png";
import nodejs from "../../img/nodejs.png";
import mongo from "../../img/mongo.png";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";

export const WebDevelopment = () => {
    const { store, actions } = useContext(Context);
    return (
        <>
            <Navbar />

            <GoogleAnalyticsTracker />
            <div>
                <div className="position-relative">
                    <div>
                        <img src={pic1} className="webDevelopment-image"></img>
                    </div>
                    <div className="position-absolute top-50 start-0 translate-middle-y mar-controller">
                        <h5 className="title-webdevelopment border-down-web-development"><i class="fas fa-circle me-2"></i> Web Development</h5>
                        <h1 className="text-webdevelopment">We devise solutions to maximize<br /> your business efficiency. lorem <br />ipsum here to make more text</h1>
                        <div>
                            <button className="button-28 me-2">SEE PROJECTS</button>
                            <button className="btn btn-outline-primary controller-p">ASK FOR QUOTE</button>
                        </div>
                    </div>

                </div>
                <div className="wD-2banner ">
                    <div className="d-flex justify-content-center">
                        <div>
                            <MDBRow className="webD-flex letters-top" sm="12" md="8" lg="8">
                                <MDBCol className="mletter-5 ">
                                    <h3 className="mt-2">Your development partner. We stand for excellence!</h3>
                                    <p className="mt-4">Over the past decade, we have mastered the art of creating websites that innovate, engage and deliver results through a combination of human-centric approach and development ingenuity. Hire top web developers to make your dream a reality.</p>
                                    <p className="mt-4">Be it custom Web applications development and SaaS platforms, ecommerce website development or informative lead generation sites, our value proposition, when it comes to web development, is to build solutions by prioritizing the context and needs of the end-users, ensuring meaningful results.</p>
                                    <p className="mt-4">Be it custom Web applications development and SaaS platforms, ecommerce website development or informative lead generation sites, our value proposition, when it comes to web development, is to build solutions by prioritizing the context and needs of the end-users, ensuring meaningful results.</p>
                                </MDBCol>
                                <MDBCol className="d-flex mt-2 m-5" sm="12" md="4" lg="4">
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
                                </MDBCol>
                            </MDBRow>
                        </div>
                    </div>
                    <div className="techWeuseBanner pb-5">
                        <div className="text-center">
                            <h2 className="">Why is web Development important</h2>
                        </div>
                        <MDBRow className="mt-5">
                            <MDBCol className="p-5" sm="12" md="6" lg="7">
                                <img src="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="image-web-development"></img>
                            </MDBCol>
                            <MDBCol className="my-auto py-5" sm="12" md="6" lg="5">
                                <h3 className="">Lorem impsum</h3>
                                <h6 className="">Lorem impsum text here</h6>
                                <p className="pe-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <p className="pe-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <button className="button-28">SEE PROJECTS</button>

                            </MDBCol>
                        </MDBRow>

                    </div>
                </div>

            </div>

            <Footer />

        </>
    );
};
