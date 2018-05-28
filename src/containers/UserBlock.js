import React, { Component } from 'react';
import cookie from 'react-cookies'
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from "react-bootstrap";

export default class UserBlock extends Component {
  render() {
    if (cookie.load('token')) {
      return (
        <div>Welcome user !</div>
      );
    }
    else if (!this.authPath()) {
      return (
        <Navbar.Collapse>
        <NavItem href="/signup">Signup</NavItem>
        <NavItem href="/login">Login</NavItem>
        </Navbar.Collapse>
      );
    }
    return false;
  }

  authPath() {
    var path = window.location.href.replace(/^(?:\/\/|[^\/]+)*\//, "");
    if (path == 'login' || path == 'signup') {
      return true;
    }
    return '';
  }
}
