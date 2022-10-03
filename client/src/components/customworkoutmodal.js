import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import exerciseChip from './chips';
import Chips from './chips'
import CustomWorkoutForm from './customform';

// defines a modal used to create a custom workout, using the chips and custom workout form components.
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
                <Modal.Title class="modal-title">Create Custom Workout</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                <CustomWorkoutForm />
                </div>
                <div className="flex-wrap">
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
