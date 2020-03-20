import React from "react";

import {Switch, Route} from "react-router-dom";

import Nav from "../../components/Nav";
import Home from "../../components/Home"
import Articles from "../Articles";
import Article from "../Article";

function App () {
    return (
        <div className="App">
            <Nav />
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/blog" component={Articles} exact />
                <Route path="/article/:id" component={Article} exact/>
            </Switch>
        </div> 
    );
}

export default App;