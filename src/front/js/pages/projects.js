import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"

import { Context } from "../store/appContext";

export const Projects = () => {
	const { store, actions } = useContext(Context);



	return (
		<div className="project-container">
			<div className="text-center">
				<h2 className="text-gradient2 p-3">What we’re proud of</h2>
				<h4 className="paragraph mb-4 p-3">Over the last 2 years, we’ve delivered more than 500 projects to our clients worldwide.<br /> Have a look at some of the examples.</h4>
			</div>
			<div className="d-flex flex-wrap">
				{/* <div className="box ms-4">
					<h2>02</h2>
				</div>
				<div className="box ms-4">
					<h2>02</h2>
				</div>
				<div className="box ms-4">
					<h2>02</h2>
				</div> */}
				<div className="margin-left box-project">
					<img src="https://i.pinimg.com/originals/46/c7/16/46c716ad6b833085403c062a28b50b83.jpg" className="img-project ms-3"></img>
					<h3 className="paragraph">Lorem Ipsum</h3>
					<p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
					<button className="button-29">see me!</button>
				</div>
				<div className="margin-left box-project">
					<img src="https://i.pinimg.com/originals/e1/b8/79/e1b879128c55a9c38d8c6a5f57282b46.png" className="img-project ms-3"></img>
					<h3 className="paragraph">Lorem Ipsum</h3>
					<p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
					<button className="button-29">see me!</button>
				</div>
				<div className="margin-left box-project">
					<img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/06cd2159578771.5a4c3e28ae18c.jpg" className="img-project ms-3"></img>
					<h3 className="paragraph">Lorem Ipsum</h3>
					<p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
					<button className="button-29">see me!</button>
				</div>
				<div className="margin-left box-project">
					<img src="https://i.pinimg.com/736x/3a/81/0f/3a810f0b7ec105cff334c412d9c9ed45.jpg" className="img-project ms-3"></img>
					<h3 className="paragraph">Lorem Ipsum</h3>
					<p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
					<button className="button-29">see me!</button>
				</div>
			</div>
		</div>
	)
};
