import gql from "graphql-tag";

const BLOG_QUERY = gql` 
query Posts {
    posts {
        id
        title
        image{
            url
        }
    }
}`;

export default BLOG_QUERY;