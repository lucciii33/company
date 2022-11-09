import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CheckOutButton } from "../component/checkoutButton";

import { Context } from "../store/appContext";

export const Payment = () => {
  const { store, actions } = useContext(Context);

  //adds the event listener on initial render and cleans it up when finished.
  useEffect(() => {}, []);

  return (
    <div className="contai bg-ligth">
      <h1>buy</h1>
      <div>
        <div class="card" style={{ width: "18rem" }}>
          <img src="..." class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Small Project</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>

      <div>
        <div class="card" style={{ width: "18rem" }}>
          <img src="..." class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Big Project</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
      <CheckOutButton />
    </div>
  );
};
