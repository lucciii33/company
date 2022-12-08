import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import pic1 from "../../img/pexels-fauxels-3183153.jpg"


export const MobileApps = () => {
    const { store, actions } = useContext(Context);
    return (
        <>
            <div className="position-relative">
                <div>
                    <img src={pic1} className="webDevelopment-image"></img>
                </div>
                <div className="position-absolute top-50 start-0 translate-middle-y m-5">
                    <h5 className="title-webdevelopment border-down-web-development"><i class="fas fa-circle me-2"></i>Mobile Apps</h5>
                    <h1 className="text-webdevelopment">We leverage the mobile device capabilities to create a memorable end-user experience to spur your brand’s growth.<br /> A trusted mobile app development company for world-class brands.</h1>
                    <div>
                        <button className="button-28 me-2">SEE PROJECTS</button>
                        <button className="btn btn-outline-primary controller-p">ASK FOR QUOTE</button>
                    </div>
                </div>
            </div>
            <div className="wD-2banner">
                <div className="d-flex justify-content-evenly mt-5">
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

                </div>
                <div className="techWeuseBanner">
                    <h2 className="text-center pt-5 tech-text">Why is Web development important</h2>
                    <div className="text-center p-4">
                        <p className="text-white">Web development is the process of creating websites. It involves a wide range of activities including website design, web content development, web server configuration, and client-side scripting.
                            <br /><br />
                            Web developers usually have a good understanding of both front-end and back-end web technologies.
                            <br /><br />
                            Web development is a very important part of the modern world. The internet has become an essential part of our lives and businesses can no longer function without a website.
                            <br /><br />
                            Websites allow businesses to reach a wider audience and sell their products or services online. They also provide a way for customers to contact businesses and find out more about their products or services.
                            <br /><br />
                            Web development is not only important for businesses, but also for individuals. A personal website can be used to showcase your work, build your online presence, and attract potential employers.
                            <br /><br />
                            A well-developed website can also be used as a platform to sell products or services, or to generate income through advertising.</p>
                    </div>
                </div>
            </div>


        </>
    );
};
