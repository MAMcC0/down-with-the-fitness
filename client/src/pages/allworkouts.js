import React, { useEffect } from 'react';
import AllWorkoutChoices from '../components/workoutchoices'
import { useQuery } from '@apollo/client';
import { QUERY_WORKOUTS } from '../utils/queries';
import { useLocation, useNavigate } from 'react-router-dom';

function AllWorkouts() {
    const navigation = useNavigate();

    useEffect(() => {
        console.log(navigation)
    })

    const location = useLocation()
    console.log(location)

    const { loading, data } = useQuery(QUERY_WORKOUTS);
    const allWorkoutInfo = data?.workouts || [];
    console.log(allWorkoutInfo)

    return (
        <div>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <AllWorkoutChoices
                    allWorkoutInfo={allWorkoutInfo}
                />
            )
            }
        </div>
    )
}

export default AllWorkouts;