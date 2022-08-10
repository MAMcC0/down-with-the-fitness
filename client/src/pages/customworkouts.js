import React, { useEffect } from 'react'
import CustomWorkoutChoices from '../components/customworkoutchoices'
import { useQuery } from '@apollo/client';
import { QUERY_USER_WORKOUTS } from '../utils/queries';
import { useLocation, useNavigate } from 'react-router-dom';

function CustomWorkoutPage() {
    const navigation = useNavigate();
       //alls useLocation method to pass into compontents to grab body types from query
    const location = useLocation()
    //grabs the type of workouts and usercreated from url to pass into query
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