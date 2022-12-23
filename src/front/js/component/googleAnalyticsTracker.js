import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useLocation } from "react-router-dom";


export const GoogleAnalyticsTracker = () => {
    const { store, actions } = useContext(Context);
    const location = useLocation();

    useEffect(() => {
        window.gtag("event", "page_view", {
            page_path: location.pathname + location.search + location.hash,
            page_search: location.search,
            page_hash: location.hash,
        });
    }, [location]);
    return (<>

    </>)
};
