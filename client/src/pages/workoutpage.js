import React, { useEffect } from 'react';
import WorkoutChoices from '../components/workoutchoices'
import { useQuery } from '@apollo/client';
import { QUERY_WORKOUTS } from '../utils/queries';
// import { useLocation, useNavigate } from 'react-router-dom';

function WorkoutPage() {
  const {data, loading} = useQuery(QUERY_WORKOUTS);
  let workouts = data?.workouts || [];

  console.log(workouts)
    // const navigation = useNavigate();

    // useEffect(() => {
    //     console.log(navigation)
    // })

    // const location = useLocation()
    // console.log(location)
    // const specificWorkoutType = location.state.workoutType;
    // const standardWorkout = location.state.userCreated;

    // const { loading, data } = useQuery(QUERY_SPECIFIC_WORKOUT_TYPE, {
    //     variables: { workoutType: specificWorkoutType, userCreated: standardWorkout }
    // });
    // const specificWorkouts = data?.specificWorkouts || [];
    // console.log(specificWorkouts)

    return (
        <div>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <WorkoutChoices
                    specificWorkouts={workouts}
                />
            )
            }
            hello
        </div>
    )
}

export default WorkoutPage;