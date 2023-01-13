import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll } from "framer-motion"
import elana from "../../img/captureElana.png";
import { GoogleAnalyticsTracker } from "../component/googleAnalyticsTracker";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";


import { Context } from "../store/appContext";

export const Projects = () => {
	const { scrollYProgress } = useScroll();
	const { store, actions } = useContext(Context);
	// const { scrollYProgress } = useViewportScroll()

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
			x: 10,
			opacity: 0,
			y: 0
		},
		visible: {
			x: 0,
			opacity: 1,
			transition: {
				delay: 0.6
			}
		}
	}

	return (
		<>
			<Navbar />
			<div className="project-container">
				<GoogleAnalyticsTracker />
				<div className="text-center">
					<motion.h2 className="text-gradient2 p-3"
						variants={boxVarient2}
						animate="visible"
						initial="hidden">What we’re proud of</motion.h2>
					<motion.h4 className="paragraph mb-4 p-3"
						variants={boxVarient2}
						animate="visible"
						initial="hidden">Over the last 2 years, we’ve delivered more than 500 projects to our clients worldwide.<br /> Have a look at some of the examples.</motion.h4>
				</div>
				<div className="d-flex flex-wrap">
					<div className="justify-content-between">
						<motion.div className="margin-left box-project"
							variants={boxVarient3}
							animate="visible"
							initial="hidden">
							<img src={elana} className="img-project1 ms-3"></img>
							<h3 className="paragraph ms-3">Lorem Ipsum</h3>
							<p className="description ms-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
							<button className="button-29 ms-3">see me!</button>
						</motion.div>
						<motion.div className="margin-left box-project"
							// variants={boxVarient4}
							// animate="visible"
							// initial="hidden"
							style={{ scaleX: scrollYProgress }}>
							<img src="https://i.pinimg.com/originals/e1/b8/79/e1b879128c55a9c38d8c6a5f57282b46.png" className="img-project ms-3"></img>
							<h3 className="paragraph ms-3">Lorem Ipsum</h3>
							<p className="description ms-3">Loremn! ipsum dolor sit amet, consectetur adipiscing elit</p>
							<button className="button-29 ms-3">see me!</button>
						</motion.div>
					</div>
					<div className="justify-content-between">
						<motion.div className="margin-left box-project"
							whileInView={boxVarient3}
							variants={boxVarient3}
							animate="visible"
							initial="hidden"

						>
							<img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/06cd2159578771.5a4c3e28ae18c.jpg" className="img-project ms-3"></img>
							<h3 className="paragraph ms-3">Lorem Ipsum</h3>
							<p className="description ms-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
							<button className="button-29 ms-3">see me!</button>
						</motion.div>
						<motion.div className="margin-left box-project"
							style={{ scaleX: scrollYProgress }}>
							<img src="https://i.pinimg.com/736x/3a/81/0f/3a810f0b7ec105cff334c412d9c9ed45.jpg" className="img-project ms-3"></img>
							<h3 className="paragraph ms-3">Lorem Ipsum</h3>
							<p className="description ms-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
							<button className="button-29 ms-3">see me!</button>
						</motion.div>
					</div>
				</div>
			</div >
			<Footer />
		</>
	)
};
