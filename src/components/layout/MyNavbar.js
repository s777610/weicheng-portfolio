import React, { Fragment, useState } from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ContactModal from './ContactModal';

const MyNavbar = () => {
  const [showContact, setShowContact] = useState(false);
  const [navExpanded, setNavExpanded] = useState(false);

  return (
    <Fragment>
      <Navbar
        onToggle={() => setNavExpanded(!navExpanded)}
        expanded={navExpanded}
        className="sticky-top"
        bg="light"
        expand="lg"
      >
        <Link to="/">
          <Navbar.Brand>WeiCheng's Portfolio</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link
              onClick={() => setNavExpanded(!navExpanded)}
              className="nav-link"
              to="/"
            >
              HOME
            </Link>
            <Link
              onClick={() => setNavExpanded(!navExpanded)}
              className="nav-link"
              to="/skill"
            >
              SKILL
            </Link>
            <Link
              onClick={() => setNavExpanded(!navExpanded)}
              className="nav-link"
              to="/project"
            >
              PROJECT
            </Link>
            <Link
              onClick={() => setNavExpanded(!navExpanded)}
              className="nav-link"
              to="/resume"
            >
              Résumé
            </Link>
            <div>
              <Button variant="primary investButton" onClick={setShowContact}>
                Contact
              </Button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <ContactModal
        showContact={showContact}
        toggleContact={() => setShowContact(!showContact)}
      />
    </Fragment>
  );
};

export default MyNavbar;
