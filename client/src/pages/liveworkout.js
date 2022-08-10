import React, {useEffect} from 'react'
import WorkoutTimer from '../components/workouttimer';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SPECIFIC_WORKOUT } from '../utils/queries';

function LiveWorkout() {

    let { type, id } = useParams();
    console.log(id);

  const { loading, data } = useQuery(QUERY_SPECIFIC_WORKOUT, {variables : {id}});
  const workouts = data?.findWorkOutByID || [];
  useEffect(() => {
    console.log(workouts);
    
  }, [workouts])




  

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <WorkoutTimer workouts={workouts} />
          {/* <ExerciseTimer exTimer={workouts} /> */}
        </div>
      )

      }

    </div>
  )

}



export default LiveWorkout;