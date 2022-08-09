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
  query workouts($workoutType: String) {
    workouts(workoutType: $workoutType) {
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
