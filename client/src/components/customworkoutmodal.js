import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import exerciseChip from './chips';
import Chips from './chips'
import CustomWorkoutForm from './customform';

export default function CustomWorkoutModal(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
    <div className="create-workout-modal">
        <Button variant="dark" onClick={handleShow}>Create Custom Workout</Button>
        <Modal show={show} onHide={handleClose}
            {...props}
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
    )
}
