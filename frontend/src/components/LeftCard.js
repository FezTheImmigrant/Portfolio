import React, { Component } from "react";
import Moment from "react-moment";

function ToggleTitle(props) {
    var isMouseOverImage = props.isMouseOverImage;
    var isInView = props.isInView
    var post = props.post;

    if ((/*window.innerWidth > 1024 &&*/ isMouseOverImage) || (window.innerWidth < 1024 && isInView )) {
        return (
            <div>
                <Moment className="absolute text-white top-center text-2xl pointer-events-none fade-in-no-delay-fast mt-5" format="MMM Do YYYY">{post.published_at}</Moment>
                <p className="absolute text-white center text-3xl text-center pointer-events-none fade-in-no-delay-fast">{post.title}</p>
            </div>
        );
    }
        return (
            <div>
                <Moment className="absolute text-white top-center text-2xl pointer-events-none fade-out-no-delay-fast mt-5" format="MMM Do YYYY">{post.published_at}</Moment>
                <p className="absolute text-white center text-3xl text-center pointer-events-none fade-out-no-delay-fast">{post.title}</p>
            </div>
        );
}

function isScrolledIntoView(elem) {
    var rect = elem.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    return (elemTop >= 0) && (elemBottom <= window.innerHeight) ;
}


export class LeftCard extends Component {
    constructor(props) {
        super(props);
        document.addEventListener('scroll', this.handleScroll,true);
    }
    state = {
        isMouseOverImage: false,
        isInView: false
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
    handleScroll = () => {
        var elem = document.getElementById("card"+this.props.post.id);

        this.setState( state => ({
            isInView: isScrolledIntoView(elem)
        }));
    }

    render() {
        const post = this.props.post;
        return (
            <div className="lg:w-1/2 w-full flex justify-center transform lg:translate-x-10">
                <div className="relative mt-10 blog-card">
                    <a href={`/post/${post.id}`} id={"card"+post.id}>
                        <img
                            className={"rounded-md border-2 border-black w-full h-full lg:hover:opacity-50 duration-1000" + (window.innerWidth < 1024 ? (this.state.isInView ? " opacity-fade-out": " opacity-fade-in") : "")}
                            onMouseEnter={this.handleHover}
                            onMouseOut={this.handleUnHover}
                            src={"http://localhost:1337" + post.image.url}
                            alt={post.image.url}
                        />
                    </a>
                    <ToggleTitle isMouseOverImage={this.state.isMouseOverImage} isInView={this.state.isInView} post={post} />
                </div>
            </div>
        );
    }
}

const opacityHalf = {
    opacity: 0.5
}
const opacityFull = {
    opacity: 1
}

export default LeftCard;