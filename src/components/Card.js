import React, { Component } from "react";
import Moment from "react-moment";
import LazyLoad from 'react-lazy-load';
import ImageLoader from './ImageLoader'

function ToggleTitle(props) {
    var isMouseOverImage = props.isMouseOverImage;
    var isInView = props.isInView
    var post = props.post;

    var fade = isMouseOverImage || (window.innerWidth < 1024 && isInView) ? " opacity-fade-in" : " opacity-fade-out";
    return (
        <div>
            {props.dataType === "blog" &&
                <Moment className={"absolute text-white top-center blog-card-date pointer-events-none mt-5" + fade} format="MMM Do YYYY">{post.published_at}</Moment>
            }
            <h3 className={"absolute center text-white blog-card-title text-center pointer-events-none" + fade}>{post.title}</h3>
        </div>
    );
}

function isScrolledIntoView(elem) {
    if (elem === null) {
        return false;
    }
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
        isInView: false,
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

        var fade = ""

        if ((window.innerWidth < 1024 && this.state.isInView) || this.state.isMouseOverImage) {
            fade = "image-darken"
        }
        else {
            fade = "image-brighten"
        }

        return (
            <div className={"lg:w-1/2 w-full flex justify-center transform" + position}>
                <div className={"relative w-8/12" + margin}>
                    {this.props.dataType === "blog" && 
                        <LazyLoad
                            debounce={false}
                            throttle={250}>
                            <a href={`/post/${post.id}`} id={"card" + post.id}>
                                <ImageLoader
                                    className={"rounded-md " + fade}
                                    onMouseEnter={this.handleHover}
                                    onMouseOut={this.handleUnHover}
                                    src={post.image.url}
                                    alt={post.title}
                                />
                            </a>
                        </LazyLoad>
                    }
                    {this.props.dataType === "article" && 
                        <LazyLoad
                            debounce={false}
                            throttle={250}>
                            <a href={post.url} target="_blank" rel="noopener noreferrer" id={"card" + post.id}>
                                <ImageLoader
                                    className={"rounded-md " + fade}
                                    onMouseEnter={this.handleHover}
                                    onMouseOut={this.handleUnHover}
                                    onLoad={this.onLoad}
                                    src={post.image.url}
                                    alt={post.url}
                                />
                            </a>
                        </LazyLoad>
                    }
                    <ToggleTitle isMouseOverImage={this.state.isMouseOverImage} isInView={this.state.isInView} post={post} dataType={this.props.dataType} />
                </div>
            </div>
        );
    }
}
export default Card;