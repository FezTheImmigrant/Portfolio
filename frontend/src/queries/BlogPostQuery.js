import gql from "graphql-tag";

const BLOG_POST_QUERY = gql`
query Articles($id: ID!) {
    article (id: $id) {
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