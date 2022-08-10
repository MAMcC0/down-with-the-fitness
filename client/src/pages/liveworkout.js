import React, {useEffect} from 'react'
import WorkoutTimer from '../components/workouttimer';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SPECIFIC_WORKOUT } from '../utils/queries';

function LiveWorkout() {
  //grabs id of workout from url to use in query
    let { id } = useParams();
    
  //queries to grab a workout based on ID
  const { loading, data } = useQuery(QUERY_SPECIFIC_WORKOUT, {variables : {id}});
  const workouts = data?.findWorkOutByID || [];
  useEffect(() => {
  
  }, [workouts])

//sends info to workout timer compontent that handles live workout functionality
  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <WorkoutTimer workouts={workouts} />
        </div>
      )

      }

    </div>
  )

}



export default LiveWorkout;