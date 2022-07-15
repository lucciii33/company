import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Aboutus = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="contai">
			<div>

				<div className="text-center">

					<h5 className="ourvision">OUR VISION</h5>
					<h2 className="text-gradient">Getting the most out <br /> of your web presence</h2>
					<h4 className="paragraph">We’re a unique combination of a software house and interactive agency,<br />
						creating custom web solutions custom-fit to support the growth of modern startups.

					</h4>
					<p className="paragraph">With top-notch technical foundations, unique design, and engaging content,<br /> we build smooth customer journeys with a proven track record of skyrocketing conversion rates.</p>
				</div>
			</div>
		</div>
	);
};
