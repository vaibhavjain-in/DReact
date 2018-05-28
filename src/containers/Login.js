import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import cookie from 'react-cookies'
import "./Login.css";
import $ from 'jquery';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    $.ajax({
      url: "http://localhost/light/docroot/oauth/token",
      method: 'POST',
      data: {
          grant_type: 'password',
          username: this.state.username,
          password: this.state.password,
          client_id: '2710fb62-49d8-44d6-b4dc-afed12270144',
          client_secret: 'admin'
        },
      error : function(err) {
        console.log('Error!', err)
      },
      success: function(data) {
        console.log(data);
        if (typeof(data.access_token.length) !== 'undefined') {
          cookie.save('token', data.access_token, { path: '/' })
          window.location.href = '/sessionlist';
        }
      }.bind(this)
    });
  }

  render() {
    return (
      <div className="Login">
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="username" bsSize="large">
            <ControlLabel>Username</ControlLabel>
            <FormControl
              autoFocus
              type="text"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}
