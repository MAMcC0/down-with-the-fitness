import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_WORKOUTS} from '../../utils/queries';


function workoutTimer(){
    const {data} = useQuery(QUERY_WORKOUTS)
    let timerDuration = (data) => {

        const exerciseDur = data.map((data.workout.exercise.duration) => {
            let durationCounter ///how to add through the map
        }  )

    };
    const [timerW, setTimer] = useState(timerDuration);


<div>

</div>
}