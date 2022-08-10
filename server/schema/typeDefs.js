const { gql } = require('apollo-server-express');

const typeDefs = gql`
# type for user that includes:
# id, username, email, and the workouts array
  type User {
    _id: ID
    username: String
    email: String
    workouts: [Workout]
  }
# type for Exercise that includes:
# id, exerciseName, description, duration,
# bodyArea, link, & image
  type Exercise {
    _id: ID
    exerciseName: String
    description: String
    duration: Int
    bodyArea: String
    link: String
    img: String
  }
# type for Workout that includes:
# id, workoutName, workoutType, userCreated, createdAt,
# & exercise array
  type Workout {
    _id: ID
    workoutName: String
    workoutType: String
    userCreated: Boolean
    createdAt: String
    exercises: [Exercise]
  }
# type to take in users custom workout
# that indludes: workoutName, workoutType, and exercises array
  input WorkoutInput {
    workoutName: String!
    workoutType: String!
    exercises: [String!]
  }
#type Auth that includes:
# token & user
  type Auth {
    token: ID!
    user: User
  }
# type Query that lists all of the queries
# and required arguments
  type Query {
    user(username: String!): User
    me: User
    workouts: [Workout] 
    typeOfExercises: [Exercise]
    fullBodyExercises: [Exercise]
    specificWorkouts(workoutType: String, userCreated: Boolean): [Workout]
    listUserWorkouts(workoutType: String, userCreated: Boolean): [Workout]
    listAllUserWorkouts(userCreated: Boolean): [Workout]
    listAllStandardWorkouts(userCreated: Boolean): [Workout]
    findWorkOutByID(_id: ID!): [Workout]

  }
  # type Mutation that lists all of the queries
  # and required arguments
   type Mutation {
    createUser(username: String!, email: String!, password: String!) : Auth
    deleteUser(_id: String!) : User
    login(email: String, password: String) : Auth
    createWorkout(workoutInfo: WorkoutInput) : User
    removeWorkout(_id: ID!) : User
    updateUser(_id: ID! , password:String): User
 } 
`;
// exports typeDefs
module.exports = typeDefs;
