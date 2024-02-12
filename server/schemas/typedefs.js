const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type Designer {
    _id: ID
    name: String
    description: String
    image: String
    price: Float
    expertise: Category
  }

  type Booking {
    _id: ID
    bookingDate: String
    designer: [Designer]
  }

  type User {
    _id: ID
    fullName: String
    email: String
    booking: {
        Designer
        bookingDate
    }
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;