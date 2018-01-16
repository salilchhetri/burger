import React from 'react';
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap';

const about = (props) => {
  return (
    <Grid>
      <Row>
        <Col md={12}>
          <h1>About Page</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, illo ea veritatis voluptates error amet corrupti eius officia deserunt eligendi excepturi illum aliquid, beatae porro dolores fugit aperiam iusto ad?
        </p>
        </Col>
      </Row>
    </Grid>
  )
}

export default about;