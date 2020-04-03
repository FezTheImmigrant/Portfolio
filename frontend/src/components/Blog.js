import React, { Component } from "react";

import LeftCard from "./LeftCard";
import RightCard from "./RightCard";

export class Blog extends Component {
    render() {

        const posts = this.props.posts;
        const leftPosts = [];
        const rightPosts = []

        for(let i = 0; i < posts.length; i++) {
            if (i % 2 === 0) {
                leftPosts.push(posts[i])
            }
            else {
                rightPosts.push(posts[i])
            }
        }

        return (
            <div className="fade-in-short-delay">
                <div>
                    {leftPosts.map((post, i) => {
                        return <LeftCard post={post} key={`posts__${post.id}`} />;
                    })}
                </div>

                <div>
                    {rightPosts.map((post, i) => {
                        return <RightCard post={post} key={`posts__${post.id}`} />;
                    })}
                </div>
            </div>
        );
    }
} 

export default Blog;