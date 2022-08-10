import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

// Defines accordion JSX that renders the users workouts specifically based on what body area the user chooses on the home page. 
const CustomWorkoutChoices = ({listUserWorkouts}) => {

    let navigate = useNavigate();

    return (
        <div>
            {listUserWorkouts && listUserWorkouts.map(({ workoutName, exercises, _id }, i) => (
                <Accordion>
                    <Accordion.Item eventKey={i}>
                        <Accordion.Header>{workoutName}</Accordion.Header>
                        <Accordion.Body>
                            <ListGroup variant="flush">
                                {exercises.map(exercise => (
                                    <ListGroup.Item>{exercise.exerciseName} x {exercise.duration}</ListGroup.Item>
                                ))}
                            </ListGroup>
                            <Button id={_id} onClick={() => navigate(`/customworkouts/${_id}`)}>
                                Start
                            </Button>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            ))}
        </div>
    )
}

export default CustomWorkoutChoices;