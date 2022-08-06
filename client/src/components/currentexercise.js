import { useQuery, useMutation } from '@apollo/client';
import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import exTimer from 'exerciseTimer'


function currentExerciseCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{exercise.exerciseName}</Card.Title>
        <Card.Img variant="top" src="{function for diagram}" />
        <Card.Text>
          {exercise.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{exTimer}</ListGroup.Item>
        <ListGroup.Item>"Next up: {exercise.NEXTEXERCISE}"</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default currentExerciseCard;
