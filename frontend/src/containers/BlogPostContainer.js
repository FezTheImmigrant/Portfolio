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
            <h1>{article.title}</h1>

            <img src={process.env.REACT_APP_BACKEND_URL + article.image.url} />

            <ReactMarkdown source={article.content} />
            <p>
              <Moment format="MMM Do YYYY">{article.published_at}</Moment>
            </p>

          </React.Fragment>
        );
      }}
    </Query>
  );
}