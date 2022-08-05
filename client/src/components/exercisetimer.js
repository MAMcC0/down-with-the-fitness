import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_WORKOUTS} from '../../utils/queries';

export default function exerciseTimer({exTimer}){
   
        return (
            <div>
                <p>{exTimer} seconds left!</p>
            </div>
        )
    }


