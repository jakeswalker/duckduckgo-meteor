import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const GreenBackground = () => (
  <Row className="greenBG mx-0">
    <Col className="text-center">
      <h1><strong>We don’t store your <br />personal information. Ever.</strong></h1>
      <p className="fs-5 mt-3">Our privacy policy is simple: we don’t collect <br />or share any of your personal information.</p>
      <Button variant="dark" type="button" className="addChromeBlack border-0 rounded-3 mt-2 py-2">Add DuckDuckGo to Chrome</Button>
    </Col>
    <Container>
      <img className="img-fluid mx-auto d-block" style={{ maxWidth: '60vw' }} src="/images/monster.svg" alt="A lab monster." />
    </Container>
  </Row>
);
export default GreenBackground;
