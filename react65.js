//App.js

import React from "react";
import { Button,Container,Row,Col,Card} from "react-bootstrap";
function App(){
    return(
    <Container>
        <Row className="mt-5">
            <Col md={{span:6,offset:3}}>
            <Card>
                <Card.Header>React Bootstrap Example</Card.Header>
                <Card.Body>
                    <Card.Title>Welcome to React Bootstrap</Card.Title>
                    <Card.Text>This is a simple example</Card.Text>
                    <Button variant="primary">Click Me!</Button>
                </Card.Body>
            </Card>
            </Col>
        </Row>
    </Container>
    );
}
export default App;

//index.js

import 'bootstrap/dist/css/bootstrap.min.css'
