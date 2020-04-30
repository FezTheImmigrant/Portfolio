import React, { Component } from "react";
import {Switch, Route} from "react-router-dom";
import Nav from "./components/Nav"
import Home from "./components/Home"
import BlogContainer from "./containers/BlogContainer";
import BlogPostContainer from "./containers/BlogPostContainer";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export class App extends Component {
    render() {
        return (
            <div className="App">
                <Nav />
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/blog" component={BlogContainer} exact />
                    <Route path="/post/:id" component={BlogPostContainer} exact />
                    <Route path="/contact" component={Contact} exact />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default App;