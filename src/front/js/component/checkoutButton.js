import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CheckOutButton = () => {

    const { store, actions } = useContext(Context);
    //adds the event listener on initial render and cleans it up when finished.
    useEffect(() => {

    }, []);

    return (
        <div className="">
            <button className="btn btn-primary" onClick={() => actions.createOrder()}>Checkout</button>
        </div>
    );
};