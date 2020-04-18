import React, { Component } from "react";

import Blog from "../components/Blog";

import Query from "../components/Query";

import BLOG_QUERY from "../queries/BlogQuery"; 

export class BlogContainer extends Component {
    render() {
        return (
            <div className="lg:pt-40 pt-32 min-h-screen">
                <h1 className="text-gray-700 lg:text-6xl sm:text-4xl text-3xl text-center fade-in-no-delay"> Machine Learning Blog </h1>
                <div className="text-gray-300 sm:text-xl text-xs text-center lg:mx-64 md:mx-32 sm:mx-32 mx-10  fade-in-no-delay mb-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Quis viverra nibh cras pulvinar. In fermentum posuere urna nec tincidunt.
                </div>
                <div className="mx-auto">
                    <Query query={BLOG_QUERY}>
                        {({ data: { posts } }) => {
                            return <Blog posts={posts} />;
                        }}
                    </Query>
                </div>
            </div>
        );
    }
}

export default BlogContainer;