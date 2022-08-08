import React from 'react'
import WorkoutChoices from '../components/workoutchoices'
import { useQuery } from '@apollo/client';
import { QUERY_WORKOUTS } from '../utils/queries';


function WorkoutPage() { 
    const { loading, data } = useQuery(QUERY_WORKOUTS);
    const workout = data?.workouts || [];
    console.log(workout)
    
    return (
        <div>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <WorkoutChoices 
                workout={workout}
                />
            )
            }
        </div>
    )
}

export default  WorkoutPage;