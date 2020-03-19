import React from "react";

import ReactDOM from "react-dom";

import {ApolloProvider } from "react-apollo";

import App from "./containers/App";

import client from "./utils/apolloClient";

//Router refers to how an app's end points (URI) respond to client requests
import {BrowserRouter as Router} from "react-router-dom"; 

import "./index.css";

//Wrap app inside router
ReactDOM.render(
    <Router>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </Router>,
    document.getElementById("root")
)