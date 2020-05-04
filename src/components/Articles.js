import React, { Component } from 'react'

export class Articles extends Component {
    render() {
        const articles = this.props.articles;
        return (
            <div className="text-xl bg-black rounded-md  border border-white text-right fade-in-no-delay pt-2 w-full">
                <ul className=" max-h-40 min-h-20 overflow-hidden overflow-y-scroll mr-1" id="style-1">
                    {articles.map((article, i) => {
                        return (
                            <li className="mx-1 menu-pulse "id={i}>
                                <a className="hover:no-underline" target="_blank" rel="noopener noreferrer" href={article.url}>
                                    <p className="text-gray hover:text-white text-center">
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