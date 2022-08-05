import { useQuery } from '@apollo/client';
import { QUERY_WORKOUTS } from '../utils/queries';
import WorkoutTimer from '../components/workouttimer';
import ExerciseTimer from '../components/exercisetimer';
import React, { useEffect, useState } from 'react'

function LiveWorkout() {
  const { data } = useQuery(QUERY_WORKOUTS);
  let [timerWorkout, setTimer] = useState(setTimer(data));
  let [exerciseTime, setExerciseTime] = useState(ExerciseTimer(data));
  const [currentEx, setCurrentEx] = useState('');
  let [index, setIndex] = useState(0);
  const [checkTime, setCheckTime] = useState(false);
  
  let timerDuration = (data) => {
      
    let workoutArray = data.workout.exercises;
    let duration = 0;
    workoutArray.forEach(exercise => duration = exercise.duration + duration);
    
    return duration; 
};
  
  let ExerciseTimer = (data) => {
    let duration = data.workouts.exercise.duration[index];
    return duration;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      let descTime = timerWorkout--;
      let exerciseDescTime = exerciseTime--;
      setTimer(descTime);
      setExerciseTime(exerciseDescTime);
      checkExerciseTime(exerciseTime);
    }, 1000);
  }, [timerWorkout]);

  const checkExerciseTime = (exTime) => {
    if (exTime === 0) {
      return setCheckTime(true);
    }
  };

  useEffect(() => {
    let exName = data.workout.exercises[index].exerciseName;
    setCurrentEx(exName);
    let newIndex = index++;
    setIndex(newIndex);
  }, [checkTime]);




  return (
    <div>
      <WorkoutTimer timer={timerWorkout} />
      <ExerciseTimer exTimer={exerciseTime} />
    </div>
  )
}

export default LiveWorkout;