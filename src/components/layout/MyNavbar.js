import React, { Component } from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ContactModal from "./ContactModal";
import InvestModal from "./InvestModal";

class MyNavbar extends Component {
  state = {
    showContact: false,
    showInvestment: false
  };

  toggleContact = () => {
    this.setState({ showContact: !this.state.showContact });
  };

  toggleInvestment = () => {
    this.setState({ showInvestment: !this.state.showInvestment });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar className="sticky-top" bg="light" expand="lg">
          <Link to="/">
            <Navbar.Brand>WeiCheng's Portfolio</Navbar.Brand>
          </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link className="nav-link" to="/">
                HOME
              </Link>
              <Link className="nav-link" to="/skill">
                SKILL
              </Link>
              <Link className="nav-link" to="/project">
                PROJECT
              </Link>
              <Button
                variant="outline-primary investButton"
                onClick={this.toggleInvestment}
              >
                Investment
              </Button>
              <Button
                variant="primary investButton"
                onClick={this.toggleContact}
              >
                Contact
              </Button>
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
      </React.Fragment>
    );
  }
}

export default MyNavbar;
