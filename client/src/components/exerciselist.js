import React from 'react'
import Button from 'react-bootstrap/Button'
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_EXERCISES } from '../../utils/queries';

export default function exerciseListButtons() {
  return (

    <div className="exercise-buttons">
        <Button variant="primary" size="lg" active>Create Custom Workout</Button>{' '}
    </div>

  );
}
