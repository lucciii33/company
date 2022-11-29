import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import pic1 from "../../img/group-people-working-website-template.jpg"

export const WebDevelopment = () => {
    const { store, actions } = useContext(Context);
    return (
        <>
            <div className="position-relative">
                <div>
                    <img src={pic1} className="webDevelopment-image"></img>
                </div>
                <div className="position-absolute top-50 start-0 translate-middle-y m-5">
                    <h5 className="title-webdevelopment border-down-web-development"><i class="fas fa-circle me-2"></i> Web Development</h5>
                    <h1 className="text-webdevelopment">We devise solutions to maximize<br /> your business efficiency. lorem <br />ipsum here to make more text</h1>
                    <div>
                        <button className="button-28 me-2">SEE PROJECTS</button>
                        <button className="btn btn-outline-primary controller-p">ASK FOR QUOTE</button>
                    </div>
                </div>
            </div>
            <div className="wD-2banner">
                <div className="d-flex justify-content-evenly mt-5">
                    <div className="m-5">
                        <h3 className="mt-2">Your development partner. We stand for excellence!</h3>
                        <p className="mt-4">Over the past decade, we have mastered the art of creating websites that innovate, engage and deliver results through a combination of human-centric approach and development ingenuity. Hire top web developers to make your dream a reality.</p>
                        <p className="mt-4">Be it custom Web applications development and SaaS platforms, ecommerce website development or informative lead generation sites, our value proposition, when it comes to web development, is to build solutions by prioritizing the context and needs of the end-users, ensuring meaningful results.</p>
                        <p className="mt-4">Be it custom Web applications development and SaaS platforms, ecommerce website development or informative lead generation sites, our value proposition, when it comes to web development, is to build solutions by prioritizing the context and needs of the end-users, ensuring meaningful results.</p>
                    </div>
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
                </div>
            </div>


        </>
    );
};
