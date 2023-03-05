import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { CheckCircleFill } from 'react-bootstrap-icons';

const Info = () => (
  <Row className="mx-0 pt-2">
    <Col className="text-center">
      <h2><strong>Tired of being traced online? We can help.</strong></h2>
      <p className="m-0 pb-1">Get seamless privacy protection on your browser for free with one download:</p>
      <ul className="list-unstyled list-inline">
        <li className="list-inline-item"><CheckCircleFill className="checkMark" /> Private Search</li>
        <li className="list-inline-item"><CheckCircleFill className="checkMark" /> Tracker Blocking</li>
        <li className="list-inline-item"><CheckCircleFill className="checkMark" /> Site Encryption</li>
      </ul>
      <Button variant="primary" type="button" className="bg-primary border-0 text-white rounded-3 mt-2 py-2">Add DuckDuckGo to Chrome</Button>
      <p className="mt-3" style={{ fontSize: '12px' }}>Trusted by tens of millions worldwide!</p>
    </Col>
  </Row>
);
export default Info;
