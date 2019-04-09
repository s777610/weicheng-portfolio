import React from "react";
import { Modal, Button } from "react-bootstrap";

const ContactModal = props => {
  return (
    <Modal show={props.showInvestment} onHide={props.toggleInvestment} centered>
      <Modal.Header closeButton>
        <Modal.Title>Go To My Investment Blog</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <a
          href="https://weichenghung.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="success">Click here!</Button>
        </a>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.toggleInvestment}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ContactModal;
