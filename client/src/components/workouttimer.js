import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';



export default function workoutTimer({timer}){
    
    
return(
    <div>
        <p>{timer}</p>
    </div>
)
}

