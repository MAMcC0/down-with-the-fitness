import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_WORKOUTS, QUERY_USER_WORKOUTS, QUERY_WORKOUT_TYPES } from '../utils/queries'
import { Link } from 'react-router-dom';

function HomeButtons() {
    return (
        <div className="homebuttons">
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Standard Workouts</Accordion.Header>
                    <Accordion.Body>
                        <div className="home-workout-buttons-standardf">
                            <ButtonGroup vertical>
                                <Link className='text-dark' to='/workouts/fullbody'>Full Body Workouts</Link>                             
                                <Link className='text-dark' to='/workouts/armworkouts'>Arm Workouts</Link>
                                <Link className='text-dark' to='/workouts/chestworkouts'>Chest Workouts</Link>
                                <Link className='text-dark' to='/workouts/abworkouts'>Ab Workouts</Link>
                                <Link className='text-dark' to='/workouts/legworkouts'>Legs Workouts</Link>
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
                            <Link className='text-dark' to='/customworkouts/fullbody'>Full Body Workouts</Link>                             
                                <Link className='text-dark' to='/customworkouts/armworkouts'>Arm Workouts</Link>
                                <Link className='text-dark' to='/customworkouts/chestworkouts'>Chest Workouts</Link>
                                <Link className='text-dark' to='/customworkouts/abworkouts'>Ab Workouts</Link>
                                <Link className='text-dark' to='/customworkouts/legworkouts'>Legs Workouts</Link>
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
                <Button variant="primary" size="lg" active>
                    Exercise Guide
                </Button>{' '}
            </div>

        </div>
    );
}

export default HomeButtons;
