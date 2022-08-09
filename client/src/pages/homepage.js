import React from 'react'
import HomeButtons from '../components/homepagebuttons'
import { QUERY_EXERCISES } from '../utils/queries'
import { useQuery } from '@apollo/client'

function HomeContainer() {

    const { loading, data } = useQuery(QUERY_EXERCISES);
    const chipData = data?.fullBodyExercises || [];

    return (
        <div class="home-body">
        <HomeButtons 
        chipData={chipData}
        />
        </div>
    )
}

export default HomeContainer;