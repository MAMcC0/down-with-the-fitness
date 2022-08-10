import React, { useEffect } from 'react';
import WorkoutChoices from '../components/workoutchoices'
import { useQuery } from '@apollo/client';
import { QUERY_SPECIFIC_WORKOUT_TYPE } from '../utils/queries';
import { useLocation, useNavigate } from 'react-router-dom';

function WorkoutPage() {
////calls useNaviagation method to pass into compontents to redirect to live workout page
    const navigation = useNavigate();


    const location = useLocation()
    
    const specificWorkoutType = location.state.workoutType;
    const standardWorkout = location.state.userCreated;
//grabs specific workout type that is user created 
    const { loading, data } = useQuery(QUERY_SPECIFIC_WORKOUT_TYPE, {
        variables: { workoutType: specificWorkoutType, userCreated: standardWorkout }
    });
    const specificWorkouts = data?.specificWorkouts || [];

    return (
        <div>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <WorkoutChoices
                    specificWorkouts={specificWorkouts}
                />
            )
            }
        </div>
    )
}

export default WorkoutPage;