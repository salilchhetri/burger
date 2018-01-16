import React, { Component } from 'react';
import './Auth.css';

import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  Grid,
  Row,
  Col,
  Form,
  Button,
  ButtonToolbar
} from 'react-bootstrap';

class Auth extends Component {
  state = {
    controls: {
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Your email'
        },
        label: 'Email',
        value: '',
        validation: {
          required: true,
          isEmail: true
        },
        valid: false,
        touched: false
      },
      password: {
        elementType: 'input',
        elementConfig: {
          type: 'password',
          placeholder: 'Password'
        },
        label: 'Password',
        value: '',
        validation: {
          required: true,
          minLength: 7
        },
        valid: false,
        touched: false
      }
    }
  }

  checkValidity(value, rules) {
    let isValid = true;
    if (!rules) {
      return true;
    }

    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid
    }

    if (rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid
    }

    if (rules.isNumeric) {
      const pattern = /^\d+$/;
      isValid = pattern.test(value) && isValid
    }

    return isValid;
  }

  inputChangedHandler = (event, controlName) => {
    const updatedControls = {
      ...this.state.controls,
      [controlName]: {
        ...this.state.controls[controlName],
        value: event.target.value,
        valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation),
        touched: true
      }
    };
    this.setState({ controls: updatedControls })

  }


  render() {
    const formElementsArray = [];
    for (let key in this.state.controls) {
      formElementsArray.push({
        id: key,
        config: this.state.controls[key]
      })
    }



    const form = formElementsArray.map(formElement => (
      <FormGroup controlId={formElement.id} key={formElement.id}>
        <ControlLabel>{formElement.config.label}</ControlLabel>{' '}
        <FormControl
          type={formElement.config.elementConfig.type}
          //     elementConfig={formElement.config.elementConfig}
          value={formElement.config.value}
          //invalid={!formElement.config.valid}
          //  validationState={formElement.config.validation}
          //touched={formElement.config.touched}
          placeholder={formElement.config.elementConfig.placeholder}
          onChange={(event) => this.inputChangedHandler(event, formElement.id)}
        />
      </FormGroup>
    ));

    return (
      <Grid>
        <Row>
          <Col md={4} mdOffset={4}>
            <Form className="Auth">
              {form}
              <ButtonToolbar>
                <Button type="submit">Register</Button>
                <Button type="submit">Login</Button>
              </ButtonToolbar>
            </Form>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Auth;