import { gql } from '@apollo/client';

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

export const QUERY_USER_WORKOUTS = gql`
  query listUserWorkouts($workoutType: String, $userCreated: Boolean) {
    listUserWorkouts(workoutType: $workoutType, userCreated: $userCreated) {
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


// export const QUERY_WORKOUT_TYPES = gql`
//   query typeOfExercises {
//     workouts {
//       workoutType
//       userCreated
//       exercises {
//         exerciseName
//         bodyArea
//       }
//     }
//   }
// `;
