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
import {
    MDBCarousel,
    MDBCarouselItem,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
} from 'mdb-react-ui-kit';

export const Photoraphy = () => {
    const { store, actions } = useContext(Context);
    return (
        <>
            <GoogleAnalyticsTracker />

            <MDBCarousel showIndicators showControls fade>
                <MDBCarouselItem
                    className='w-100 d-block image-carrousel-photo'
                    itemId={1}
                    src='https://images.pexels.com/photos/2253832/pexels-photo-2253832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    alt='...'
                >
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </MDBCarouselItem>

                <MDBCarouselItem
                    className='w-100 d-block image-carrousel-photo'
                    itemId={2}
                    src='https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    alt='...'
                >
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </MDBCarouselItem>

                <MDBCarouselItem
                    className='w-100 d-block image-carrousel-photo'
                    itemId={3}
                    src='https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    alt='...'
                >
                    <h5>Third slide label</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </MDBCarouselItem>
            </MDBCarousel>

            <div className="pt-3 px-5 bg-light">
                <div className="mt-5">
                    <h2 className="mt-3 text-center text-gradient2">Projects</h2>
                </div>
                <MDBRow className="pb-5">
                    <MDBCol sm="12" md="4" lg="4" className="mt-5">
                        <MDBCard>
                            <MDBCardImage src='https://images.pexels.com/photos/948185/pexels-photo-948185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' position='top' alt='...' className="image-card-photo" />
                            <MDBCardBody>
                                <MDBCardTitle>Card title</MDBCardTitle>
                                <MDBCardText>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </MDBCardText>
                                <MDBBtn href='#'>Button</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol sm="12" md="4" lg="4" className="mt-5">
                        <MDBCard>
                            <MDBCardImage src='https://images.pexels.com/photos/2587370/pexels-photo-2587370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' position='top' alt='...' className="image-card-photo" />
                            <MDBCardBody className="bg-dark text-white">
                                <MDBCardTitle>Card title</MDBCardTitle>
                                <MDBCardText>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </MDBCardText>
                                <MDBBtn href='#' className="button-28">Button</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol sm="12" md="4" lg="4" className="mt-5">
                        <MDBCard>
                            <MDBCardImage src='https://images.pexels.com/photos/1474157/pexels-photo-1474157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' position='top' alt='...' className="image-card-photo" />
                            <MDBCardBody className="blue-bg-card text-white">
                                <MDBCardTitle>Card title</MDBCardTitle>
                                <MDBCardText>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </MDBCardText>
                                <MDBBtn href='#' className="bg-light text-dark border border-0">Button</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </div>


        </>
    );
};