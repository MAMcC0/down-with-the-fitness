import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_WORKOUTS, QUERY_USER_WORKOUTS, QUERY_WORKOUT_TYPES } from '../utils/queries'
import { Link } from 'react-router-dom';
import '../index.css'

function HomeButtons() {
    return (
        <div className="home-buttons">
            <Accordion class="accordion">
                <Accordion.Item eventKey="0">
                    <Accordion.Header className="accordion-standard" style={{marginTop: '20px'}}>Standard Workouts</Accordion.Header>
                    <Accordion.Body>
                        <div>
                            <ButtonGroup vertical>
                                <Link className='acc-link' to='/workouts/fullbody'>Full Body Workouts</Link>                             
                                <Link className='acc-link' to='/workouts/armworkouts'>Arm Workouts</Link>
                                <Link className='acc-link' to='/workouts/chestworkouts'>Chest Workouts</Link>
                                <Link className='acc-link' to='/workouts/abworkouts'>Ab Workouts</Link>
                                <Link className='acc-link' to='/workouts/legworkouts'>Legs Workouts</Link>
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
