import React, { Component } from "react";

import Blog from "../components/Blog";

import Query from "../components/Query";

import BLOG_QUERY from "../queries/BlogQuery";


export class BlogContainer extends Component {
    render() {
        return (
            <React.Fragment>
                <h1> Blog </h1>
                <Query query={BLOG_QUERY}>
                    {({ data: { articles } }) => {
                        return <Blog articles={articles} />;
                    }}
                </Query>
            </React.Fragment>
        );
    }
}

export default BlogContainer;