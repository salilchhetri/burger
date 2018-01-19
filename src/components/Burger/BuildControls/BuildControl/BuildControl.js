import React from 'react';
import {
  Row,
  Col,
  Button,
  ButtonToolbar
} from 'react-bootstrap';
import './BuildControl.css';

const buildControl = (props) => {
  return (
    <Row className="Controls">
      <Col sm={6}><strong>{props.label}</strong></Col>
      <Col sm={6}>
        <ButtonToolbar>
          <Button bsStyle="primary">Add</Button>
          <Button bsStyle="danger">Remove</Button>
        </ButtonToolbar>
      </Col>
    </Row>
  )
}

export default buildControl;