import React, { useEffect } from 'react';
import AllCustomWorkoutChoices from '../components/allcustomworkoutchoices'
import { useQuery } from '@apollo/client';
import { QUERY_ALL_USER_WORKOUTS } from '../utils/queries';
import { useLocation, useNavigate } from 'react-router-dom';

function AllCustomWorkouts() {
    const navigation = useNavigate();

    useEffect(() => {
        console.log(navigation)
    })


    const { loading, data } = useQuery(QUERY_ALL_USER_WORKOUTS);
    const listAllUserWorkouts = data?.listAllUserWorkouts || [];

    return (
        <div>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <AllCustomWorkoutChoices
                    listAllUserWorkouts={listAllUserWorkouts}
                />
            )
            }
        </div>
    )
}

export default AllCustomWorkouts;