import { gql } from '@apollo/client';

export const QUERY_DESIGNERS = gql`
  query getDesigners($desinger: ID) {
    products(designer: $designer) {
      _id
      name
      description
      price
      image
      expertise {
        _id
      }
    }
  }
`;


export const QUERY_ALL_DESIGNERS = gql`
  {
    products {
      _id
      name
      description
      price
      image
      expertise {
        name
      }
    }
  }
`;