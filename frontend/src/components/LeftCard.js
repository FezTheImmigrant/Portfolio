import React, { Component } from "react";
import Arrow from "../resources/arrow.svg";

import {Link} from "react-router-dom";


export class LeftCard extends Component {
    render() {
        const post = this.props.post;
        return (
            <div className="flex mt-10 ml-10">
                <a href={`/post/${post.id}`} className=" w-2/6">
                    <img
                        className="image-pulse rounded-md border-2 border-black hover:border-white w-full"
                        src={"http://localhost:1337" + post.image.url}
                        alt={post.image.url}
                    />
                </a>
                <p id="title" className="ml-10 my-auto text-white text-2xl ">
                    {post.title}
                    <a href={`/post/${post.id}`} className="flex menu-pulse hover:no-underline mt-5">
                        <img src={Arrow}  />
                        <p className="text-base ml-1 text-white">Read More</p>
                    </a>
                </p>
            </div>
        );
    }
}

export default LeftCard;