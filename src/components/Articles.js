import React, { Component } from 'react'

export class Articles extends Component {
    render() {
        const articles = this.props.articles;
        return (
            <div className="text-2xl black_transparent rounded-md  border border-white text-right fade-in-no-delay pt-2 w-full">
                <ul className=" h-40 overflow-hidden overflow-y-scroll mr-1" id="style-1">
                    {articles.map((article, i) => {
                        return (
                            <li className="mx-10 menu-pulse "id={i}>
                                <a className="hover:no-underline" href={article.url}>
                                    <p className="sm:text-gray sm:hover:text-white text-white">
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