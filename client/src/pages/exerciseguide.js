import React from 'react'
import { useQuery } from '@apollo/client';
import { QUERY_EXERCISES } from '../utils/queries'
import ExerciseCard from '../components/exercisecard';

function ExercisePage() {
  const { loading, data } = useQuery(QUERY_EXERCISES);
  const exercise = data?.fullBodyExercises || [];
  console.log(exercise)

  return (
    <div>
        {loading ? (
            <div>Loading...</div>
        ) : (
            <ExerciseCard 
            fullBodyExercises={exercise}
            />
        )
        }
    </div>
)
}

export default ExercisePage;