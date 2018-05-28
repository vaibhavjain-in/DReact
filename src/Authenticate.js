import React, { Component } from 'react';
import cookie from 'react-cookies'
import Routes from "./Routes";

export default class Authenticate extends Component {
  render() {
    if (cookie.load('token')) {
      if (this.authPath()) {
        window.location.href = '/sessionlist';
      }
      return (
        <Routes/>
      );
    }
    else if (!this.authPath()) {
      window.location.href = '/login';
    }
    return (
      <Routes/>
    );
  }

  authPath() {
    var path = window.location.href.replace(/^(?:\/\/|[^\/]+)*\//, "");
    if (path == 'login' || path == 'signup') {
      return true;
    }
    return '';
  }
}
