const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String
    workouts: [Workout]
  }

  type Workout {
    wrkoutId: ID!
    workoutName: [String]
    userCreated: Boolean
    createdAt: Date
    link: String
    savedExercises: [Exercise]
  }

  type Exercise {
    exerciseId: ID!
    exerciseName: String
    description: String
    duration: Number
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    listUserWorkouts: User
    workouts: Workout
  }


  type Mutation {
    # login(email: String!, password: String!): Auth
    # addUser(username: String!, email: String!, password: String!): Auth
    createWorkout(wrkoutData: BookInput): User
    removeWorkout(wrkoutId: ID!): User
  }
`;

module.exports = typeDefs;
