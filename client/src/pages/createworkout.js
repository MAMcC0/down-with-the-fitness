import React from 'react'
import { useQuery } from '@apollo/client';
import { QUERY_EXERCISES } from '../utils/queries'
import Chips from '../components/chips'
import CustomWorkoutModal from '../components/customworkoutmodal';
import CustomWorkoutForm from '../components/customform';

function CustomWorkoutPage() {
    //grabs all exercieses for users to chose
    const { loading, data } = useQuery(QUERY_EXERCISES);
    const exercise = data?.fullBodyExercises || [];

// calls modal compontent to render exercises
    return (
        <div>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div>
                <CustomWorkoutModal 
                chips={Chips}
                form={CustomWorkoutForm}
                />
                </div>
            )
            }
        </div>
    )
}

export default CustomWorkoutPage;