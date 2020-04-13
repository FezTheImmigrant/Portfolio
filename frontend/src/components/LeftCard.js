import React, { Component } from "react";
import Moment from "react-moment";

function ToggleTitle(props) {
    var isMouseOverImage = props.isMouseOverImage;
    var post = props.post;

    if (isMouseOverImage) {
        return (
            <div>
                <Moment className="absolute text-white top-center text-2xl pointer-events-none fade-in-no-delay-fast mt-5" format="MMM Do YYYY">{post.published_at}</Moment>
                <p className="absolute text-white center text-3xl text-center pointer-events-none fade-in-no-delay-fast">{post.title}</p>
            </div>
        );
    }

    return <React.Fragment/>
}


export class LeftCard extends Component {
    state = {
        isMouseOverImage: false,
    };

    handleHover = () => {
        this.setState( state => ({
            isMouseOverImage: true
        }));
    }
    handleUnHover = () => {
        this.setState( state => ({
            isMouseOverImage: false
        }));
    }
    render() {
        const post = this.props.post;
        return (
            <div className="w-1/2 flex justify-center transform translate-x-10">
                <div className=" relative mt-10 blog-card">
                    <a href={`/post/${post.id}`}>
                        <img
                            className=" rounded-md border-2 border-black w-full h-full dark-on-hover"
                            onMouseEnter={this.handleHover}
                            onMouseOut={this.handleUnHover}
                            src={"http://localhost:1337" + post.image.url}
                            alt={post.image.url}
                        />
                    </a>
                    <ToggleTitle isMouseOverImage={this.state.isMouseOverImage} post={post} />
                </div>
            </div>
        );
    }
}

export default LeftCard;