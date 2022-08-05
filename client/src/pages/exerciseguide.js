import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { QUERY_EXERCISES } from '../utils/queries'
import { useQuery } from '@apollo/client';

const ExercisePage = () => {
  const { data } = useQuery(QUERY_EXERCISES);
  const exercises = data?.exercises || [];
  return (
    <div>
    { exercises && exercises.map(exercise => (
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
    ))}
    </div>
  )
}

export default ExercisePage;