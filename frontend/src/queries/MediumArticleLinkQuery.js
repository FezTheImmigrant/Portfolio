
import gql from "graphql-tag";

const MEDIUM_ARTICLES_LINK_QUERY = gql`
query Medium_Article($id: ID!) {
    medium_article (id: $id) {
        id
        title
        url
    }
}
`;

export default MEDIUM_ARTICLES_LINK_QUERY;