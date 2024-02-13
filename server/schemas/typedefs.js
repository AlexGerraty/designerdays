const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Expertise {
    _id: ID
    name: String
  }
  
  type Designer {
    _id: ID
    name: String
    description: String
    image: String
    price: String
    expertise: Expertise
  }

  type User {
    _id: ID
    fullName: String
    email: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    expertises: [Expertise]
    designers(expertise: ID, name: String): [Designer]
    designer(_id: ID!): Designer
    user: User
  }

  type Mutation {
    addUser(fullName: String!, email: String!, password: String!): Auth
    updateUser(fullName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;