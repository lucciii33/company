import React, { Children, useState } from "react";
import { motion } from "framer-motion";
import desing from "../../img/design.png";

export const Card = ({ title, description, img, type }) => {
  const [hover, setHover] = useState(false)
  return (

    <motion.div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="box-services-home"
      whileHover={{
        boxShadow: "0px, 0px, 8px, rgba(255, 255, 255)",
        scale: 1.1,
        background:
          "linear-gradient(291deg, rgba(28,1,44,1) 0%, rgba(158,1,142,1) 47%)",
        color: "white",
      }}
    >
      <div className="logo-image">{img}</div>
      <h3 className="mt-2 text-services">{title}</h3>
      <p className="mt-2 text-services ubunto">{description}</p>
      <button className={hover ? "button-28" : "button-29"}>
        Let's {type} <i className="fas fa-paint-brush p-2"></i>
      </button>
    </motion.div>
    // <div className="card card-banner-2">
    //     <h5 className="card-title title-banner-color title-banner-box text-center">
    //         {title}
    //     </h5>
    //     <p className="card-text description-banner">{description}</p>
    //     <div className="pe-2">{img}</div>
    // </div>
  );
};
