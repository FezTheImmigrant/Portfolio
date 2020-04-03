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
                <div className=" mt-5 py-24 bg-cover bg-center mx-5 border-gray-600 rounded-md border-solid border-2 fade-in-no-delay" style={blogHeaderStyle}>
                    <h2 className="text-white my-20 mx-40 text-2xl fade-in-no-delay"> This area of my portfolio is dedicated to the various topics I
                    find interesting within the world of Machine Learning. I mainly discuss
                        fundemental properties of a plethora of ML models. </h2>

                </div>
                <Query query={BLOG_QUERY}>
                    {({ data: { articles } }) => {
                        return <Blog articles={articles} />;
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