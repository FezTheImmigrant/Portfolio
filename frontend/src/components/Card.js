import React, { Component } from "react";

import {Link} from "react-router-dom";


export class Card extends Component {
    render() {
        const article = this.props.article;
        return (
            <div>
                <a href={`/article/${article.id}`} className="flex hover:no-underline mb-20">
                    <img
                    className="image-pulse rounded-md border-2 border-black hover:border-white"
                    src={"http://localhost:1337" + article.image.url}
                    alt={article.image.url}
                    />

                    <p id="title" className="mt-5 ml-20 text-white text-2xl">
                        {article.title}
                    </p>
                </a>
            </div>
        );
    }
}

export default Card;