import React, { useContext } from "react";
import { Context } from "../store/appContext";
import main1 from "../../img/main1.png";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="d-flex conta">
			<div className="m-top">
				<h2 className="text-white title">Your website needs</h2>
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
					<button className="button-29 me-3"> Hire us!</button>
					<button className="button-29"> See protafolio</button></div>
			</div>

			<div>
				<img src={main1} className="imagemain"></img>
			</div>
		</div >
	);
};
