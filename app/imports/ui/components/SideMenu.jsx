import React, { useState } from 'react';
import { Button, Collapse, Card, Row, Col } from 'react-bootstrap';
import { List, X } from 'react-bootstrap-icons';

const SideMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* eslint-disable-next-line max-len */}
      <Button variant="dark" className="bg-black border-0 py-0 px-sm-1 px-md-2 text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSideMenu" onClick={() => setOpen(!open)} aria-controls="collapseSideMenu" aria-expanded={open}>
        <List className="fs-5" />
      </Button>
      <Collapse className="sideMenu overflow-scroll" in={open} dimension="width" id="collapseSideMenu">
        <Card className="bg-dark text-white m-0" body style={{ width: '205px' }}>
          <Button variant="dark" className="sideMenuClose bg-dark border-0 py-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSideMenu" onClick={() => setOpen(!open)} aria-controls="collapseSideMenu" aria-expanded={open}>
            <X className="fs-2" />
          </Button>
          <Row className="pb-3">
            <Col>
              <div className="sideMenuTitles py-2">SETTINGS</div>
              <ul className="list-unstyled">
                <li><a className="sideMenuLists text-decoration-none text-white" href="/">Themes</a></li>
                <li><a className="sideMenuLists text-decoration-none text-white" href="/">All Settings</a></li>
                <li><a className="sideMenuLists text-decoration-none text-white" href="/">!Bang Search Shortcuts</a></li>
              </ul>
            </Col>
          </Row>
          <Row className="pb-3">
            <Col>
              <div className="sideMenuTitles py-2">PRIVACY ESSENTIALS</div>
              <ul className="list-unstyled">
                <li><a className="sideMenuLists text-decoration-none text-white" href="/">Private Search</a></li>
                <li><a className="sideMenuLists text-decoration-none text-white" href="/">App and Extension</a></li>
              </ul>
            </Col>
          </Row>
          <Row className="pb-3">
            <Col>
              <div className="sideMenuTitles py-2">WHY PRIVACY</div>
              <ul className="list-unstyled">
                <li><a className="sideMenuLists text-decoration-none text-white" href="/">Privacy Blog</a></li>
                <li><a className="sideMenuLists text-decoration-none text-white" href="/">Privacy Newsletter</a></li>
                <li><a className="sideMenuLists text-decoration-none text-white" href="/">Help Spread DuckDuckGo!</a></li>
              </ul>
            </Col>
          </Row>
          <Row className="pb-3">
            <Col>
              <div className="sideMenuTitles py-2">WHO WE ARE</div>
              <ul className="list-unstyled">
                <li><a className="sideMenuLists text-decoration-none text-white" href="/">About Us</a></li>
                <li><a className="sideMenuLists text-decoration-none text-white" href="/">Privacy Policy</a></li>
                <li><a className="sideMenuLists text-decoration-none text-white" href="/">Careers</a></li>
                <li><a className="sideMenuLists text-decoration-none text-white" href="/">Press Kit</a></li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="sideMenuTitles py-2">KEEP IN TOUCH</div>
              <ul className="list-unstyled">
                <li><a className="sideMenuLists text-decoration-none text-white" href="/">Twitter</a></li>
                <li><a className="sideMenuLists text-decoration-none text-white" href="/">Reddit</a></li>
                <li><a className="sideMenuLists text-decoration-none text-white" href="/">Help</a></li>
              </ul>
            </Col>
          </Row>
        </Card>
      </Collapse>
    </>
  );
};
export default SideMenu;
