import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function MemoCard() {
  return (
    <Card>
      <Card.Body>
        <div class="d-flex justify-content-between">
          <div>
            This is some text within a card body.
          </div>
          <Button variant='danger'>삭제</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default MemoCard;