import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { QUERY_WORKOUTS } from '../../utils/queries'

const WorkoutPage = () => {
    const { loading, data } = useQuery(QUERY_WORKOUTS);
    const workout = data?.exercises || [];
    return (
        <div>
            {workout && workout.map(workout => (
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>workout.workoutName</Accordion.Header>
                        <Accordion.Body>
                            <ListGroup variant="flush">
                                {workout.exercises.map(exercise => (
                                    <ListGroup.Item>{exercise.exerciseName}</ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            ))}
        </div>
    )
}


export default WorkoutPage;