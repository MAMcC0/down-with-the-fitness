import React from 'react';
import AllCustomWorkoutChoices from '../components/allcustomworkoutchoices'
import { useQuery } from '@apollo/client';
import { QUERY_ALL_USER_WORKOUTS } from '../utils/queries';
import { useNavigate } from 'react-router-dom';

function AllCustomWorkouts() {
    //calls useNaviagation method to pass into compontents to redirect to live workout page
    const navigation = useNavigate();

    // destructures loading and data from useQuery Method to use in rendering
    const { loading, data } = useQuery(QUERY_ALL_USER_WORKOUTS);
    const listAllUserWorkouts = data?.listAllUserWorkouts || [];


    //ternary to show loading page if loading otherwise wait till it returns data
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