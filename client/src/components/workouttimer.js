import React, { useState, useEffect } from 'react';

export default function WorkoutTimer({ workouts }) {

    let [timerWorkout, setTimer] = useState(0);
    let [exerciseTime, setExerciseTime] = useState(0);
    const [currentEx, setCurrentEx] = useState('');
    let [index, setIndex] = useState(0);
    const [checkTime, setCheckTime] = useState(false);

    useEffect(() => {
        console.log(workouts)
        setTimer(timerDuration(workouts[0]?.exercises))
        //  setExerciseTime(ExerciseTimer(workouts))
    }, [workouts])

    useEffect(() => {
        let exName = workouts[0]?.exercises[index]?.exerciseName;
        setCurrentEx(exName);
        let newIndex = index++;
        setIndex(newIndex);
        console.log(workouts);
    }, [checkTime]);

    useEffect(() => {
        const timer = setInterval(() => {
            let descTime = timerWorkout--;
            let exerciseDescTime = exerciseTime--;
            setTimer(descTime);
            setExerciseTime(exerciseDescTime);
            checkExerciseTime(exerciseTime);
        }, 1000);
    }, [timerWorkout]);

    let timerDuration = (data) => {

        console.log(data);
        let duration = 0;
        data.forEach(exercise => duration = exercise.duration + duration);

        return duration;
    };



    let ExerciseTimer = (data) => {
        let duration = data.workouts.exercise.duration[index];
        return duration;
    };



    const checkExerciseTime = (exTime) => {
        if (exTime === 0) {
            return setCheckTime(true);
        }
    };



    return (
        <div>
            <p>Workouts</p>
        </div>
    )
}

