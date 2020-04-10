import React, { Component } from "react";
import { useParams } from "react-router";
import Query from "../components/Query";
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";

import BLOG_POST_QUERY from "../queries/BlogPostQuery";

export default function BlogPostContainer() {
  let { id } = useParams();
  return (
    <Query query={BLOG_POST_QUERY} id={id}>
      {({ data: { post } }) => {
        return (
          <div className="bg-black">
            <div className="flex">
              <h1 className="text-white text-6xl ml-32 w-1/3 absolute transform translate-y-32 z-10">{post.title}</h1>
              <img className="w-2/3 ml-auto mr-5 transform translate-y-20" src={process.env.REACT_APP_BACKEND_URL + post.image.url} />
            </div>
            <div className="custom-black mx-24 mb-10 flex">
              <div className="w-full ml-20 pt-48">
                <div className="text-white">
                  Date Created
                </div>
                <Moment className="text-gray-700 text-sm" format="MMM Do YYYY">{post.published_at}</Moment>
              </div>
              <ReactMarkdown className="text-gray-400 font-serif mr-40 pt-48 text-l" source={post.content} />
            </div>


          </div>
        );
      }}
    </Query>
  );
}