import React from 'react'
import HomeButtons from '../components/homepagebuttons'
import { QUERY_EXERCISES } from '../utils/queries'
import { useQuery } from '@apollo/client'

function HomeContainer() {
    //queries all exercies for homepage buttons
    const { loading, data } = useQuery(QUERY_EXERCISES);
    const chipData = data?.fullBodyExercises || [];
//chip data is sent to the homebuttons components for it to be used in create custom workouts modal
    return (
        <div class="home-body">
        <HomeButtons 
        chipData={chipData}
        />
        </div>
    )
}

export default HomeContainer;