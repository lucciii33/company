import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Aboutus } from "./pages/aboutus";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";
import { ContactUs } from "./pages/contact";
import { Projects } from "./pages/projects";
import { Questions } from "./pages/questions";
import { Services } from "./pages/services";
import { Payment } from "./pages/payment";
import { Success } from "./pages/success";
import { Cancel } from "./pages/cancel";
import { WebDevelopment } from "./pages/webDevelopment";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import "../fonts/RobloxBlackOutline.ttf";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Success />} path="/success" />
            <Route element={<WebDevelopment />} path="/webDevelopment" />
            <Route element={<Cancel />} path="/cancel" />
            <Route element={<Questions />} path="/questions" />
            <Route element={<Payment />} path="/payment" />
            <Route element={<Services />} path="/services" />
            <Route element={<Aboutus />} path="/aboutus" />
            <Route element={<ContactUs />} path="/contact" />
            <Route element={<Single />} path="/single/:theid" />
            <Route element={<Projects />} path="/projects" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </>
  );
};

export default injectContext(Layout);
