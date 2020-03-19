import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import {BrowersRouter as Router} from "react-router-dom";

//Wrap app inside router
ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById("root")
)
