import React, { useState, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


export default function WorkoutTimer({ workouts }) {

    console.log(workouts)

    let navigate = useNavigate();
    let [timerWorkout, setTimer] = useState(0);
    let [isActive, setIsActive] = useState(false);
    let [exerciseTime, setExerciseTime] = useState(30);
    const [currentEx, setCurrentEx] = useState('');
    let [index, setIndex] = useState(0);
    const [checkTime, setCheckTime] = useState(false);



    useEffect(() => {
        setTimer(timerDuration(workouts))
        setExerciseTime(ExerciseTimer())
    }, [workouts])

    useEffect(() => {
        let exName = workouts[0]?.exercises[index]?.exerciseName;
        setCurrentEx(exName);
        let newIndex = index++;
        setIndex(newIndex);

        let interval = null;
        if (isActive) {
            setInterval(() => {
                setExerciseTime(exerciseTime => exerciseTime - 1);
                if (exerciseTime === 0) {
                    clearInterval(interval)
                }
            }, 1000);
        }
        return () => {
            clearInterval(interval);
        }
    },

        [checkTime, isActive]);

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setTimer(timerWorkout => timerWorkout - 1);
                if (timerWorkout === 0) {
                    clearInterval(interval)
                }
            }, 1000);
        }
        return () => {
            clearInterval(interval);
        }
    }, [timerWorkout, isActive])




    function toggle() {
        setIsActive(!isActive);
    }


    let timerDuration = (workouts) => {
        let workoutsTime = workouts[0]?.exercises[0].duration
        let duration = workoutsTime * workouts[0].exercises.length;

        return duration;
    };

    let ExerciseTimer = () => {
        let duration = 30;
        return duration;
    };



    const checkExerciseTime = (exTime) => {
        if (exTime === 0) {
            return setCheckTime(true);
        }
    };



    return (
        <div>
            <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>Start</button>
            <p>{timerWorkout}</p>
            <p>{exerciseTime}</p>

            <div>
                {workouts && workouts.map(workouts => (
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{workouts.exerciseName}</Card.Title>
                            <Card.Img variant="top" src={workouts.img} />
                            <Card.Text>
                                {workouts.description}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    )
}