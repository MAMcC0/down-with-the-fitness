import { useQuery } from '@apollo/client';
import { QUERY_WORKOUTS } from '../utils/queries';
import WorkoutTimer from '../components/workouttimer';
import ExerciseTimer from '../components/exercisetimer';
import React, { useEffect, useState } from 'react'



function LiveWorkout() {
  

  
//   const { data } = useQuery(QUERY_WORKOUTS);
//   const workouts = data?.workouts || [];


//   let [timerWorkout, setTimer] = useState(0);
//   let [exerciseTime, setExerciseTime] = useState(0);
//   const [currentEx, setCurrentEx] = useState('');
//   let [index, setIndex] = useState(0);
//   const [checkTime, setCheckTime] = useState(false);
  
//   let timerDuration = (data) => {
      
//    console.log(data);
//     let duration = 0;
//     data.forEach(exercise => duration = exercise.duration + duration);
    
//     return duration; 
// };
  


//   let ExerciseTimer = (data) => {
//     let duration = data.workouts.exercise.duration[index];
//     return duration;
//   };

// useEffect(() => {
//    setTimer(timerDuration(workouts))
//   //  setExerciseTime(ExerciseTimer(workouts))
// }, [workouts])


//   useEffect(() => {
//     const timer = setInterval(() => {
//       let descTime = timerWorkout--;
//       let exerciseDescTime = exerciseTime--;
//       setTimer(descTime);
//       setExerciseTime(exerciseDescTime);
//       checkExerciseTime(exerciseTime);
//     }, 1000);
//   }, [timerWorkout]);

//   const checkExerciseTime = (exTime) => {
//     if (exTime === 0) {
//       return setCheckTime(true);
//     }
//   };

//   useEffect(() => {
//     let exName = data.workout.exercises[index].exerciseName;
//     setCurrentEx(exName);
//     let newIndex = index++;
//     setIndex(newIndex);
//   }, [checkTime]);




  return (
    <div>
      {/* <WorkoutTimer timer={timerWorkout} />
      <ExerciseTimer exTimer={exerciseTime} /> */}
      hello
    </div>
  )
}

export default LiveWorkout;