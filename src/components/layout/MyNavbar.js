import React, { Component, Fragment } from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ContactModal from './ContactModal';
import InvestModal from './InvestModal';

class MyNavbar extends Component {
  state = {
    showContact: false,
    showInvestment: false,
    navExpanded: false,
  };

  toggleContact = () => {
    this.setState({ showContact: !this.state.showContact });
  };

  toggleInvestment = () => {
    this.setState({ showInvestment: !this.state.showInvestment });
  };

  setNavExpanded = () => {
    this.setState({ navExpanded: !this.state.navExpanded });
  };

  render() {
    const { navExpanded } = this.state;
    return (
      <Fragment>
        <Navbar
          onToggle={this.setNavExpanded}
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
              <Link onClick={this.setNavExpanded} className="nav-link" to="/">
                HOME
              </Link>
              <Link
                onClick={this.setNavExpanded}
                className="nav-link"
                to="/skill"
              >
                SKILL
              </Link>
              <Link
                onClick={this.setNavExpanded}
                className="nav-link"
                to="/project"
              >
                PROJECT
              </Link>
              <Link
                onClick={this.setNavExpanded}
                className="nav-link"
                to="/resume"
              >
                Résumé
              </Link>
              <div>
                <Button
                  variant="primary investButton"
                  onClick={this.toggleContact}
                >
                  Contact
                </Button>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <ContactModal
          showContact={this.state.showContact}
          toggleContact={this.toggleContact}
        />
        <InvestModal
          showInvestment={this.state.showInvestment}
          toggleInvestment={this.toggleInvestment}
        />
      </Fragment>
    );
  }
}

export default MyNavbar;
