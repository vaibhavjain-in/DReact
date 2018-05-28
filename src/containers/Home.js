import React, {Component} from "react";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander"><h1>DReact</h1>
          <p>A simple Decoupled Drupal React App</p>
        </div>
      </div>
    );
  }
}