import { useQuery } from '@apollo/client';
import { QUERY_WORKOUTS} from '../../utils/queries';
import workoutTimer from '../components/workouttimer';
import React, { useEffect } from 'react'




function liveworkout() {
    const {data} = useQuery(QUERY_WORKOUTS);
    const [timerWorkout, setTimer] = useState(timerDuration(data));
    const [exerciseTime, setExerciseTime] = useState(exerciseTimer(data));
    const [currentEx, setCurrentEx] = useState('');
    const [index, setIndex] = useState(0);
    const [checkTime, setCheckTime] = useState(false);

    let timerDuration = (data) => {
        
        let workoutArray = data.workout.exercises;
        let duration = 0;
        workoutArray.forEach(exercise => duration = exercise.duration + duration);
        
        return duration; 
    };
    
    let exerciseTimer = (data) => {
        let duration = data.workouts.exercise.duration[index];
        return duration;

    };

    useEffect(() => {
        const timer = setInterval(() => {
         let descTime =  timerWorkout-- ;
         let exerciseDescTime = exerciseTime --;
          setTimer(descTime);
          setExerciseTime(exerciseDescTime);
          checkExerciseTime(exerciseTime);
        }, 1000);
      }, [timerWorkout]);

      const checkExerciseTime = (exTime) => {
        if(exTime === 0){
          return setCheckTime(true);
        } 
      };

    useEffect(() => {
        let exName =  data.workout.exercises[index].exerciseName;  
        setCurrentEx(exName);
        let newIndex = index ++;
        setIndex(newIndex);
    }, [checkTime]);

    // useEffect (() => {
   
    // }, [])

  return (
   <workoutTimer timer={timerWorkout} />
   <exerciseTimer exTimer={exerciseTime}/>
  )
}

