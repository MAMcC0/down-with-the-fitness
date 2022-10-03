import React from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// Exports a form that includes a title input field, a dropdown to choose what target body area the user wants to focus on.
export default function CustomWorkoutForm() {

  return (
    <Form>
      <fieldset>
        <Form.Group className="mb-3">
          <Form.Label class="workout-title" htmlFor="TextInput">Workout Title</Form.Label>
          <Form.Control id="TextInput" placeholder="ex. Feel the Burn" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label class="target-area" htmlFor="TargetArea">Target Area</Form.Label>
          <Form.Select id="TargetArea" placeholder="Select one...">
            <option>Full Body</option>
            <option>Arms</option>
            <option>Chest</option>
            <option>Abs</option>
            <option>Legs</option>
          </Form.Select>
        </Form.Group>
        <Button type="submit">Find Exercises</Button>
        {/* <p class="select">Select your exercises</p> */}
      </fieldset>
    </Form>
  );
  }