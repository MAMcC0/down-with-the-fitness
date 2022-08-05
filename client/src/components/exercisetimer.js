import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_WORKOUTS} from '../../utils/queries';

function exerciseTimer(){
    const {data} = useQuery(QUERY_WORKOUTS);
    let i = 0;
    let duration = data.workouts.exercise.duration[i];

    const [exerciseTime] = useState(duration);
     
    const createTimer(duration) => {
        useEffect((duration)=> {
            setInterval(function(duration){
                duration--;
                if(duration < 0){
                    i++;
                    clearInterval(duration);

                    //how to update state after end of timer
                }
            },1000)
        })
        }
    }


}