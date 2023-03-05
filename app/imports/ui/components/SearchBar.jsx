import React from 'react';
import { Row, Col, InputGroup, Form, Button } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';

const SearchBar = () => (
  <Row className="mx-0 py-4">
    <Col sm={10} md={8} lg={6} className="mx-auto">
      <InputGroup size="lg">
        <Form.Control type="text" className="bg-light text-white rounded-1 border-0 fs-6" placeholder="Search the web without being tracked" />
        <Button variant="dark" type="button" className="bg-light search border-0"><Search /></Button>
      </InputGroup>
    </Col>
  </Row>
);
export default SearchBar;
