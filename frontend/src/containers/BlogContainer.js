import React, { Component } from "react";

import Blog from "../components/Blog";

import BlogHeader from "../resources/blogHeader.jpg"

import Query from "../components/Query";

import BLOG_QUERY from "../queries/BlogQuery"; 

export class BlogContainer extends Component {
    render() {
        return (
            <div className="mt-20">
                <h1 className="text-white ml-5 text-4xl fade-in-no-delay"> Machine Learning Blog </h1>
                <Query query={BLOG_QUERY}>
                    {({ data: { posts } }) => {
                        return <Blog posts={posts} />;
                    }}
                </Query>
            </div>
        );
    }
}

const blogHeaderStyle = {
    backgroundImage: `url(${BlogHeader})`,
    backgroundColor: 'whited'
}

export default BlogContainer;