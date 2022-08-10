import React, { useState, useEffect, useRef } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function WorkoutTimer({ workouts }) {
  console.log(workouts);

  let navigate = useNavigate();
  let [timerWorkout, setTimer] = useState(0);
  let [isActive, setIsActive] = useState(false);
  let [exerciseTime, setExerciseTime] = useState(30);
  const [currentEx, setCurrentEx] = useState("");
  let [index, setIndex] = useState(0);
  const [checkTime, setCheckTime] = useState(false);
  const [int, setInt] = useState();
  const [int2, setInt2] = useState();
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    setExercises(workouts[0]?.exercises);
  }, []);

  useEffect(() => {
    setTimer(timerDuration(workouts));
    setExerciseTime(ExerciseTimer());
  }, [workouts]);

  // let interval;
  useEffect(() => {
    let exName = workouts[0]?.exercises[index]?.exerciseName;
    setCurrentEx(exName);
    let newIndex = index++;
    setIndex(newIndex);

    if (isActive) {

      setInt2(setInterval(() => {
        setExerciseTime((exerciseTime) => exerciseTime - 1);
        if (exerciseTime === 0) {
          clearInterval(int2);
   
          return;
        }
      }, 1000));

    }
    setIsActive(false)

  }, [ isActive]);

  useEffect(() => {
 
    if (exerciseTime< 1) {
  
      clearInterval(int2);


      return;
    }

 
}, [exerciseTime]);
//navigate home at end of workout
useEffect(() => {
  if(timerWorkout === 0 && exerciseTime === 0){
    navigate('/')
  }
})
//effect for countdown of total exercise
  let interval2;
  useEffect(() => {
    if (isActive) {

      setInt(setInterval(() => {
        setTimer((timerWorkout) => timerWorkout - 1);
        if (timerWorkout === 0) {
          clearInterval(int);


          return;
        }
      }, 1000));
      setIsActive(false)
    }
  }, [isActive]);
//effect for clearing interval

  useEffect(() => {
 
        if (timerWorkout < 1) {
          console.log("count")
          clearInterval(int);


          return;
        }
  
     
  }, [timerWorkout]);

  useEffect(() => {
    if(timerWorkout > 0 && exerciseTime === 0){
      setExerciseTime(30)
      setInt2(setInterval(() => {
        setExerciseTime((exerciseTime) => exerciseTime - 1);
        if (exerciseTime === 0) {
          clearInterval(int2);
   
          return;
        }
      }, 1000));
    }
  })
//toggles button of start to active/inactive

  function toggle() {
    setIsActive(!isActive);
  }

  //calculates the time needed for the workout

  let timerDuration = (workouts) => {
    let workoutsTime = workouts[0]?.exercises[0].duration;
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
      <Card.Text>
        {" "}
        <button
          className={`button button-primary button-primary-${
            isActive ? "active" : "inactive"
          }`}
          onClick={toggle}
        >
          Start
        </button>
        <p>{timerWorkout}</p>
        <p>{exerciseTime}</p>
      </Card.Text>
      <div>
        {exercises &&
          exercises.map((exercise) => (
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>{exercise.exerciseName}</Card.Title>
                <Card.Img variant="top" src={exercise.img} />
                <Card.Text>
                  {workouts.description}
                  {exercise.description}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
      </div>
    </div>
  );
}
