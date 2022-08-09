import React from 'react'
import { useQuery } from '@apollo/client';
import { QUERY_EXERCISES } from '../utils/queries'
import ExerciseCard from '../components/exercisecard';

function ExercisePage() {
  const { loading, data } = useQuery(QUERY_EXERCISES);
  const exercise = data?.fullBodyExercises || [];
  console.log(exercise)

  return (
    <div className="ex-card-container">
        <h1 className="ex-header">Exercise Guide</h1>
        {loading ? (
            <div>Loading...</div>
        ) : (
            <div className="exercise-card">
            <ExerciseCard 
            fullBodyExercises={exercise}
            />
            </div>
        )
        }
    </div>
)
}

export default ExercisePage;