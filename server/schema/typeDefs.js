const { gql } = require('apollo-server-express');

const typeDefs = gql`
 type User {
    _id: ID!
    username: String!
    email: String!
    workouts: [Workout]
 }

 type Query {
    workout: [Workout]
    user(username: String): User
 }


 type Mutation {
    createUser(username: String!, email: String!, password: String!) : Auth
    deleteUser(_id: String!) : User
    login(email; String, password: String): Auth
 }


`;

module.exports = typeDefs;
