import React, { Component } from 'react'

export class Articles extends Component {
    render() {
        const articles = this.props.articles;
        return (
            <div className="text-4xl black_transparent rounded-l-md text-right fade-in-no-delay pt-2">
                <ul className="h-40 overflow-hidden overflow-y-scroll mr-1" id="style-1">
                    {articles.map((article, i) => {
                        return (
                            <li className="mx-10 menu-pulse "id={i}>
                                <a className="hover:no-underline" href={article.url}>
                                    <p className="text-gray hover:text-white">
                                        {article.title}
                                    </p>
                                </a>
                            </li>);
                    })}
                </ul>
            </div>
        )
    }
}

export default Articles;