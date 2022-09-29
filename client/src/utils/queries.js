import { gql } from '@apollo/client';
//to grab a user
export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      workouts {
        _id
      workoutName
      workoutType
      userCreated
    }
  }
  }
`;
//to check to see if they are logged in
export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      workouts {
        _id
        workoutName
        workoutType
        userCreated
        }
      }
      }
`;
// grabs all workouts 
export const QUERY_WORKOUTS = gql`
  query workouts {
    workouts {
      _id
      workoutName
      workoutType
      userCreated
      exercises {
        exerciseName
        description
        duration
        bodyArea
        link
        img
      }
    }
  }
`;
//grabs all of user created workouts
export const QUERY_USER_WORKOUTS = gql`
  query listUserWorkouts($workoutType: String, $userCreated: Boolean) {
    listUserWorkouts(workoutType: $workoutType, userCreated: $userCreated) {
      _id
      workoutName
      workoutType
      userCreated
      exercises {
        exerciseName
        description
        duration
        bodyArea
        link
        img
      }
    }
  }
`;

export const QUERY_ALL_USER_WORKOUTS = gql`
  query listAllUserWorkouts($userCreated: Boolean) {
    listAllUserWorkouts(userCreated: $userCreated) {
      _id
      workoutName
      workoutType
      userCreated
      exercises {
        exerciseName
        description
        duration
        bodyArea
        link
        img
      }
    }
  }
`;
//grabs normal workouts
export const QUERY_ALL_STANDARD_WORKOUTS = gql`
  query listAllStandardWorkouts($userCreated: Boolean) {
    listAllStandardWorkouts(userCreated: $userCreated) {
      _id
      workoutName
      workoutType
      userCreated
      exercises {
        exerciseName
        description
        duration
        bodyArea
        link
        img
      }
    }
  }
`;
//grabs exercises
export const QUERY_EXERCISES = gql`
  query fullBodyExercises {
  fullBodyExercises {
    exerciseName
    description
    link
    img
  }
}
`;
//grabs all workouts under a specific workout type
export const QUERY_SPECIFIC_WORKOUT_TYPE = gql`
  query specificWorkouts($workoutType: String, $userCreated: Boolean) {
    specificWorkouts(workoutType: $workoutType, userCreated: $userCreated) {
      _id
      workoutName
      workoutType
      userCreated
      exercises {
        exerciseName
        description
        duration
        bodyArea
        link
      }
    }
  }
`;
//gets a specific workout
export const QUERY_SPECIFIC_WORKOUT = gql`
query findWorkOutByID ($id: ID!){
  findWorkOutByID(_id: $id) {
    workoutName
    exercises {
      exerciseName
      duration
      link
      img
  }
}
}
`;


