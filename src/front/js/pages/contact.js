import React, { useState, useEffect, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"
import emailjs from '@emailjs/browser';
import { InlineWidget } from "react-calendly"
import { PopupWidget } from "react-calendly";

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
	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm('service_d70o4b5', 'template_7xxg1xi', form.current, 'HASNJCXly2tABuH0x')
			.then((result) => {
				console.log(result.text);
			}, (error) => {
				console.log(error.text);
			});

		// e.target.reset()
	};

	return (
		<div className="contai bg-ligth">
			<div className="texts">

				<h5 className="title-contact-1">MAKE YOUR PRODUCT REALLY MATTER</h5>
				<h2 className="title-contact-2">Free project quote</h2>
				<h6 className="title-contact-3">Fill out the enquiry form and we’ll get back to you as soon as possible.</h6>
			</div>

			<form onSubmit={sendEmail} ref={form} >
				<div className="d-flex conta-form">
					<div>
						<input className="email" placeholder="Email address" type="text" name="email"></input>
						<div className="d-flex mt-3">
							<input className="name" placeholder="Full Name" type="text" name="name"></input>
							<input className="phone" placeholder="Phone" type="text" name="phone"></input>
						</div>
						<div className="text-area">

							<input className="mensaje mt-3" placeholder="Tell us about your project/product" type="text" name="message"></input>
						</div>
						<div className="mt-2">

							<input type="checkbox" className="checkbox-round"></input>
							<span>I have read and accept the <strong className="strong">Terms of use </strong>& <strong className="strong">Privacy Policy</strong></span>
						</div>
						<div>
							<input type="submit" value="Send" className="button-29 mt-2" />
							{/* <button className="button-29 mt-2">Lest talk<i className="far fa-paper-plane ms-1"></i></button> */}
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
			</form>
			<div className="App">
				<InlineWidget url="https://calendly.com/angelomaiele" />
			</div>

			<div className="">
				<PopupWidget
					url="https://calendly.com/your_scheduling_page"
					rootElement={document.getElementById("app")}
					text="Click here to schedule!"
					textColor="#ffffff"
					color="#00a2ff"
				/>
			</div>
		</div>
	);
};
