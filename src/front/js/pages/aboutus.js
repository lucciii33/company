import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"

import { Context } from "../store/appContext";

export const Aboutus = () => {
	const { store, actions } = useContext(Context);
	const [show, setShow] = useState(false);

	useEffect(() => {
		window.addEventListener("load", function () {
			setTimeout(() => {
				setShow(true)
			}, 1000)
		})
	}, []);


	const boxVarient = {
		hidden: {
			x: "-100vh",
			y: 65
		},
		visible: {
			x: 0,
			duration: 2
		}
	}
	return (
		<div className="contai">
			<div>
				{/* <button variant="primary" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setShow(false)}>
					Custom Width Modal
				</button>

				<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" show={show}
					onHide={() => setShow(false)}>
					<div class="modal-dialog">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
								<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
							</div>
							<div class="modal-body">
								...
							</div>
							<div class="modal-footer">
								<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
								<button type="button" class="btn btn-primary">Save changes</button>
							</div>
						</div>
					</div>
				</div> */}
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
					{/* <p className="paragraph">With top-notch technical foundations, unique design, and engaging content,<br /> we build smooth customer journeys with a proven track record of skyrocketing conversion rates.</p>  */}
				</div>
			</div>
		</div>
	);
};
