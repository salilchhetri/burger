import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import { Grid, Row, Col } from 'react-bootstrap';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component {

  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      bacon: 0,
      meat: 0
    }
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col sm={6}>
            <Burger ingredients={this.state.ingredients} />
          </Col>
          <Col sm={6}>
            <BuildControls />
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default BurgerBuilder;