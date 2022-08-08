import React from 'react'
import CustomWorkoutChoices from '../components/workoutchoices'
import { useQuery } from '@apollo/client';
import { QUERY_USER_WORKOUTS } from '../utils/queries';


function CustomWorkoutPage() {
    const { loading, data } = useQuery(QUERY_USER_WORKOUTS);
    const customWorkout = data?.listUserWorkouts || [];
    console.log(customWorkout)

    return (
        <div>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <CustomWorkoutChoices
                listUserWorkouts={customWorkout}
                />
            )
            }
        </div>
    )
}


export default CustomWorkoutPage;