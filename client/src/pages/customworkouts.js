import React, { useEffect } from 'react'
import CustomWorkoutChoices from '../components/customworkoutchoices'
import { useQuery } from '@apollo/client';
import { QUERY_USER_WORKOUTS } from '../utils/queries';
import { useLocation, useNavigate } from 'react-router-dom';

function CustomWorkoutPage() {
    const navigation = useNavigate();

    useEffect(() => {
        console.log(navigation)
    })

    const location = useLocation()
    console.log(location)
    const customWorkoutType = location.state.workoutType;
    const customWorkout = location.state.userCreated;

    const { loading, data } = useQuery(QUERY_USER_WORKOUTS, {
        variables: { workoutType: customWorkoutType, userCreated: customWorkout }
    });
    const workoutInfo = data?.listUserWorkouts || [];



    return (
        <div>
        <div>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <CustomWorkoutChoices
                listUserWorkouts={workoutInfo}
                />
            )
            }
        </div>
        </div>
    )
}

export default CustomWorkoutPage;