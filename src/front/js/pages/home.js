import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import main1 from "../../img/main1.png";
import "../../styles/home.css";
import Chatboot from "../component/Chatboot";

export const Home = () => {
	const { store, actions } = useContext(Context);

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);


	useEffect(() => {
		handleShow()
	}, [])

	return (
		<div>
			{show && <div class="modal" tabindex="-1">
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title">Modal title</h5>
							<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div class="modal-body">
							<p>Modal body text goes here.</p>
						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={handleClose()}>Close</button>
						</div>
					</div>
				</div>
			</div>}
			<p className="testFont">ttttttttestttttttt</p>
			<div className="d-flex conta">
				<div className="m-top">
					<h2 className="text-white title ">Your website needs</h2>
					<div className="d-grid">
						<h1>
							<span className="m-left">to be</span>
							<div className="message">
								<div className="word1">creative</div>
								<div className="word2">modern</div>
								<div className="word3">amused</div>
								<div className="word4">usefull</div>
								<div className="word5">prety</div>
								<div className="word6">cool</div>

							</div>
						</h1>
					</div>
					<h2 className="text-white title2 bg-future">And we can help you </h2>

					<p className="text-white">Lorem ipsum is placeholder text commonly used in the graphic, <br />print, and publishing industries for previewing layouts and visual mockups <br />Lorem ipsum is placeholder text commonly used in the graphic, <br />print, and publishing industries for previewing layouts and visual mockups.</p>
					<div className="d-flex">
						<Link to="/contact" className="text-decoration-none"><button className="button-29 me-3"> Hire us!</button></Link>
						<Link to="/projects" className="text-decoration-none"><button className="button-29"> See protafolio</button></Link>

					</div>
				</div>

				<div className="">
					<img src={main1} className="imagemain"></img>
				</div>
			</div >
			<Chatboot></Chatboot>
		</div>
	);
};
