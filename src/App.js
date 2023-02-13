import { Button, Container, Form, Row, Stack } from "react-bootstrap";
import MemoCard from "./MemoCard";

function App() {

  return (
    <Container>
      <Row className="mt-5">
        <h1 className="text-center">메모</h1>
      </Row>
      <Row className="mb-5">
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>
        <Button variant="success">추가</Button>
      </Row>
      <Stack gap={3}>
        {Array(5).fill().map(() => <MemoCard />)}
      </Stack>
    </Container>
  );
}

export default App;
