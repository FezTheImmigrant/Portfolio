import React, { Component } from "react";

import LeftCard from "./LeftCard";
import RightCard from "./RightCard";

export class Blog extends Component {
    render() {

        const articles = this.props.articles;
        const leftArticles = [];
        const rightArticles = []

        for(let i = 0; i < articles.length; i++) {
            if (i % 2 === 0) {
                leftArticles.push(articles[i])
            }
            else {
                rightArticles.push(articles[i])
            }
        }

        return (
            <div className="fade-in-short-delay">
                <div>
                    {leftArticles.map((article, i) => {
                        return <LeftCard article={article} key={`article__${article.id}`} />;
                    })}
                </div>

                <div>
                    {rightArticles.map((article, i) => {
                        return <RightCard article={article} key={`article__${article.id}`} />;
                    })}
                </div>
            </div>
        );
    }
} 

export default Blog;