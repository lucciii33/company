import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const [language, setLanguage] = useState("en");
  return (
    <div className="navbar bg-ligth navbar-expand-lg  d-flex justify-content-between p-3">
      <div className="container-fluid ">
        <div>
          <Link className="text-decoration-none" to="/">
            <a className="navbar-brand text-black" href="#">
              CODE ILUTION
            </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="text-decoration-none" to="/">
              <a className="nav-link text-black" href="#">
                Home
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="text-decoration-none" to="/aboutus">
              <a className="nav-link text-black" href="#">
                About Us
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="text-decoration-none" to="/contact">
              <a className="nav-link text-black" href="#">
                Contact Us
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="text-decoration-none" to="/questions">
              <a className="nav-link text-black" href="#">
                FQA
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="text-decoration-none" to="/projects">
              <a className="nav-link text-black" href="#">
                Projects
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="text-decoration-none" to="/services">
              <a className="nav-link text-black" href="#">
                Services
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <button
              className="button-29"
              onClick={() => actions.changeLanguege()}
            >
              {store.language == "en" ? "ESPANOL" : "ENGLISH"}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
