import React, { Component } from "react";

import Card from "./Card";

export class Blog extends Component {

    render() {
        const posts = this.props.posts;

        return (
            <div className="lg:flex flex-wrap justify-center">
                {posts.map((post, i) => {
                    return <Card post={post} dataType={this.props.dataType} key={`posts_${post.id}`} />
                })}
            </div>
        );
    }
} 

export default Blog;