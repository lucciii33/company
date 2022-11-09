import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Success = () => {
	//adds the event listener on initial render and cleans it up when finished.
	useEffect(() => {

	}, []);

	return (
		<div className="">
			<h1>success</h1>
		</div>
	);
};
