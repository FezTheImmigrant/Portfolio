import React, { Component } from "react";

import Blog from "../components/Blog";

import Query from "../components/Query";

import BLOG_QUERY from "../queries/BlogQuery"; 

export class BlogContainer extends Component {
    render() {
        return (
            <div className="pt-40 min-h-screen">
                <h1 className="text-gray-700 text-6xl text-center fade-in-no-delay"> Machine Learning Blog </h1>
                <div className="text-gray-300 text-xl text-center w-3/5 ml-32 transform translate-x-48 fade-in-no-delay mb-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Quis viverra nibh cras pulvinar. In fermentum posuere urna nec tincidunt.
                </div>
                <Query query={BLOG_QUERY}>
                    {({ data: { posts } }) => {
                        return <Blog posts={posts} />;
                    }}
                </Query>
            </div>
        );
    }
}

export default BlogContainer;