import React, { Component } from 'react';
import { Link, BrowserRouter } from "react-router-dom";
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import './App.css';
import Authenticate from "./Authenticate";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App container">
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">DReact</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem href="/signup">Signup</NavItem>
              <NavItem href="/login">Login</NavItem>
              <NavDropdown eventKey={3} title="Navigation" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1} href="/addsession">Add Session</MenuItem>
                <MenuItem eventKey={3.2} href="/sessionlist">Session list</MenuItem>
                <MenuItem eventKey={3.3} href="/userlist">User list</MenuItem>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Authenticate />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;