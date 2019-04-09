import React from "react";
import { Modal, ListGroup, Button } from "react-bootstrap";
import Socials from "../socials/Socials";

const ContactModal = props => {
  return (
    <Modal show={props.showContact} onHide={props.toggleContact} centered>
      <Modal.Header closeButton>
        <Modal.Title>Contact Info</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup.Item>Wei Cheng Hung</ListGroup.Item>
        <ListGroup.Item>s777610@gmail.com</ListGroup.Item>
        <ListGroup.Item>619-366-1344</ListGroup.Item>
        <ListGroup.Item>Thousand Oaks, CA</ListGroup.Item>
        <ListGroup.Item>
          <Socials />
        </ListGroup.Item>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.toggleContact}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ContactModal;
