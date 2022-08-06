import React from 'react'
import Chip from `@trimbleinc/modus-react-bootstrap/Chip`
import { QUERY_EXERCISES } from '../../utils/queries'

export default function exerciseChip() {
    const { loading, data } = useQuery(QUERY_EXERCISES);
    const exercises = data?.exercises || [];
    return (
      <div className="chip">
          {exercises && exercises.map(exercise => (
          <Chip
          icon={<i className="material-icons">check</i>}
          label={data.exerciseName}
          variant="solid"
          type="filter"
          className="mr-2">
          </Chip>
        ))}
  
      </div>
    );
  };