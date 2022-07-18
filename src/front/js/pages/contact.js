import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"

import { Context } from "../store/appContext";

export const ContactUs = () => {
	const { store, actions } = useContext(Context);

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
				</div>
				<div className="second-box">
					<h2>cualquier cosa</h2>
				</div>
			</div>

		</div>
	);
};
