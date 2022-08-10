import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


// Exports a modal, including functionality. This renders when a show guide video is clicked.
function videoModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="dark" onClick={handleShow}>
                Watch Guide Video
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{exercise.exerciseName}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{exercise.description}
                <iframe width="560" height="315" src={exercise.link} title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" onClick={handleClose}>
                        Dismiss
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default videoModal;