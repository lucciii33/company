import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"
import desing from "../../img/design.png";
import code from "../../img/code.png";
import webdesign from "../../img/webdesign.png";
import photo from "../../img/photo.png";
import react from "../../img/react.png";
import jslogo from "../../img/jslogo.png";
import nodejs from "../../img/nodejs.png";
import mongo from "../../img/mongo.png";
import figma from "../../img/figma2.png";
import next from "../../img/next.png";
import py from "../../img/py.png";
import postgress from "../../img/postgress.png";
import { GoogleAnalyticsTracker } from "../component/googleAnalyticsTracker";
import { Context } from "../store/appContext";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";

export const Services = () => {
	const { store, actions } = useContext(Context);
	const [scrollPosition, setScrollPosition] = useState(0);
	const [didUserScrollDown, setDidUserScrollDown] = useState(false);

	const boxVarient = {
		hidden: {
			x: "-100vh",
			y: 10
		},
		visible: {
			x: 0,
			duration: 3,
			// transition: {
			// 	delay: 0.3
			// }
		}
	}
	const boxVarient2 = {
		hidden: {
			x: -10,
			opacity: 0,
			y: 0
		},
		visible: {
			x: 0,
			opacity: 1,
			transition: {
				delay: 0.3
			}
		}
	}
	const boxVarient3 = {
		hidden: {
			x: -10,
			opacity: 0,
			y: 0
		},
		visible: {
			x: 0,
			opacity: 1,
			transition: {
				delay: 0.5
			}
		}
	}
	const boxVarient4 = {
		hidden: {
			x: -10,
			opacity: 0,
			y: 0
		},
		visible: {
			x: 0,
			opacity: 1,
			transition: {
				delay: 0.7
			}
		}
	}
	const boxVarient5 = {
		hidden: {
			x: -10,
			opacity: 0,
			y: 0
		},
		visible: {
			x: 0,
			opacity: 1,
			transition: {
				delay: 0.9
			}
		}
	}
	const boxVarient6 = {
		hidden: {
			x: -10,
			opacity: 0,
			y: 0
		},
		visible: {
			x: 0,
			opacity: 1,
			transition: {
				delay: 1.1
			}
		}
	}
	return (
		<>
			<Navbar />
			<div className="conta-services ">
				<GoogleAnalyticsTracker />
				<div className="text-center bg-ligth">
					{/* <motion.h5 className="ourvision" variants={boxVarient2}
						animate="visible"
						initial="hidden">Fetaured services</motion.h5> */}
					<motion.h3 className="text-gradient2" transition={{ type: "spring", stiffness: 130 }} variants={boxVarient}
						animate="visible"
						initial="hidden">Featured services</motion.h3>
				</div>
				<div className="display-none-big-screen pb-5">
					<div className="d-flex flex-wrap">
						<motion.div className="box-services"
							whileHover={{
								boxShadow: "0px, 0px, 8px, rgba(255, 255, 255)",
								scale: 1.1,
								background: "linear-gradient(291deg, rgba(28,1,44,1) 0%, rgba(158,1,142,1) 47%)",

							}}
							transition={{ type: "spring", stiffness: 500, }} variants={boxVarient3}
							animate="visible"
							initial="hidden">

							<img src={desing} className="logo-image"></img>
							<h3 className="mt-2 text-services">Branding</h3>
							<p className="mt-2 text-services ubunto">Branding is mandatory for businesses, as it changes how target audience perceive your brand; it increases brand awareness, and ultimately drives sales.</p>
							{/* <button className="button-29">Lest Design <i className="fas fa-paint-brush p-2"></i></button> */}
						</motion.div>
						<motion.div className="box-services"
							whileHover={{
								boxShadow: "0px, 0px, 8px, rgba(255, 255, 255)",
								scale: 1.1,
								background: "linear-gradient(291deg, rgba(28,1,44,1) 0%, rgba(158,1,142,1) 47%)",

							}}
							transition={{ type: "spring", stiffness: 500, }}
							variants={boxVarient4}
							animate="visible"
							initial="hidden">
							<img src={webdesign} className="logo-image"></img>
							<h3 className="mt-2 ">Web Design</h3>
							<p className="mt-2 ubunto">Digital marketing is flawed without web applications. In fact, experience tells us that websites are necessary to capture online, or perhaps global, market share.</p>
							{/* <button className="button-29">Lest Create <i className="fas fa-lightbulb p-2"></i></button> */}
						</motion.div>
						<motion.div className="box-services"
							whileHover={{
								boxShadow: "0px, 0px, 8px, rgba(255, 255, 255)",
								scale: 1.1,
								background: "linear-gradient(291deg, rgba(28,1,44,1) 0%, rgba(158,1,142,1) 47%)",

							}}
							transition={{ type: "spring", stiffness: 500, }}
							variants={boxVarient5}
							animate="visible"
							initial="hidden">
							<img src={code} className="logo-image"></img>
							<h3 className="mt-2 ">Web development</h3>
							<p className="mt-2 ubunto">Web presence is necessary, for website allows brands opportunity to meet millions of web servers. In fact, business websites are crucial touch point of sale closure.</p>
							{/* <button className="button-29">Lest Code <i className="fas fa-code p-2"></i></button> */}
						</motion.div>
						<motion.div className="box-services"
							whileHover={{
								boxShadow: "0px, 0px, 8px, rgba(255, 255, 255)",
								scale: 1.1,
								background: "linear-gradient(291deg, rgba(28,1,44,1) 0%, rgba(158,1,142,1) 47%)",

							}}
							transition={{ type: "spring", stiffness: 500, }}
							variants={boxVarient6}
							animate="visible"
							initial="hidden">
							<img src={photo} className="logo-image"></img>
							<h3 className="mt-2 ">photography</h3>
							<p className="mt-2 ubunto">Ilution Design Agency recognizes the worth of photography. The reason being it evokes customer interest and lead them to buy goods and services.</p>
							{/* <Link to="/photography" className="text-decoration-none"><button className="button-29">Lest Capture<i className="fas fa-camera-retro p-2"></i></button></Link> */}
						</motion.div>
					</div>
				</div>

				<div className="responsiveContainer m-5">

					<motion.div className="responsiveBox"
						transition={{ type: "spring", stiffness: 500, }} variants={boxVarient3}
						animate="visible"
						initial="hidden">
						<img src={desing} className="logo-image"></img>
						<h3 className="mt-2 text-services">Branding</h3>
						<p className="mt-2 text-services">Branding is mandatory for businesses, as it changes how target audience perceive your brand; it increases brand awareness, and ultimately drives sales.</p>
						{/* <button className="button-29">Lest Design <i className="fas fa-paint-brush p-2"></i></button> */}
					</motion.div>
					<motion.div className="responsiveBox"
						transition={{ type: "spring", stiffness: 500, }}
						variants={boxVarient4}
						animate="visible"
						initial="hidden">
						<img src={webdesign} className="logo-image"></img>
						<h3 className="mt-2 ">Web Design</h3>
						<p className="mt-2">Digital marketing is flawed without web applications. In fact, experience tells us that websites are necessary to capture online, or perhaps global, market share.</p>
						{/* <button className="button-29">Lest Create <i className="fas fa-lightbulb p-2"></i></button> */}
					</motion.div>
					<motion.div className="responsiveBox"
						transition={{ type: "spring", stiffness: 500, }}
						variants={boxVarient5}
						animate="visible"
						initial="hidden">
						<img src={code} className="logo-image"></img>
						<h3 className="mt-2 ">Web development</h3>
						<p className="mt-2">Web presence is necessary, for website allows brands opportunity to meet millions of web servers. In fact, business websites are crucial touch point of sale closure.</p>
						{/* <button className="button-29">Lest Code <i className="fas fa-code p-2"></i></button> */}
					</motion.div>
					<motion.div className="responsiveBox"
						transition={{ type: "spring", stiffness: 500, }}
						variants={boxVarient6}
						animate="visible"
						initial="hidden">
						<img src={photo} className="logo-image"></img>
						<h3 className="mt-2 ">photography</h3>
						<p className="mt-2">Ilution Design Agency recognizes the worth of photography. The reason being it evokes customer interest and lead them to buy goods and services.</p>
						{/* <button className="button-29">Lest Capture<i className="fas fa-camera-retro p-2"></i></button> */}
					</motion.div>
				</div>


				<div className="techWeuseBanner  pb-0">
					<h2 className="text-center pt-5 tech-text-black">Technologies we use</h2>
					<MDBRow className="d-flex justify-content-evenly mt-5">
						<MDBCol className="techBox me-3 d-flex justify-content-center bg-dark mt-2 hover-overlay-container" sm="12" md="12" lg="3">
							<div className="my-auto">
								<img src={mongo} className="jslogo"></img>
								<div className="overlay">
									<div className="image--title-hover">
										MongoDB
									</div>
								</div>
							</div>
						</MDBCol>
						<MDBCol className="techBox me-3 mt-2 d-flex justify-content-center bg-dark hover-overlay-container" sm="12" md="12" lg="3">

							<div className="my-auto">
								<img src={nodejs} className="jslogo"></img>
								<div className="overlay">
									<div className="image--title-hover">
										Node JS
									</div>
								</div>
							</div>
						</MDBCol>
						<MDBCol className="techBox me-3 mt-2 d-flex justify-content-center bg-dark hover-overlay-container" sm="12" md="12" lg="3">
							<div className="my-auto">
								<img src={postgress} className="reactlogo"></img>
								<div className="overlay">
									<div className="image--title-hover">
										PostgressSQL
									</div>
								</div>
							</div>
						</MDBCol>
						<MDBCol className="techBox me-3 mt-2 d-flex justify-content-center bg-dark hover-overlay-container" sm="12" md="12" lg="3">
							<div className="my-auto">
								<img src={jslogo} className="jslogo mt-3"></img>
								<div className="overlay">
									<div className="image--title-hover">
										JavaScript
									</div>
								</div>
							</div>
						</MDBCol>
					</MDBRow>

				</div>

				<div className="techWeuseBanner pb-5">
					<MDBRow className="d-flex justify-content-evenly pt-controller-5 pb-5">
						<MDBCol className="techBox me-3 d-flex justify-content-center bg-dark mt-2 hover-overlay-container" sm="12" md="12" lg="3">
							<div className="my-auto ">
								<img src={figma} className="jslogo"></img>
								<div className="overlay">
									<div className="image--title-hover">
										Figma
									</div>
								</div>
							</div>
						</MDBCol>
						<MDBCol className="techBox me-3 mt-2 d-flex justify-content-center bg-dark hover-overlay-container" sm="12" md="12" lg="3">
							<div className="my-auto">
								<img src={py} className="jslogo"></img>
								<div className="overlay">
									<div className="image--title-hover">
										Node JS
									</div>
								</div>
							</div>
						</MDBCol>
						<MDBCol className="techBox me-3 mt-2 d-flex justify-content-center bg-dark hover-overlay-container" sm="12" md="12" lg="3">
							<div className="my-auto">
								<img src={react} className="reactlogo"></img>
								<div className="overlay">
									<div className="image--title-hover">
										React JS
									</div>
								</div>
							</div>
						</MDBCol>
						<MDBCol className="techBox me-3 mt-2 d-flex justify-content-center bg-dark hover-overlay-container" sm="12" md="12" lg="3">
							<div className="my-auto">
								<img src={next} className="nextlogo mt-3"></img>
								<div className="overlay">
									<div className="image--title-hover">
										Next.js
									</div>
								</div>
							</div>
						</MDBCol>
					</MDBRow>

				</div>
			</div>
			<div className="services-banner-3 pt-5">
				<h2 className="my-5 text-center text-white services-text-card fs-50">Monthly deals</h2>
				<MDBRow className="d-flex justify-content-evenly">
					{/* <div className="d-flex justify-content-evenly"> */}
					<MDBCol className="card-service-3-banner d-flex justify-content-center align-items-start pt-5 mt-3" sm="12" md="12" lg="4">
						<div className="pt-3">
							<div className="">
								<h2 className="text-white text-center services-text-card">BLOG WEBSITE FROM</h2>
								<h3 className="text-white text-center services-text-card ">$499</h3>
							</div>
							<div className="">
								<div className="squre-services d-flex justify-content-center align-items-center">
									<div>
										<i className="fas fa-sitemap fa-icon"></i>
									</div>
								</div>
							</div>
						</div>
					</MDBCol>
					<MDBCol className="card-service-3-banner d-flex justify-content-center align-items-start pt-5 mt-3" sm="12" md="12" lg="4">
						<div className="pt-3">
							<div className="">
								<h2 className="text-white text-center services-text-card">SOFTWARES AND SYSTEMS FROM</h2>
								<h3 className="text-white text-center services-text-card ">$2000</h3>
							</div>
							<div className="">
								<div className="squre-services d-flex justify-content-center align-items-center">
									<div>
										<i class="fas fa-code fa-icon"></i>
									</div>
								</div>
							</div>
						</div>
					</MDBCol>
					<MDBCol className="card-service-3-banner d-flex justify-content-center align-items-start pt-5 mt-3" sm="12" md="12" lg="4">
						<div className="pt-3">
							<div className="">
								<h2 className="text-white text-center services-text-card">MOBILE APPS FROM</h2>
								<h3 className="text-white text-center services-text-card ">$1500</h3>
							</div>
							<div className="">
								<div className="squre-services d-flex justify-content-center align-items-center">
									<div>
										<i class="fas fa-mobile-alt fa-icon"></i>
									</div>
								</div>
							</div>
						</div>
					</MDBCol>
					<MDBCol className="card-service-3-banner d-flex justify-content-center align-items-start pt-5 mt-3" sm="12" md="12" lg="4">
						<div className="pt-3">
							<div className="">
								<h2 className="text-white text-center services-text-card">E-commerce</h2>
								<h3 className="text-white text-center services-text-card ">$1500</h3>
							</div>
							<div className="">
								<div className="squre-services d-flex justify-content-center align-items-center">
									<div>
										<i class="fas fa-shopping-cart fa-icon"></i>
									</div>
								</div>
							</div>
						</div>
					</MDBCol>
					{/* </div> */}
				</MDBRow>
			</div>
			<Footer />
		</>
	);
};
