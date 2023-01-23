import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import logo from "../../img/Group3.png";
import tech from "../../img/tech.jpg";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse,
} from "mdb-react-ui-kit";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const [language, setLanguage] = useState("en");
  const [showNavSecond, setShowNavSecond] = useState(false);
  return (
    // <div className="navbar bg-light navbar-expand-lg d-flex justify-content-between px-3">
    //   <div className="container-fluid ">
    //     <div>
    //       <Link className="text-decoration-none" to="/">
    //         <img src={logo} className="img-logo"></img>
    //       </Link>
    //       <button
    //         className="navbar-toggler"
    //         type="button"
    //         data-bs-toggle="collapse"
    //         data-bs-target="#navbarSupportedContent"
    //         aria-controls="navbarSupportedContent"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation"
    //       >
    //         <span className="navbar-toggler-icon"></span>
    //       </button>
    //     </div>
    //   </div>
    //   <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //       <li className="nav-item">
    //         <div className="nav-link dropdown">
    //           <a
    //             className=" dropdown-toggle text-dark text-decoration-none"
    //             href="#"
    //             role="button"
    //             id="dropdownMenuLink"
    //             data-bs-toggle="dropdown"
    //             aria-expanded="false"
    //           >
    //             Services
    //           </a>

    //           <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
    //             <Link to="/services" className="text-decoration-none">
    //               <li>
    //                 <a className="dropdown-item " href="#">
    //                   All services
    //                 </a>
    //               </li>
    //             </Link>
    //             <Link to="/webDevelopment" className="text-decoration-none">
    //               <li>
    //                 <a className="dropdown-item" href="#">
    //                   Web Development
    //                 </a>
    //               </li>
    //             </Link>
    //             <Link to="/mobileApps" className="text-decoration-none">
    //               <li>
    //                 <a className="dropdown-item" href="#">
    //                   Mobile Apps
    //                 </a>
    //               </li>
    //             </Link>
    //           </ul>
    //         </div>
    //       </li>
    //       <li className="nav-item">
    //         <Link className="text-decoration-none" to="/projects">
    //           <a className="nav-link text-black" href="#">
    //             Projects
    //           </a>
    //         </Link>
    //       </li>
    //       <li className="nav-item">
    //         <Link className="text-decoration-none" to="/questions">
    //           <a className="nav-link text-black" href="#">
    //             FAQ
    //           </a>
    //         </Link>
    //       </li>
    //       <li className="nav-item">
    //         <Link className="text-decoration-none" to="/contact">
    //           <a className="nav-link text-black" href="#">
    //             Contact Us
    //           </a>
    //         </Link>
    //       </li>
    //       <li className="nav-item">
    //         <Link className="text-decoration-none" to="/aboutus">
    //           <a className="nav-link text-black" href="#">
    //             About Us
    //           </a>
    //         </Link>
    //       </li>

    //       <li className="nav-item">
    //         <button
    //           className="button-29"
    //           onClick={() => actions.changeLanguege()}
    //         >
    //           {store.language == "en" ? "ESPANOL" : "ENGLISH"}
    //         </button>
    //       </li>
    //     </ul>
    //   </div>
    // </div>
    <>
      <MDBNavbar expand="lg" light bgColor="light">
        <MDBContainer fluid className="">
          <MDBNavbarBrand href="#">
            <Link className="text-decoration-none" to="/">
              <img src={logo} className="img-logo"></img>
            </Link>
          </MDBNavbarBrand>

          <MDBNavbarToggler
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowNavSecond(!showNavSecond)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar show={showNavSecond}>
            <MDBNavbarNav fullWidth={false} right>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <div className="nav-link dropdown">
                    <a
                      className=" dropdown-toggle text-dark text-decoration-none"
                      href="#"
                      role="button"
                      id="dropdownMenuLink"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Services
                    </a>

                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuLink"
                    >
                      <Link to="/services" className="text-decoration-none">
                        <li>
                          <a className="dropdown-item " href="#">
                            All services
                          </a>
                        </li>
                      </Link>
                      <Link
                        to="/webDevelopment"
                        className="text-decoration-none"
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            Web Development
                          </a>
                        </li>
                      </Link>
                      <Link to="/mobileApps" className="text-decoration-none">
                        <li>
                          <a className="dropdown-item" href="#">
                            Mobile Apps
                          </a>
                        </li>
                      </Link>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <Link className="text-decoration-none" to="/projects">
                    <a className="nav-link text-black" href="#">
                      Projects
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="text-decoration-none" to="/questions">
                    <a className="nav-link text-black" href="#">
                      FAQ
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
                  <Link className="text-decoration-none" to="/aboutus">
                    <a className="nav-link text-black" href="#">
                      About Us
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
              {/* <MDBNavbarLink active aria-current='page' href='#'>
                Home
              </MDBNavbarLink>
              <MDBNavbarLink href='#'>Features</MDBNavbarLink>
              <MDBNavbarLink href='#'>Pricing</MDBNavbarLink>
              <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
                Disabled
              </MDBNavbarLink> */}
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
};
