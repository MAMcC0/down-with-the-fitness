import { gql } from '@apollo/client';

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
  query listUserWorkouts {
    listUserWorkouts {
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
    specificWorkouts(workoutType: $workoutType, usercreated: $userCreated) {
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
