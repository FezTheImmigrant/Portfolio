import React, { Component } from "react";

import {Link} from "react-router-dom";


export class Card extends Component {
    render() {
        const article = this.props.article;
        return (
            <Link to={`/article/${article.id}`} >
                <img
                    src={"http://localhost:1337" + article.image.url}
                    alt={article.image.url}
                    height="100"
                />
                <p id="title" className="uk-text-large">
                    {article.title}
                </p>
            </Link>
        );
    }
}

export default Card;