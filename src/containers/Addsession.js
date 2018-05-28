import React, {Component} from "react";
import {Button, FormGroup, FormControl, ControlLabel} from "react-bootstrap";
import "./Addsession.css";

export default class Addsession extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: ""
    };
  }

  validateForm() {
    return this.state.title.length > 0 && this.state.body.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
      <div className="Addsession">
        <h2>Add Session</h2>
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="title" bsSize="large">
            <ControlLabel>Title</ControlLabel>
            <FormControl
              autoFocus
              type="text"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="body" bsSize="large">
            <ControlLabel>Body</ControlLabel>
            <FormControl
              value={this.state.body}
              onChange={this.handleChange}
              componentClass="textarea"
              rows="20"
            />
          </FormGroup>
          <div class="row">
            <div class="content-row">
              <FormGroup controlId="formControlsSelect">
                <ControlLabel>Session Track</ControlLabel>
                <FormControl componentClass="select" placeholder="select">
                  <option value="multilingual">Multilingual</option>
                  <option value="cnd">Coding & Development</option>
                  <option value="config">Drupal 8 Configuration Management
                  </option>
                  <option value="fe">Front-end</option>
                  <option value="D8">Drupal 8</option>
                  <option value="decoupled">Decoupled</option>
                </FormControl>
              </FormGroup>
            </div>
            <div class="content-row">
              <FormGroup controlId="formControlsSelect">
                <ControlLabel>Skill Level</ControlLabel>
                <FormControl componentClass="select" placeholder="select">
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="expert">Expert</option>
                </FormControl>
              </FormGroup>
            </div>
          </div>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Submit
          </Button>
        </form>
      </div>
    );
  }
}
