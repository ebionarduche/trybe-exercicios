import React, {Component} from "react";
import { Route, } from 'react-router-dom'
import Login from "./Login";
import Carteira from "./Carteira";

class Content extends Component {
  render() {
    return (
      <main>
        <Route exact path='/' component={ Login } />
        <Route exact path='/carteira' component={ Carteira } />
      
      </main>
    )
  }
}

export default Content
