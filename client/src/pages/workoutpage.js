import WorkoutChoices from '../components/workoutchoices'
import { useQuery } from '@apollo/client';
import { QUERY_SPECIFIC_WORKOUT_TYPE } from '../utils/queries';
import { useLocation } from 'react-router-dom';

function WorkoutPage() {
    const location = useLocation()
    const specificWorkoutType = location.state.workoutType;
    const customWorkout = location.state.userCreated;
    console.log(specificWorkoutType)
    console.log(location.state.workoutType)
    const { loading, error, data } = useQuery(QUERY_SPECIFIC_WORKOUT_TYPE, {
        variables: { workoutType: specificWorkoutType, userCreated: customWorkout }
    });
    const specificWorkouts = data?.specificWorkouts || [];
    console.log(data)
    console.log(specificWorkouts)

    return (
        <div>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <WorkoutChoices 
                specificWorkouts={specificWorkouts}
                />
            )
            }
        </div>
    )
}

export default WorkoutPage;