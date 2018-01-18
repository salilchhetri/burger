import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap';

class BurgerBuilder extends Component {
  render() {
    return (
      <Aux>
        <Grid>
          <Row>
            <Col sm={6}>
              <Burger />
            </Col>
            <Col sm={6}>
              <div>Build Controls</div>
            </Col>
          </Row>
        </Grid>
      </Aux>
    )
  }
}

export default BurgerBuilder;