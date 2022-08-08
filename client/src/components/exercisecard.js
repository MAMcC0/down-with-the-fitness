import { Button, Card } from 'react-bootstrap';

const ExerciseCard = ({ fullBodyExercises }) => {
    return (
        <div>
            {fullBodyExercises && fullBodyExercises.map(exercise => (
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{exercise.exerciseName}</Card.Title>
                        <Card.Img variant="top" src={exercise.img} />
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