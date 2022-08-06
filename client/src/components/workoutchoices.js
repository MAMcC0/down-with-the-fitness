import { useQuery } from '@apollo/client';
import Accordion from 'react-bootstrap/Accordion';
import { QUERY_WORKOUTS } from '../utils/queries'
import ListGroup from 'react-bootstrap/ListGroup';
import React from 'react'

let workoutChoice = []

const WorkoutChoices = () => {
    const { loading, data } = useQuery(QUERY_WORKOUTS);
    console.log(data)
    const workout = data?.exercises || [];
   
    // for (let i = 0; i < data.length; i++) {
    //     if (workout.workoutType === 1) {
    //         workoutChoice.push(workout.workoutType[i])
    //     }
    //     console.log(workoutChoice)
    //     return workoutChoice;
    // }

    return (
        <div>
            {workout && workout.map(workout => (
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>{workout.workoutName}</Accordion.Header>
                        <Accordion.Body>
                            <ListGroup variant="flush">
                                {workout.exercises.map(exercise => (
                                    <ListGroup.Item>{exercise.exerciseName} x {exercise.duration}</ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            ))}
        </div>
    )
}

export default WorkoutChoices;