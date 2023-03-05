import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Cards = () => (
  <Container fluid className="p-0">
    <Row className="mx-0 my-4">
      <Col className="text-center">
        <h6><strong>Privacy Protection For Any Device</strong></h6>
      </Col>
    </Row>
    <Row className="justify-content-center mx-0">
      <Col xs={7} sm={5} md={3} className="text-center mb-3">
        <Card className="bg-dark rounded-4 py-4" style={{ minHeight: '310px' }}>
          <Card.Body>
            <img className="mx-auto d-block mb-4" style={{ minHeight: '75px' }} src="/images/laptop.svg" alt="A laptop." />
            <h5 className="card-title"><strong>Privacy for Chrome</strong></h5>
            <p className="card-text">Browse as usual, and we&asp;ll take care of the rest. We bundled our search engine, tracker blocker, and encryption enforcer into one <a className="cardLinks text-decoration-none" href="/">Chrome Extension</a>.
            </p>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={7} sm={5} md={3} className="text-center mb-3">
        <Card className="bg-dark rounded-4 py-4" style={{ minHeight: '310px' }}>
          <Card.Body>
            <img className="mx-auto d-block mb-4" style={{ minHeight: '75px' }} src="/images/search.svg" alt="A magnifying glass." />
            <h5 className="card-title"><strong>Private Search Engine</strong></h5>
            <p className="card-text">Search privately with our app or extension, add private web search to your favorite browser, or search directly at <a className="cardLinks text-decoration-none" href="/">duckduckgo.com</a>.
            </p>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={7} sm={5} md={3} className="text-center mb-3">
        <Card className="bg-dark rounded-4 py-4" style={{ minHeight: '310px' }}>
          <Card.Body>
            <img className="mx-auto d-block mb-4" style={{ minHeight: '75px' }} src="/images/mobile.svg" alt="A mobile phone." />
            <h5 className="card-title"><strong>Privacy Browser App</strong></h5>
            <p className="card-text">Our private browser for mobile comes equipped with our search engine, tracker blocker, encryption enforcer, and more. Available on <a className="cardLinks text-decoration-none" href="/">iOS & Android</a>.
            </p>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);
export default Cards;
