import React from 'react';
import AllWorkoutChoices from '../components/allworkoutchoices'
import { useQuery } from '@apollo/client';
import { QUERY_ALL_STANDARD_WORKOUTS } from '../utils/queries';
import { useLocation, useNavigate } from 'react-router-dom';

function AllWorkouts() {
    //calls useNaviagation method to pass into compontents to redirect to live workout page
    const navigation = useNavigate();

    // calls useLocation method to pass into compontents to grab body types from query
    const location = useLocation()


    const { loading, data } = useQuery(QUERY_ALL_STANDARD_WORKOUTS);
    //lists all pre-seeded workouts
    const allWorkoutInfo = data?.listAllStandardWorkouts || [];
    
    //ternary to show loading page if loading otherwise wait till it returns data
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