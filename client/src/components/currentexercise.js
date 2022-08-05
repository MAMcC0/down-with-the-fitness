import { useQuery, useMutation } from '@apollo/client';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


function currentExerciseCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{exercise.exerciseName}</Card.Title>
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
        <Card.Text>
          {exercise.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{Timer}</ListGroup.Item>
        <ListGroup.Item>"Next up: {exercise.NEXTEXERCISE}"</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default currentExerciseCard;
