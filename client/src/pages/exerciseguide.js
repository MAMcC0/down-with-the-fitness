import { Button, Card } from 'react-bootstrap';


function exerciseCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{exercise.exerciseName}</Card.Title>
        <Card.Text>
        {exercise.description}
        </Card.Text>
        <Button id='modal-button' variant="primary">Watch Instructional Video</Button>
      </Card.Body>
    </Card>
  );
}

export default exerciseCard;