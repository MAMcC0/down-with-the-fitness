const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type User {
    _id: ID!
    username: String!
    email: String
    workouts: [Workout]
  }

  type Exercise {
    _id: ID!
    exerciseName: String
    description: String
    duration: Int
    bodyArea: String
    link: String
  }

  type Workout {
    _id: ID!
    workoutName: String
    workoutType: String
    userCreated: Boolean
    createdAt: String
    exercises: [Exercise]
  }


  input WorkoutInput {
    id: ID!
    workoutName: String
    workoutType: String
    exercises: [ID!]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    listUserWorkouts(userID: ID!): User
    workouts: [Workout] 
    typeOfExercises: [Exercise]
    fullBodyExercises: [Exercise]
  }
  
   type Mutation {
    createUser(username: String!, email: String!, password: String!) : Auth
    deleteUser(_id: String!) : User
    login(email: String, password: String) : Auth
    createWorkout(workoutInfo: WorkoutInput) : Workout
    removeWorkout(workoutId: ID!) : Workout
    updateUser(_id: ID! , password:String): User
 } 
`;

module.exports = typeDefs;
