import React from 'react';
import { Route } from 'react-router-dom';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import {
  Navbar,
  Nav,
  NavItem
}
  from 'react-bootstrap';
import './Navbar.css';

import Home from '../Home/Home';
import About from '../About/About';
import Auth from '../../containers/Auth/Auth';
import Profile from '../Profile/Profile';


const navbarInstance = (props) => {
  return (
    <div>
      {/* <Link to="/">Home</Link>
      <Link to="/about">About</Link> */}
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <IndexLinkContainer to="/" className="navbar-brand">
              <NavItem
                eventKey={1}>
                KickAss Burgers
              </NavItem>
            </IndexLinkContainer>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>

          <Nav pullRight>
            <IndexLinkContainer to="/">
              <NavItem
                eventKey={1}>
                Home
              </NavItem>
            </IndexLinkContainer>

            <LinkContainer to="/about">
              <NavItem
                eventKey={2}>
                About
              </NavItem>
            </LinkContainer>

            <LinkContainer to="/profile">
              <NavItem
                eventKey={3}>
                Profile
              </NavItem>
            </LinkContainer>

            <LinkContainer to="/auth">
              <NavItem
                eventKey={3}>
                Login
              </NavItem>
            </LinkContainer>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/profile" component={Profile} />
      <Route path="/auth" component={Auth} /> */}
    </div>
  )
}

export default navbarInstance;