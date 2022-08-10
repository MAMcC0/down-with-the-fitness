import { Button, Card } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';

// Defines a card that is exported to the exercise guide. This card includes the name of the exercise, 
// description, diagram, and a modal that opens an embedded youtube video demonstrating the exercise
const ExerciseCard = ({ fullBodyExercises }) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div className="ex-card">
      {fullBodyExercises &&
        fullBodyExercises.map((exercise) => (
          <Card className="card" style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>{exercise.exerciseName}</Card.Title>
              <Card.Img variant="top" src={exercise.img} />
              <Card.Text>{exercise.description}</Card.Text>
              <Button className="card-button"
                id="modal-button"
                variant="primary" 
                onClick={handleShow}>
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
                  <Button
                    className="card-button"
                    id="modal-button"
                    variant="primary"
                    onClick={handleClose}>
                    Dismiss
                  </Button>
                </Modal.Footer>
              </Modal>

            </Card.Body>
          </Card>
        ))
      }
    </div >
  );
};

export default ExerciseCard;

