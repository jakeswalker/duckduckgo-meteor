import React from 'react';
import { Container, Navbar, Nav, Dropdown } from 'react-bootstrap';
import { MegaphoneFill, ChevronDown, Twitter, Reddit, ChatLeftText, Envelope } from 'react-bootstrap-icons';
import SideMenu from './SideMenu';

const TopMenu = () => (
  <Container fluid className="p-0">
    <Navbar bg="black" className="justify-content-end py-4 ">
      <Nav className="mx-sm-0 mx-md-3">
        <Nav.Link>
          <Dropdown>
            <Dropdown.Toggle variant="dark" className="bg-black border-0 py-0 px-sm-1 px-md-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <MegaphoneFill className="fs-5" />&nbsp;
              <ChevronDown className="fs-6" />
            </Dropdown.Toggle>
            <Dropdown.Menu className="bg-dark list-unstyled rounded-3 py-0 overflow-hidden">
              <Dropdown.Item className="text-white" href="#"><Twitter /> Twitter</Dropdown.Item>
              <Dropdown.Item className="text-white" href="#"><Reddit /> Reddit</Dropdown.Item>
              <Dropdown.Item className="text-white" href="#"><ChatLeftText /> Blog</Dropdown.Item>
              <Dropdown.Item className="text-white" href="#"><Envelope /> Newsletter</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav.Link>
        <Nav.Link>
          <SideMenu />
        </Nav.Link>
      </Nav>
    </Navbar>
  </Container>
);
export default TopMenu;
