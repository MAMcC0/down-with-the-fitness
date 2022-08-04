import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export default function customWorkoutsButtons() {
  return (
    <div class="homebuttons">
        <Accordion>
        <Accordion.Item eventKey="0">
            <Accordion.Header>Custom Workout 1</Accordion.Header>
            <Accordion.Body>
                <div class="home-workout-buttons-standardf">                    
                        <ul class="custom-1">
                          <li>exercise 1</li>
                          <li>exercise 2</li>                  
                          <li>exercise 3</li>
                          <li>exercise 4</li>
                          <li>exercise 5</li>
                          <li><Button variant="primary" size="lg" active>Start</Button>{' '}</li>
                        </ul>
                </div>
            </Accordion.Body>
        </Accordion.Item>
        </Accordion>

        <Accordion>
        <Accordion.Item eventKey="0">
            <Accordion.Header>Custom Workout 2</Accordion.Header>
            <Accordion.Body>
                <div class="home-workout-buttons-standardf">                    
                        <ul class="custom-1">
                          <li>exercise 1</li>
                          <li>exercise 2</li>                  
                          <li>exercise 3</li>
                          <li>exercise 4</li>
                          <li>exercise 5</li>
                          <li><Button variant="primary" size="lg" active>Start</Button>{' '}</li>
                        </ul>
                </div>
            </Accordion.Body>
        </Accordion.Item>
        </Accordion>

        <Accordion>
        <Accordion.Item eventKey="0">
            <Accordion.Header>Custom Workout 3</Accordion.Header>
            <Accordion.Body>
                <div class="home-workout-buttons-standardf">                    
                        <ul class="custom-1">
                          <li>exercise 1</li>
                          <li>exercise 2</li>                  
                          <li>exercise 3</li>
                          <li>exercise 4</li>
                          <li>exercise 5</li>
                          <li><Button variant="primary" size="lg" active>Start</Button>{' '}</li>
                        </ul>
                </div>
            </Accordion.Body>
        </Accordion.Item>
        </Accordion>

    </div>
  );
}
