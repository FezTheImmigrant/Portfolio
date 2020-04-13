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
          <div className="bg-black min-h-screen pt-20">
            <div className="flex fade-in-no-delay">
              <h1 className="text-white text-6xl ml-48 w-2/5 absolute transform translate-y-32 z-10">{post.title}</h1>
              <img className="w-2/3 ml-auto mr-5 transform translate-y-20" src={process.env.REACT_APP_BACKEND_URL + post.image.url} />
            </div>
            <div className="custom-black mx-24 mb-10 flex">
              <div className="w-full ml-20 pt-48">
                <div className="text-white fade-in-short-delay">
                  Date Created
                </div>
                <Moment className="text-gray-700 text-sm fade-in-short-delay" format="MMM Do YYYY">{post.published_at}</Moment>
              </div>
              <ReactMarkdown className="text-gray-400 mr-40 pt-48 py-20 text-l fade-in-short-delay" source={post.content} />
            </div>


          </div>
        );
      }}
    </Query>
  );
}