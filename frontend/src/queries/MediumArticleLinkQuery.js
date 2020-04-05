
import gql from "graphql-tag";

const MEDIUM_ARTICLES_LINK_QUERY = gql`
query Articles {
    articles {
        id
        title
        url
    }
}
`;

export default MEDIUM_ARTICLES_LINK_QUERY;