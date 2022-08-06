import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_EXERCISES } from '../../utils/queries';
import customWorkoutForm from './customform';

export default function createModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="create-workout-modal">
            <Button variant="dark" onClick={handleShow}>Create Custom Workout</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Custom Workout</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div id="custom-workout-form">
                        {customWorkoutForm}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" onClick={handleClose}>Create</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
