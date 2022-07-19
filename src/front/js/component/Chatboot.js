import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Chatboot extends Component {

    componentDidMount() {

        (function (d, m) {
            var kommunicateSettings =
                { "appId": "13077b6f0debefeddf4f8dd856d4a6ea3", "popupWidget": true, "automaticChatOpenOnNavigation": true };
            var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
            s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
            window.kommunicate = m; m._globals = kommunicateSettings;
        })(document, window.kommunicate || {});
        /* NOTE : Use web server to view HTML files as real-time update will not work if you directly open the HTML file in the browser. */

    }

    render() {
        return (
            <div>
                {/* <h2>Write us</h2> */}
            </div>
        )
    }
}

export default Chatboot

