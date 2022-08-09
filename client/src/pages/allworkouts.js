import React, { useEffect } from 'react';
import AllWorkoutChoices from '../components/allworkoutchoices'
import { useQuery } from '@apollo/client';
import { QUERY_ALL_STANDARD_WORKOUTS } from '../utils/queries';
import { useLocation, useNavigate } from 'react-router-dom';

function AllWorkouts() {
    const navigation = useNavigate();

    useEffect(() => {
        console.log(navigation)
    })

    const location = useLocation()
    console.log(location)

    const { loading, data } = useQuery(QUERY_ALL_STANDARD_WORKOUTS);
    console.log(data)
    const allWorkoutInfo = data?.listAllStandardWorkouts || [];
    console.log(allWorkoutInfo)

    return (
        <div>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div className="all-workouts-container">
                <AllWorkoutChoices
                    listAllStandardWorkouts={allWorkoutInfo}
                />
                </div>
            )
            }
        </div>
    )
}

export default AllWorkouts;