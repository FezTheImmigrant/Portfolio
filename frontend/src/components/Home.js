import React, { Component } from "react";
import HeadShot from "../resources/headshot.jpg"

export class Home extends Component {
    render () {
        return (
            <div className="mt-20 ml-40 flex">
                <div className="mt-20">
                    <h1 className="text-white text-4xl">Sergio Orozco,</h1>
                    <h1 className="text-white text-4xl">Machine Learning Engineer.</h1>
                    <h3 className="mt-6 text-white text-2xl">I'm a full time Software Engineer at Sierra Nevada Coorporation,
                    but I'm a dedicated practicioner of Machine Learning outside of
                            the workplace. This website is home to my studies and achievements.</h3>
                </div>
                <div className="mr-40 ">
                    <img src={HeadShot} />
                </div>
            </div>
        )
    }
}

export default Home;