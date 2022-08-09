import { Button, Card } from "react-bootstrap";

const ExerciseCard = ({ fullBodyExercises }) => {
  return (
    <div className="ex-card">
      {fullBodyExercises &&
        fullBodyExercises.map((exercise) => (
          <Card className="card" style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>{exercise.exerciseName}</Card.Title>
              <Card.Img variant="top" src={exercise.img} />
              <Card.Text>{exercise.description}</Card.Text>
              <Button
                className="card-button"
                id="modal-button"
                variant="primary"
              >
                Watch Instructional Video
              </Button>
            </Card.Body>
          </Card>
        ))}
    </div>
  );
};

export default ExerciseCard;
