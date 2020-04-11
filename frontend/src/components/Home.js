import React, { Component } from "react";
import HeadShot from "../resources/headshot.jpg"

export class Home extends Component {
    render () {
        return (
            <div className="py-20 ml-20 flex">
                <div className="mt-20 fade-in-no-delay">
                    <h1 className="text-white text-6xl">Hey I'm Sergio,</h1>
                    <h1 className="text-white text-6xl">Machine Learning Engineer.</h1>
                    <h3 className="mt-6 text-white text-2xl">I'm a full time Software Engineer at Sierra Nevada Coorporation,
                    but I'm a dedicated practicioner of Machine Learning outside of
                            the workplace. This website is home to my studies and achievements.</h3>
                </div>
                <div className="mr-40 fade-in-short-delay">
                    <img src={HeadShot} />
                </div>
            </div>
        )
    }
}

export default Home;