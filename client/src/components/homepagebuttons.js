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
    function handlePageChange(event) {
        let type;
        switch (event.target.innerHTML) {
            case ('All Workouts'):
                type = 'Full Body'
                setWorkoutType(type)
                console.log(workoutType)
                navigate('/workouts', {state: {workoutType: type, userCreated: true}})
                break;
            case ('Arm Workouts'):
                type = 'Arms'
                setWorkoutType(type)
                console.log(workoutType)
                break;
            case ('Chest Workouts'):
                type = 'Chest'
                setWorkoutType(type)
                console.log(workoutType)
                break;
            case ('Ab Workouts'):
                type = 'Abs'
                setWorkoutType(type)
                console.log(workoutType)
                break;
            case ('Legs Workouts'):
                type = 'Legs'
                setWorkoutType(type)
                console.log(workoutType)
                break;
            default:
                break;
        }
    }



    return (
        <div className="homebuttons">
            <Accordion class="accordion">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Standard Workouts</Accordion.Header>
                    <Accordion.Body>
                        <div>
                            <ButtonGroup vertical>
                                <p onClick={handlePageChange} className='text-dark'>All Workouts</p>
                                <p onClick={handlePageChange} className='text-dark'>Arm Workouts</p>
                                <p onClick={handlePageChange} className='text-dark'>Chest Workouts</p>
                                <p onClick={handlePageChange} className='text-dark'>Ab Workouts</p>
                                <p onClick={handlePageChange} className='text-dark'>Legs Workouts</p>
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
                                <Link className='text-dark' to='/customworkouts/all'>All Workouts</Link>
                                <Link className='text-dark' to='/customworkouts/arms'>Arm Workouts</Link>
                                <Link className='text-dark' to='/customworkouts/chest'>Chest Workouts</Link>
                                <Link className='text-dark' to='/customworkouts/abs'>Ab Workouts</Link>
                                <Link className='text-dark' to='/customworkouts/legs'>Legs Workouts</Link>
                            </ButtonGroup>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <br />

            <div className="create-workout-button">
                <Button variant="primary" size="lg" active>
                    Create Custom Workout
                </Button>{' '}
            </div>

            <br />

            <div className="create-workout-button">
                <Link className='text-dark' to='/exerciseguide'>Exercise Guide</Link>
            </div>

        </div>
    );
}

export default HomeButtons;
