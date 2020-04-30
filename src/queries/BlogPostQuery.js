import gql from "graphql-tag";

const BLOG_POST_QUERY = gql`
query Posts($id: ID!) {
    post (id: $id) {
        id
        title
        content
        image {
            url
        }
        published_at
    }
}
`;

export default BLOG_POST_QUERY;