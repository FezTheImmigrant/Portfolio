import React from "react";

import {Link} from "react-router-dom";

const Card = ( { article }) => {
    return (
        <Link to={`/article/${article.id}`} className="uk-link-reset">
            <div className="uk-card uk-card-muted">
                <div className="uk-card-media-top">
                    <img

                        src={"http://localhost:1337" + article.image.url}
                        alt={article.image.url}
                        height="100"
                        />
                </div>
                <div className ="uk-card-body">
                    <p id="title" className="uk-text-large">
                        {article.title}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default Card;