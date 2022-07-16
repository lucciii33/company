import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (

		<nav className="navbar bg-ligth navbar-expand-lg  d-flex justify-content-between">
			<div className="container-fluid ">
				<div>
					<a className="navbar-brand text-black" href="#">ILUTION</a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>

				</div>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a className="nav-link active text-black" aria-current="page" href="#">Home</a>
						</li>
						<li className="nav-item">
							<Link className="text-decoration-none" to="/aboutus"><a className="nav-link text-black" href="#">About Us</a></Link>
						</li>
						<li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle text-black" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								Dropdown
							</a>
							<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
								<li><a className="dropdown-item" href="#">Action</a></li>
								<li><a className="dropdown-item" href="#">Another action</a></li>
								<li><a className="dropdown-item" href="#">Something else here</a></li>
							</ul>
						</li>
					</ul>
					<form className="d-flex">
						<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
						<button className="btn btn-outline-success" type="submit">Search</button>
					</form>
				</div>
			</div>
		</nav>

	);
};
