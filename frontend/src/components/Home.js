import React, { Component } from "react";
import HeadShot from "../resources/headshot.jpg"

export class Home extends Component {
    render () {
        return (
            <ul style={flexListStyle}>
                <li>
                    <h1>Sergio Orozco,</h1>
                    <h1>Machine Learning Engineer.</h1>
                    <h3>I'm a full time Software Engineer at Sierra Nevada Coorporation,
                    but I'm a dedicated practicioner of Machine Learning outside of
                            the workplace. This website is home to my studies and achievements.</h3>
                </li>
                <li>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                        <img style={headshotImageStyle} src={HeadShot} />
                    </div>
                </li>

            </ul>
        )
    }
}
const flexListStyle = {
    display: 'flex',
    listStyleType: 'none',
}

const headshotImageStyle = {
    width: '1080px'
}

export default Home;