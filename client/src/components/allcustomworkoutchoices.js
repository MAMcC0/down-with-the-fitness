import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const AllCustomWorkoutChoices = ({ listAllUserWorkouts }) => {

    let navigate = useNavigate();

    return (
        <div>
            {listAllUserWorkouts && listAllUserWorkouts.map(({ workoutName, exercises, _id }, i) => (
                <Accordion>
                    <Accordion.Item eventKey={i}>
                        <Accordion.Header>{workoutName}</Accordion.Header>
                        <Accordion.Body>
                            <ListGroup variant="flush">
                                {exercises.map(exercise => (
                                    <ListGroup.Item>{exercise.exerciseName} x {exercise.duration}</ListGroup.Item>
                                ))}
                            </ListGroup>
                            <Button id={_id} onClick={() => navigate(`/workouts/${_id}`)}>
                                Start
                            </Button>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            ))}
        </div>
    )
}

export default AllCustomWorkoutChoices;