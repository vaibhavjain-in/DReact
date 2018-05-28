import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Addsession from "./containers/Addsession";
import Sessionlist from "./containers/Sessionlist";
import Userlist from "./containers/Userlist";

export default () =>
  <Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/login" exact component={Login}/>
    <Route path="/signup" exact component={Signup}/>
    <Route path="/addsession" exact component={Addsession}/>
    <Route path="/sessionlist" exact component={Sessionlist}/>
    <Route path="/userlist" exact component={Userlist}/>
    <Route component={NotFound} />
  </Switch>;
