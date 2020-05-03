import React, { Component } from "react";
import Moment from "react-moment";

function ToggleTitle(props) {
    var isMouseOverImage = props.isMouseOverImage;
    var isInView = props.isInView
    var post = props.post;

    var fade = isMouseOverImage || (window.innerWidth < 1024 && isInView) ? " fade-in-no-delay-fast" : " fade-out-no-delay-fast";
    return (
        <div>
            <Moment className={"absolute text-white top-center blog-card-date pointer-events-none mt-5" + fade} format="MMM Do YYYY">{post.published_at}</Moment>
            <p className={"absolute text-white center blog-card-title text-center pointer-events-none" + fade}>{post.title}</p>
        </div>
    );
}

function isScrolledIntoView(elem) {
    var rect = elem.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    return (elemTop >= 0) && (elemBottom <= window.innerHeight) ;
}


export class Card extends Component {
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
        const position = this.props.isLeft ? " lg:translate-x-10" : " lg:-translate-x-10";
        const margin = this.props.isLeft ? " mt-10" : " mt-20"

        return (
            <div className={"lg:w-1/2 w-full flex justify-center transform" + position}>
                <div className={"relative blog-card" + margin}>
                    <a href={`/post/${post.id}`} id={"card"+post.id}>
                        <img
                            className={"rounded-md w-full h-full" + (window.innerWidth < 1024 ? (this.state.isInView || this.state.isMouseOverImage ? " opacity-fade-out-50": " opacity-fade-in") : this.state.isMouseOverImage ? " opacity-fade-out-50" : " opacity-fade-in")}
                            onMouseEnter={this.handleHover}
                            onMouseOut={this.handleUnHover}
                            src={post.image.url}
                            alt={post.title + "Cover Image"}
                        />
                    </a>
                    <ToggleTitle isMouseOverImage={this.state.isMouseOverImage} isInView={this.state.isInView} post={post} />
                </div>
            </div>
        );
    }
}
export default Card;