import React from "react"
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
            <div className="fade-in-no-delay">
              <h1 className="w-full flex justify-center sm:absolute transform sm:translate-y-32 sm:-translate-x-32 z-10 text-white xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-3xl">{post.title}</h1>
              <img className="max-w-xl relative w-8/12 rounded-md sm:ml-auto sm:mr-32 sm:mt-0 mt-5 sm:mx-0 mx-auto transform sm:translate-y-20 sm:opacity-75" src={post.image.url} alt={post.title} />
            </div>
            <div className="custom-black lg:mx-24 md:mx-20 sm:mx-10 mx-2 sm:rounded-none rounded-lg sm:mt-0 mt-5 mb-10 md:flex">
              <div className="w-full lg:mx-20 md:mx-10 mx-5 lg:pt-48 md:pt-32 sm:pt-32">
                <div className="text-white fade-in-short-delay sm:text-md text-sm">
                  Date Created
                </div>
                <Moment className="text-gray-700 text-sm fade-in-short-delay" format="MMM Do YYYY">{post.published_at}</Moment>
              </div>
              <ReactMarkdown className="text-gray-400 md:mr-10 lg:pt-48 md:pt-32 pt-5 md:mx-0 mx-3 lg:text-lg text-sm fade-in-short-delay" source={post.content} />
            </div>


          </div>
        );
      }}
    </Query>
  );
}