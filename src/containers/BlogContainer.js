import React, { Component } from "react";

import Blog from "../components/Blog";

import Query from "../components/Query";

import BLOG_QUERY from "../queries/BlogQuery"; 

export class BlogContainer extends Component {
    render() {
        return (
            <div className="lg:pt-40 pt-32 min-h-screen">
                <h1 className="text-white lg:text-6xl sm:text-4xl text-3xl text-center fade-in-no-delay"> Machine Learning Blog </h1>
                <div className="text-gray-400 sm:text-xl text-xs text-center lg:mx-64 md:mx-32 sm:mx-32 mx-10  fade-in-no-delay mb-10">
                    Welcome! This blog page is home to my thoughts on the world of Artificial Intelligence and Machine Learning.
                     I mainly write about my new discoveries on my journey to AI mastery, but so long as a topic pertains to AI/ML,
                      it may find its way into my blog.
    
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