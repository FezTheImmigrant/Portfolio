import React, { Component } from "react";
import Arrow from "../resources/arrow.svg";

import {Link} from "react-router-dom";


export class RightCard extends Component {
    render() {
        const post = this.props.post;
        return (
            <div className="flex justify-end">
                <p id="title" className="my-auto transform text-white text-2xl mr-20">
                    {post.title}
                    <a href={`/post/${post.id}`} className="flex mt-10 justify-end menu-pulse hover:no-underline">
                        <img src={Arrow} />
                        <p className="text-base ml-1 text-white">Read More</p>
                    </a>
                </p>
                <a href={`/post/${post.id}`} className="w-2/6 mr-24 mt-20">
                    <img
                    className="image-pulse rounded-md border-2 border-black hover:border-white"
                    src={"http://localhost:1337" + post.image.url}
                    alt={post.image.url}
                    />
                </a>
            </div>
        );
    }
}

export default RightCard;