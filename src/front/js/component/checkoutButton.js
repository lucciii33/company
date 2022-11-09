import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const CheckOutButton = () => {
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);
  //adds the event listener on initial render and cleans it up when finished.
  useEffect(() => {}, []);

  return (
    <div className="">
      <button
        className="btn btn-primary"
        onClick={
          () => actions.createOrder()
          //   .then((data) => {
          //     console.log(data);
          //     return (window.location.href = data.url.url);
          //     return navigate(`${data.url.url}`);
          //   })
        }
      >
        Checkout
      </button>
    </div>
  );
};
