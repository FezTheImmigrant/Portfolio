import React, { Component } from "react";

import Card from "./Card";

export class Blog extends Component {

    render() {
        const posts = this.props.posts;

        return (
            <div className="lg:flex flex-wrap">
                {posts.map((post, i) => {
                    return <Card post={post} dataType={this.props.dataType} isLeft={i % 2 === 0} key={`posts_${post.id}`} />
                })}
            </div>
        );
    }
} 

export default Blog;