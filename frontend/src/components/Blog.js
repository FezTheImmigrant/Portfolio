import React, { Component } from "react";

import LeftCard from "./LeftCard";
import RightCard from "./RightCard";

function LeftOrRightCard(props) {
    const indexValue = props.indexValue;
    const post = props.post;

    if (indexValue % 2 === 0) {
        return <LeftCard post={post} key={`posts_${post.id}`} />;
    }
    else {
        return <RightCard post={post} key={`posts_${post.id}`} />
    }
}

export class Blog extends Component {

    render() {
        const posts = this.props.posts;

        return (
            <div className="fade-in-short-delay">
                <div className="flex flex-wrap mx-40">
                    {posts.map((post,i) => {
                        return <LeftOrRightCard post={post} indexValue={i}/>
                    })}
                </div>
            </div>
        );
    }
} 

export default Blog;