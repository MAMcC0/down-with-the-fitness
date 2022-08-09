const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type User {
    _id: ID
    username: String
    email: String
    workouts: [Workout]
  }

  type Exercise {
    _id: ID
    exerciseName: String
    description: String
    duration: Int
    bodyArea: String
    link: String
    img: String
  }

  type Workout {
    _id: ID
    workoutName: String
    workoutType: String
    userCreated: Boolean
    createdAt: String
    exercises: [Exercise]
  }


  input WorkoutInput {
    workoutName: String!
    workoutType: String!
    exercises: [String!]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    workouts(userCreated: Boolean): [Workout] 
    # typeOfExercises: [Exercise]
    fullBodyExercises: [Exercise]
    specificWorkouts(workoutType: String, userCreated: Boolean): [Workout]
    listUserWorkouts(workoutType: String, userCreated: Boolean): [Workout]
    findWorkOutByID(_id: ID!): [Workout]

  }
  
   type Mutation {
    createUser(username: String!, email: String!, password: String!) : Auth
    deleteUser(_id: String!) : User
    login(email: String, password: String) : Auth
    createWorkout(workoutInfo: WorkoutInput) : User
    removeWorkout(_id: ID!) : User
    updateUser(_id: ID! , password:String): User
 } 
`;

module.exports = typeDefs;
