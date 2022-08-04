import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';



function HomeButtons() {
  return (
    <div class="homebuttons">
        <Accordion>
        <Accordion.Item eventKey="0">
            <Accordion.Header>Standard Workouts</Accordion.Header>
            <Accordion.Body>
                <div class="home-workout-buttons-standardf">                    
                        <ButtonGroup vertical>
                          <Button>Full Body Workouts</Button>
                          <Button>Arm Workouts</Button>                  
                          <Button>Chest Workouts</Button>
                          <Button>Ab Workouts</Button>
                          <Button>Legs Workouts</Button>
                        </ButtonGroup>
                </div>
            </Accordion.Body>
        </Accordion.Item>
        </Accordion>

        <Accordion>
        <Accordion.Item eventKey="1">
            <Accordion.Header>My Custom Workouts</Accordion.Header>
            <Accordion.Body>
            <div class="home-workout-buttons-custom">
                        <ButtonGroup vertical>
                          <Button>Full Body Workouts</Button>
                          <Button>Arm Workouts</Button>                  
                          <Button>Chest Workouts</Button>
                          <Button>Ab Workouts</Button>
                          <Button>Legs Workouts</Button>
                        </ButtonGroup>
            </div>
            </Accordion.Body>
        </Accordion.Item>
        </Accordion>
    </div>
  );
}
