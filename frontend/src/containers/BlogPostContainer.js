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
      {({ data: { article } }) => {
        return (
          <React.Fragment>
            <h1 className="text-white text-6xl text-center mt-20">{article.title}</h1>

            <img className="w-1/2 mt-5 mx-auto rounded-md border-solid border-2" src={process.env.REACT_APP_BACKEND_URL + article.image.url} />

            <ReactMarkdown className="text-white mx-20 mt-10 text-xl" source={article.content} />
            <p className="mt-10">
              <Moment className="text-white mx-10 text-xl" format="MMM Do YYYY">{article.published_at}</Moment>
            </p>

          </React.Fragment>
        );
      }}
    </Query>
  );
}