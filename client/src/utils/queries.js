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
query findWorkOutByID ($ID: String){
  findWorkOutByID(_id: $ID) {
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
