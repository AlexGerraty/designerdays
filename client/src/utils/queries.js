import { gql } from '@apollo/client';

export const QUERY_DESIGNERS = gql`
  query getDesigners($designer: ID) {
    designers(designer: $designer) {
      _id
      firstname
      lastname
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
    designers {
      _id
      firstname
      lastname
      price
      image
      
    }
  }
`;