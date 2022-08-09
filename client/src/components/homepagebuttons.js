import React, { useEffect, useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from 'react-router-dom';
import '../index.css'
import WorkoutPage from '../pages/workoutpage';
import { useNavigate, useLocation } from 'react-router-dom';



function HomeButtons() {
    const {state} = useLocation()
    let navigate = useNavigate();
    const [workoutType, setWorkoutType] = useState('')
    function standardWorkoutRender(event) {
        let type;
        switch (event.target.innerHTML) {
            case ('Full Body Workouts'):
                type = 'Full Body'
                setWorkoutType(type)
                console.log(workoutType)
                navigate('/workouts/type/', {state: {workoutType: type, userCreated: false}})
                break;
            case ('Arm Workouts'):
                type = 'Arms'
                setWorkoutType(type)
                console.log(workoutType)
                navigate('/workouts/type', {state: {workoutType: type, userCreated: false}})
                break;
            case ('Chest Workouts'):
                type = 'Chest'
                setWorkoutType(type)
                console.log(workoutType)
                navigate('/workouts/type', {state: {workoutType: type, userCreated: false}})
                break;
            case ('Ab Workouts'):
                type = 'Abs'
                setWorkoutType(type)
                console.log(workoutType)
                navigate('/workouts/type', {state: {workoutType: type, userCreated: false}})
                break;
            case ('Legs Workouts'):
                type = 'Legs'
                setWorkoutType(type)
                console.log(workoutType)
                navigate('/workouts/type', {state: {workoutType: type, userCreated: false}})
                break;
            default:
                break;
        }
    }

    function customWorkoutRender(event) {
        let type;
        switch (event.target.innerHTML) {
            case ('Full Body Workouts'):
                type = 'Full Body'
                setWorkoutType(type)
                console.log(workoutType)
                navigate('/customworkouts/type/', {state: {workoutType: type, userCreated: true}})
                break;
            case ('Arm Workouts'):
                type = 'Arms'
                setWorkoutType(type)
                console.log(workoutType)
                navigate('/customworkouts/type', {state: {workoutType: type, userCreated: true}})
                break;
            case ('Chest Workouts'):
                type = 'Chest'
                setWorkoutType(type)
                console.log(workoutType)
                navigate('/customworkouts/type', {state: {workoutType: type, userCreated: true}})
                break;
            case ('Ab Workouts'):
                type = 'Abs'
                setWorkoutType(type)
                console.log(workoutType)
                navigate('/customworkouts/type', {state: {workoutType: type, userCreated: true}})
                break;
            case ('Legs Workouts'):
                type = 'Legs'
                setWorkoutType(type)
                console.log(workoutType)
                navigate('/customworkouts/type', {state: {workoutType: type, userCreated: true}})
                break;
            default:
                break;
        }
    }



    return (
        <div className="home-buttons">
            <Accordion class="accordion">
                <Accordion.Item eventKey="0">
                    <Accordion.Header className="accordion-standard" style={{marginTop: '20px'}}>Standard Workouts</Accordion.Header>
                    <Accordion.Body>
                        <div>
                            <ButtonGroup vertical>
                                <button onClick={standardWorkoutRender} >Full Body Workouts</button>                             
                                <button onClick={standardWorkoutRender} >Arm Workouts</button>
                                <button onClick={standardWorkoutRender} >Chest Workouts</button>
                                <button onClick={standardWorkoutRender} >Ab Workouts</button>
                                <button onClick={standardWorkoutRender} >Legs Workouts</button>
                            </ButtonGroup>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <br />

            <Accordion>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>My Custom Workouts</Accordion.Header>
                    <Accordion.Body>
                        <div className="home-workout-buttons-custom">
                            <ButtonGroup vertical>
                                <button onClick={customWorkoutRender} >All Workouts</button>
                                <button onClick={customWorkoutRender} >Arm Workouts</button>
                                <button onClick={customWorkoutRender} >Chest Workouts</button>
                                <button onClick={customWorkoutRender} >Ab Workouts</button>
                                <button onClick={customWorkoutRender} >Legs Workouts</button>
                            </ButtonGroup>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <br />
            <div className="create-workout-button">
                <Button style={{backgroundColor: '#639183', border:'none'}} size="lg" active>
                    Create Custom Workout
                </Button>{' '}
            </div>
            <br />
            <div className="exercise-guide-button">
            <Link style={{marginBottom: '20px'}} className='exercise-guide-btn' to='/exerciseguide'>Exercise Guide</Link>
            </div>
        </div>
    );
}

export default HomeButtons;
