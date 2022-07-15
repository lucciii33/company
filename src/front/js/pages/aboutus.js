import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

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

	return (
		<div className="contai">
			<div>
				<button variant="primary" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setShow(false)}>
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
				</div>
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
