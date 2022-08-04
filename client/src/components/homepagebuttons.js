import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_WORKOUTS, QUERY_USER_WORKOUTS, QUERY_WORKOUT_TYPES } from '../../utils/queries'

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

            <br />

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

            <br />

            <div class="create-workout-button">
                <Button variant="primary" size="lg" active>
                    Create Custom Workout
                </Button>{' '}
            </div>

            <br />

            <div class="create-workout-button">
                <Button variant="primary" size="lg" active>
                    Exercise Guide
                </Button>{' '}
            </div>

        </div>
    );
}

export default HomeButtons;
