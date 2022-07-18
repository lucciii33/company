import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"

import { Context } from "../store/appContext";

export const ContactUs = () => {
	const { store, actions } = useContext(Context);

	const boxVarient = {
		hidden: {
			x: "100vh",
		},
		visible: {
			x: 0,
			duration: 2,
			// transition: {
			// 	delay: 0.3
			// }
		}
	}

	return (
		<div className="contai bg-ligth">
			<div className="texts">

				<h5 className="title-contact-1">MAKE YOUR PRODUCT REALLY MATTER</h5>
				<h2 className="title-contact-2">Free project quote</h2>
				<h6 className="title-contact-3">Fill out the enquiry form and we’ll get back to you as soon as possible.</h6>
			</div>

			<div className="d-flex conta-form">
				<div>
					<input className="email" placeholder="Email address" type="text"></input>
					<div className="d-flex mt-3">
						<input className="name" placeholder="Full Name" type="text"></input>
						<input className="phone" placeholder="Phone" type="text"></input>
					</div>
					<div className="text-area">

						<textarea className="mensaje mt-3" placeholder="Tell us about your project/product" type="text"></textarea>
					</div>
					<div className="mt-2">

						<input type="checkbox" className="checkbox-round"></input>
						<span>I have read and accept the <strong className="strong">Terms of use </strong>& <strong className="strong">Privacy Policy</strong></span>
					</div>
					<div>
						<button className="button-29 mt-2">Lest talk<i className="far fa-paper-plane ms-1"></i></button>
					</div>

				</div>
				<motion.div className="second-box" transition={{ type: "spring", stiffness: 130 }}
					variants={boxVarient}
					animate="visible"
					initial="hidden">
					<h2 className="text-center p-box">Usertive Solutions</h2>
					<div>
						<div className="d-flex">
							<i className="far fa-envelope"></i>
							<p className="text-contact-box">ilutioncode@gmail.com</p>
						</div>
						<div className="d-flex">
							<i className="fas fa-map-marker-alt"></i>
							<p className="text-contact-box">Miami, United State</p>
						</div>
						<div className="d-flex">
							<i className="fas fa-mobile-alt"></i>
							<p className="text-contact-box">9864984455</p>
						</div>

					</div>




				</motion.div>
			</div>

		</div>
	);
};
