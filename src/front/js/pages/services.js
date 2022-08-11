import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"
import desing from "../../img/design.png";
import code from "../../img/code.png";
import webdesign from "../../img/webdesign.png";
import photo from "../../img/photo.png";

import { Context } from "../store/appContext";

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
		<div className="conta-services">
			<div className="text-center">
				<motion.h5 className="ourvision" variants={boxVarient2}
					animate="visible"
					initial="hidden">Fetaured services</motion.h5>
				<motion.h3 className="text-gradient2" transition={{ type: "spring", stiffness: 130 }} variants={boxVarient}
					animate="visible"
					initial="hidden">Why you will choose <br /> Ilution Design Agency.</motion.h3>
			</div>
			<div className="display-none-big-screen">
				<div className="d-flex flex-wrap">
					<motion.div className="box-services"
						whileHover={{
							boxShadow: "0px, 0px, 8px, rgba(255, 255, 255)",
							scale: 1.1,
							background: "linear-gradient(291deg, rgba(28,1,44,1) 0%, rgba(158,1,142,1) 47%)",
							originX: 0,
						}}
						transition={{ type: "spring", stiffness: 500, }} variants={boxVarient3}
						animate="visible"
						initial="hidden">

						<img src={desing} className="logo-image"></img>
						<h3 className="mt-2 text-services">Branding</h3>
						<p className="mt-2 text-services">Branding is mandatory for businesses, as it changes how target audience perceive your brand; it increases brand awareness, and ultimately drives sales.</p>
						<button className="button-29">Lest Design <i className="fas fa-paint-brush p-2"></i></button>
					</motion.div>
					<motion.div className="box-services"
						whileHover={{
							boxShadow: "0px, 0px, 8px, rgba(255, 255, 255)",
							scale: 1.1,
							background: "linear-gradient(291deg, rgba(28,1,44,1) 0%, rgba(158,1,142,1) 47%)",
							originX: 0,
						}}
						transition={{ type: "spring", stiffness: 500, }}
						variants={boxVarient4}
						animate="visible"
						initial="hidden">
						<img src={webdesign} className="logo-image"></img>
						<h3 className="mt-2 ">Web Design</h3>
						<p className="mt-2">Digital marketing is flawed without web applications. In fact, experience tells us that websites are necessary to capture online, or perhaps global, market share.</p>
						<button className="button-29">Lest Create <i className="fas fa-lightbulb p-2"></i></button>
					</motion.div>
					<motion.div className="box-services"
						whileHover={{
							boxShadow: "0px, 0px, 8px, rgba(255, 255, 255)",
							scale: 1.1,
							background: "linear-gradient(291deg, rgba(28,1,44,1) 0%, rgba(158,1,142,1) 47%)",
							originX: 0,
						}}
						transition={{ type: "spring", stiffness: 500, }}
						variants={boxVarient5}
						animate="visible"
						initial="hidden">
						<img src={code} className="logo-image"></img>
						<h3 className="mt-2 ">Web development</h3>
						<p className="mt-2">Web presence is necessary, for website allows brands opportunity to meet millions of web servers. In fact, business websites are crucial touch point of sale closure.</p>
						<button className="button-29">Lest Code <i className="fas fa-code p-2"></i></button>
					</motion.div>
					<motion.div className="box-services"
						whileHover={{
							boxShadow: "0px, 0px, 8px, rgba(255, 255, 255)",
							scale: 1.1,
							background: "linear-gradient(291deg, rgba(28,1,44,1) 0%, rgba(158,1,142,1) 47%)",
							originX: 0,
						}}
						transition={{ type: "spring", stiffness: 500, }}
						variants={boxVarient6}
						animate="visible"
						initial="hidden">
						<img src={photo} className="logo-image"></img>
						<h3 className="mt-2 ">photography</h3>
						<p className="mt-2">Ilution Design Agency recognizes the worth of photography. The reason being it evokes customer interest and lead them to buy goods and services.</p>
						<button className="button-29">Lest Capture<i className="fas fa-camera-retro p-2"></i></button>
					</motion.div>
				</div>
			</div>
















			<div className="responsiveContainer">

				<motion.div className="responsiveBox"
					transition={{ type: "spring", stiffness: 500, }} variants={boxVarient3}
					animate="visible"
					initial="hidden">
					<img src={desing} className="logo-image"></img>
					<h3 className="mt-2 text-services">Branding</h3>
					<p className="mt-2 text-services">Branding is mandatory for businesses, as it changes how target audience perceive your brand; it increases brand awareness, and ultimately drives sales.</p>
					<button className="button-29">Lest Design <i className="fas fa-paint-brush p-2"></i></button>
				</motion.div>
				<motion.div className="responsiveBox"
					transition={{ type: "spring", stiffness: 500, }}
					variants={boxVarient4}
					animate="visible"
					initial="hidden">
					<img src={webdesign} className="logo-image"></img>
					<h3 className="mt-2 ">Web Design</h3>
					<p className="mt-2">Digital marketing is flawed without web applications. In fact, experience tells us that websites are necessary to capture online, or perhaps global, market share.</p>
					<button className="button-29">Lest Create <i className="fas fa-lightbulb p-2"></i></button>
				</motion.div>
				<motion.div className="responsiveBox"
					transition={{ type: "spring", stiffness: 500, }}
					variants={boxVarient5}
					animate="visible"
					initial="hidden">
					<img src={code} className="logo-image"></img>
					<h3 className="mt-2 ">Web development</h3>
					<p className="mt-2">Web presence is necessary, for website allows brands opportunity to meet millions of web servers. In fact, business websites are crucial touch point of sale closure.</p>
					<button className="button-29">Lest Code <i className="fas fa-code p-2"></i></button>
				</motion.div>
				<motion.div className="responsiveBox"
					transition={{ type: "spring", stiffness: 500, }}
					variants={boxVarient6}
					animate="visible"
					initial="hidden">
					<img src={photo} className="logo-image"></img>
					<h3 className="mt-2 ">photography</h3>
					<p className="mt-2">Ilution Design Agency recognizes the worth of photography. The reason being it evokes customer interest and lead them to buy goods and services.</p>
					<button className="button-29">Lest Capture<i className="fas fa-camera-retro p-2"></i></button>
				</motion.div>
			</div>

		</div>
	);
};
