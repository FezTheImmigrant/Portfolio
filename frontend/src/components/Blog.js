import React, { Component } from "react";

import Card from "./Card";

export class Blog extends Component {
    render() {

        const articles = this.props.articles;
        const leftArticlesCount = Math.ceil(articles.length / 5);
        const leftArticles = articles.slice(0, leftArticlesCount);
        const rightArticles = articles.slice(leftArticlesCount, articles.length);
        return (
            <div className="flex mx-20 mt-20">
                <div>
                    {leftArticles.map((article, i) => {
                        return <Card article={article} key={`article__${article.id}`} />;
                    })}
                </div>

                <div>
                    {rightArticles.map((article, i) => {
                        return <Card article={article} key={`article__${article.id}`} />;
                    })}
                </div>
            </div>
        );
    }
} 

export default Blog;