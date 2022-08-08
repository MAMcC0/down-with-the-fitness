import React from 'react'
import Chip from '@trimbleinc/modus-react-bootstrap/Chip'

export default function exerciseChip({ exercise }) {
    return (
      <div className="chip">
          {exercise && exercise.map(exercise => (
          <Chip
          icon={<i className="material-icons">check</i>}
          label={exercise.exerciseName}
          variant="solid"
          type="filter"
          className="mr-2">
          </Chip>
        ))}
      </div>
    );
  };