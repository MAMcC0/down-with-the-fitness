import Card from 'react-bootstrap/Card';
import { useQuery, useMutation } from '@apollo/client';
function HeaderAndFooterExample() {
  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Title>Your next exercise is: </Card.Title>
        <Card.Text>
          
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default HeaderAndFooterExample;