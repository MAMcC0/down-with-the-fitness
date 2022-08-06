import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';

const WorkoutChoices = ({ workout }) => {
    return (
        <div>
                {workout.map(({ workoutName, exercises, _id }, i) => (
                        <Accordion>
                            <Accordion.Item id={_id} eventKey={i}>
                                <Accordion.Header>{workoutName}</Accordion.Header>
                                <Accordion.Body>
                                    <ListGroup variant="flush">
                                        {exercises.map(exercise => (
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