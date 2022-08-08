import React from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// function targetAreaSelection(userInput) {
//   //if else if chain
//   // return renderfunction(match)
//   //function targetAreaSelection(){
//   //if(arms === exercise.bodyarea where body area equals arms){
//   //return renderfunction(arms)
//   // }
//   // function renderfunction(retobj)
//   // for loop retObj.length
//   // (things needed to create chips)
//   // }
// }

export default function CustomWorkoutForm() {

  return (
    <Form>
      <fieldset>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="TextInput">Workout Title</Form.Label>
          <Form.Control id="TextInput" placeholder=" input" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="TargetArea">Target Area</Form.Label>
          <Form.Select id="TargetArea" placeholder="Select one...">
            <option>Full Body</option>
            <option>Arms</option>
            <option>Chest</option>
            <option>Abs</option>
            <option>Legs</option>
          </Form.Select>
        </Form.Group>
        <Button type="submit">Find Exercises</Button>
      </fieldset>
    </Form>
  );
  }