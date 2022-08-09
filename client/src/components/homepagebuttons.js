import React, { useEffect, useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from 'react-router-dom';
import '../index.css'
import WorkoutPage from '../pages/workoutpage';
import { useNavigate, useLocation } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import exerciseChip from './chips';
import Chips from './chips'
import CustomWorkoutForm from './customform';



function HomeButtons() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { state } = useLocation()
    let navigate = useNavigate();
    const [workoutType, setWorkoutType] = useState('')
    function standardWorkoutRender(event) {
        let type;
        switch (event.target.innerHTML) {
            case ('Full Body Workouts'):
                type = 'Full Body'
                setWorkoutType(type)
                console.log(workoutType)
                navigate('/workouts/type/', { state: { workoutType: type, userCreated: false } })
                break;
            case ('Arm Workouts'):
                type = 'Arms'
                setWorkoutType(type)
                console.log(workoutType)
                navigate('/workouts/type', { state: { workoutType: type, userCreated: false } })
                break;
            case ('Chest Workouts'):
                type = 'Chest'
                setWorkoutType(type)
                console.log(workoutType)
                navigate('/workouts/type', { state: { workoutType: type, userCreated: false } })
                break;
            case ('Ab Workouts'):
                type = 'Abs'
                setWorkoutType(type)
                console.log(workoutType)
                navigate('/workouts/type', { state: { workoutType: type, userCreated: false } })
                break;
            case ('Legs Workouts'):
                type = 'Legs'
                setWorkoutType(type)
                console.log(workoutType)
                navigate('/workouts/type', { state: { workoutType: type, userCreated: false } })
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
                navigate('/customworkouts/type/', { state: { workoutType: type, userCreated: true } })
                break;
            case ('Arm Workouts'):
                type = 'Arms'
                setWorkoutType(type)
                console.log(workoutType)
                navigate('/customworkouts/type', { state: { workoutType: type, userCreated: true } })
                break;
            case ('Chest Workouts'):
                type = 'Chest'
                setWorkoutType(type)
                console.log(workoutType)
                navigate('/customworkouts/type', { state: { workoutType: type, userCreated: true } })
                break;
            case ('Ab Workouts'):
                type = 'Abs'
                setWorkoutType(type)
                console.log(workoutType)
                navigate('/customworkouts/type', { state: { workoutType: type, userCreated: true } })
                break;
            case ('Legs Workouts'):
                type = 'Legs'
                setWorkoutType(type)
                console.log(workoutType)
                navigate('/customworkouts/type', { state: { workoutType: type, userCreated: true } })
                break;
            default:
                break;
        }
    }



    return (
        <div className="home-buttons" style={{ width: '60%' }}>
            <Accordion className="accordion">
                <Accordion.Item eventKey="0">
                    <Accordion.Header className="accordion-standard" style={{ marginTop: '20px' }}>Standard Workouts</Accordion.Header>
                    <Accordion.Body>
                        <div>
                            <ButtonGroup vertical>
                                <button className="accordion-item" onClick={standardWorkoutRender} >Full Body Workouts</button>
                                <button className="accordion-item" onClick={standardWorkoutRender} >Arm Workouts</button>
                                <button className="accordion-item" onClick={standardWorkoutRender} >Chest Workouts</button>
                                <button className="accordion-item" onClick={standardWorkoutRender} >Ab Workouts</button>
                                <button className="accordion-item" onClick={standardWorkoutRender} >Legs Workouts</button>
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
                        <div className="standard-buttons">
                            <ButtonGroup vertical>

                                <button className="accordion-item" onClick={customWorkoutRender} >Full Body Workouts</button>
                                <button className="accordion-item" onClick={customWorkoutRender} >Arm Workouts</button>
                                <button className="accordion-item" onClick={customWorkoutRender} >Chest Workouts</button>
                                <button className="accordion-item" onClick={customWorkoutRender} >Ab Workouts</button>
                                <button className="accordion-item" onClick={customWorkoutRender} >Legs Workouts</button>

                            </ButtonGroup>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <br />
            <div className="create-workout-modal">
                <div className="create-workout-button" style={{ backgroundColor: '#639183', border: '#639183' }}>
                <Button onClick={handleShow}>Create Custom Workout</Button>
                </div>
                <Modal show={show} onHide={handleClose}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Create Custom Workout</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <CustomWorkoutForm />
                        </div>
                        <div>
                            <Chips
                                fullBodyExercises={exerciseChip}
                            />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="dark" onClick={handleClose}>Create</Button>
                    </Modal.Footer>
                </Modal>
            </div>


            <br />
            <div className="exercise-guide-button">
                <Button style={{ backgroundColor: '#639183', border: 'none' }} ><Link className='exercise-guide-btn' to='/exerciseguide'>Exercise Guide</Link></Button>
            </div>
        </div>
    );
}

export default HomeButtons;
