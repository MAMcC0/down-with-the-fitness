import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';





const WorkoutChoices = ({ workout }) => {

    let navigate = useNavigate();

 // async function redirect(event, id) {
  //  event.preventDefault();
   // await submitWorkout(event.target);
  //  navigate(To = , { replace: true });
  //}


   

    return (
        <div>
            {workout.map(({ workoutName, exercises, _id }, i) => (
                <Accordion>
                    <Accordion.Item eventKey={i}>
                        <Accordion.Header>{workoutName}</Accordion.Header>
                        <Accordion.Body>
                            <ListGroup variant="flush">
                                {exercises.map(exercise => (
                                    <ListGroup.Item>{exercise.exerciseName} x {exercise.duration}</ListGroup.Item>
                                ))}
                            </ListGroup>
                            <Button id={_id} onClick={()=>navigate(`/workouts/${_id}`)}>
                                Start
                            </Button>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            ))}
        </div>
    )
}



export default WorkoutChoices;