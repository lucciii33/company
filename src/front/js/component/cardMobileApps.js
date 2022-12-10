import React, { Children } from "react";
import { motion } from "framer-motion"
import desing from "../../img/design.png";

export const CardMobileApp = ({ title, description, icon }) => {
    return (
        <motion.div className="box-card-mobile-app"
            whileHover={{
                boxShadow: "0px, 0px, 8px, rgba(255, 255, 255)",
                scale: 1.1,
                background: "linear-gradient(291deg, #1c012c 0%, #77acf0 47%)",
                originX: 0,
            }}
        >

            <h3 className="mt-2 text-services">{title}</h3>
            <p className="mt-2 text-services">{description}</p>
            {/* <button className="button-29">Lest Design <i className="fas fa-paint-brush p-2"></i></button> */}
            <div className="">{icon}</div>
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
