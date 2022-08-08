import React, { useEffect } from 'react'
import CustomWorkoutChoices from '../components/customworkoutchoices'
import { useQuery } from '@apollo/client';
import { QUERY_USER_WORKOUTS } from '../utils/queries';


function CustomWorkoutPage() {
    const { loading, data } = useQuery(QUERY_USER_WORKOUTS);
    const customWorkout = data?.listUserWorkouts || [];
    // console.log(customWorkout)
useEffect(() => {
console.log(customWorkout)
}, [customWorkout])

    return (
        <div>
        <div>custom</div>
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
        </div>
    )
}

export default CustomWorkoutPage;