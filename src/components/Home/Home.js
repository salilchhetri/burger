import React from 'react';
import {
  Alert,
  Button,
  Grid,
  Row,
  Col,
  ButtonToolbar
} from 'react-bootstrap';

class Home extends React.Component {
  constructor(...args) {
    super(...args);

    this.handleAlertShow = this.handleAlertShow.bind(this);
    this.handleAlertDismiss = this.handleAlertDismiss.bind(this);

    this.state = {
      alertVisible: true
    };
  }

  handleAlertDismiss() {
    this.setState({ alertVisible: false });
  }

  handleAlertShow() {
    this.setState({ alertVisible: true });
  }

  render() {
    if (this.state.alertVisible) {
      return (
        <Grid>
          <Row>
            <Col md={6} mdOffset={3}>
              <Alert bsStyle="danger" onDismiss={this.handleAlertDismiss}>
                <h4>Oh snap! You got an error!</h4>
                <p>
                  Change this and that and try again. Duis mollis, est non commodo
                    luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
                    Cras mattis consectetur purus sit amet fermentum.
					</p>
                <p>
                  <ButtonToolbar>
                    <Button bsStyle="danger">Take this action</Button>
                    <Button onClick={this.handleAlertDismiss}>Hide Alert</Button>
                  </ButtonToolbar>
                </p>
              </Alert>
            </Col>
          </Row>
        </Grid>

      );
    }
    return (
      <Grid>
        <Row>
          <Col md={12}>
            <Button onClick={this.handleAlertShow}>Show Alert</Button>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Home;