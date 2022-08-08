import { Button, Card } from 'react-bootstrap';

const ExerciseCard = ({ fullBodyExercises }) => {
    return (
        <div>
            {fullBodyExercises && fullBodyExercises.map(exercise => (
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="{exercise.exerciseImg}" />
                    <Card.Body>
                        <Card.Title>{exercise.exerciseName}</Card.Title>
                        <Card.Text>
                            {exercise.description}
                        </Card.Text>
                        <Button id='modal-button' variant="primary">Watch Instructional Video</Button>
                    </Card.Body>
                </Card>
            ))}
        </div>
    )
}

export default ExerciseCard;