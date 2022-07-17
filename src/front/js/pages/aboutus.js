import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"

import { Context } from "../store/appContext";

export const Aboutus = () => {
	const { store, actions } = useContext(Context);
	const [scrollPosition, setScrollPosition] = useState(0);
	const [didUserScrollDown, setDidUserScrollDown] = useState(false);
	//function below constantly updates scrollPosition with the pageYOffset. Starts at 0, and increases as
	//the user scrolls down
	const handleScroll = () => {
		const position = window.pageYOffset;
		setScrollPosition(position);
		//As soon as the user moves and the position is no longer 0, the second hook is set to true which
		//triggers the toast
		position != 0 ? setDidUserScrollDown(true) : null;
	};

	//adds the event listener on initial render and cleans it up when finished.
	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const toastStyles = {
		position: "fixed",
		bottom: "3%",
		right: "3%",
		zIndex: "2",
	};




	const boxVarient = {
		hidden: {
			x: "-100vh",
			y: 65
		},
		visible: {
			x: 0,
			duration: 2,
			// transition: {
			// 	delay: 0.3
			// }
		}
	}


	const boxVarient2 = {
		hidden: {
			x: -10,
			opacity: 0,
			y: 65
		},
		visible: {
			x: 0,
			opacity: 1,
			transition: {
				delay: 0.9
			}
		}
	}
	return (
		<div className="contai bg-ligth">
			<div>
				<div
					className={
						didUserScrollDown ? "toast show" : "toast hide"
					}
					style={toastStyles}
					n
				>
					<div className="toast-header" style={{ backgroundColor: "#7dcfb6" }}>
						<strong className="me-auto" style={{ color: "black" }}>
							New Here?
						</strong>
						<button
							type="button"
							className="btn-close"
							data-bs-dismiss="toast"
						></button>
					</div>
					<div className="toast-body " style={{ backgroundColor: "ghostwhite" }}>
						<p>
							Check out the{" "}
							<Link to="/tutorial" className=".active">
								tutorial
							</Link>
							!
						</p>
					</div>
				</div>


				<div className="text-center">

					<motion.h5 className="ourvision"
						animate={{
							y: 25,
							opacity: 1,
						}}
						initial={{
							opacity: 0.6
						}}
						transition={{ type: "spring", stiffness: 130 }}
					>OUR VISION</motion.h5>
					<motion.h2
						className="text-gradient"
						animate={{
							y: 75,
							opacity: 1
						}}
						initial={{
							opacity: 0.6
						}}
						transition={{ type: "spring", stiffness: 130 }}
					>Getting the most out <br /> of your web presence</motion.h2>
					<motion.h4 className="paragraph"

						transition={{ type: "spring", stiffness: 130 }}
						variants={boxVarient}
						animate="visible"
						initial="hidden"
					>We’re a unique combination of a software house and interactive agency,<br />
						creating custom web solutions custom-fit to support the growth of modern startups.

					</motion.h4>
					<motion.p className="paragraph"
						variants={boxVarient2}
						animate="visible"
						initial="hidden">With top-notch technical foundations, unique design, and engaging content,<br /> we build smooth customer journeys with a proven track record of skyrocketing conversion rates.</motion.p>
				</div>
			</div>
		</div>
	);
};
