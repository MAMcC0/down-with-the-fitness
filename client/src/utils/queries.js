import { gql } from '@apollo/client';



export const QUERY_WORKOUTS = gql`
  query workouts {
    workouts {
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

export const QUERY_WORKOUT_TYPES = gql`
  query workouts {
    workouts {
      workoutType
      userCreated
      exercises {
        exerciseName
        bodyArea
      }
    }
  }
`;

export const QUERY_USER_WORKOUTS = gql`
  query workouts {
    workouts {
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


export const QUERY_EXERCISES = gql`
  query fullBodyExercises {
      exercises {
        exerciseName
        description
        duration
        bodyArea
        link
      }
    }
`;

export const QUERY_EXERCISE_LINK = gql`
  query fullBodyExercises {
      exercises {
        exerciseName
        description
        link
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