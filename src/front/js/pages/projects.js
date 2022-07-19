import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"

import { Context } from "../store/appContext";

export const Projects = () => {
	const { store, actions } = useContext(Context);



	return (
		<div className="project-container">
			<div className="text-center">
				<h2>What we’re proud of</h2>
				<h6>Over the last 2 years, we’ve delivered more than 500 projects to our clients worldwide. Have a look at some of the examples.</h6>
			</div>
			<div className="d-flex flex-wrap">
				<div className="box ms-4">
					<h2>02</h2>
				</div>
				<div className="box ms-4">
					<h2>02</h2>
				</div>
				<div className="box ms-4">
					<h2>02</h2>
				</div>
				<div className="box ms-4">
					<h2>02</h2>
				</div>
			</div>
		</div>
	)
};
