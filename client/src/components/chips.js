import React from 'react'
import Chip from '@trimbleinc/modus-react-bootstrap/Chip'

// // Defines chip JSX that renders the each individual exercise within a small chip UI element.
export default function exerciseChip({ chipData }) {

    return (
      <div className="chip">
          {chipData && chipData.map(exercise => (
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