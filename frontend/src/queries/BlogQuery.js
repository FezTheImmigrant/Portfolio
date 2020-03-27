import gql from "graphql-tag";

const BLOG_QUERY = gql` 
query Articles {
    articles {
        id
        title
        image{
            url
        }
    }
}`;

export default BLOG_QUERY;