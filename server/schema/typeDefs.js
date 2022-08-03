const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type User {
    _id: ID!
    username: String!
    email: String
    workouts: [Workout]
  }

  type Workout {
    workoutId: ID!
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
  input WorkoutInput {
    workoutName: String
    workoutType: String
    exercises: [ID!]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    listUserWorkouts: User
    workouts: Workout
    user(username: String): User
  }
  
   type Mutation {
    createUser(username: String!, email: String!, password: String!) : Auth
    deleteUser(_id: String!) : User
    login(email: String, password: String) : Auth
    createWorkout(workoutInfo: WorkoutInput) : Workout
 }


 
`;

module.exports = typeDefs;
