import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../pages/Login";

class Content extends Component {
  render() {
    return(
      <Switch>
        <Route path='/login' component={Login}/>
      </Switch> 
    )
  }
}

export default Content
