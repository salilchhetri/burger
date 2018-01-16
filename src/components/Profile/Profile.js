import React from 'react';
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap';

const profile = (props) => {
  return (
    <Grid>
      <Row>
        <Col md={12}>
          <h1>Profile Page</h1>
          <p>
            This is a protected page and should be accessible only when a user is logged in.
        </p>
        </Col>
      </Row>
    </Grid>
  )
}

export default profile;