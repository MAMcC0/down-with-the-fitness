import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function createModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div class="create-workout-modal">
            <Button variant="dark" onClick={handleShow}>Create Custom Workout</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Custom Workout</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" onClick={handleClose}>Create</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
