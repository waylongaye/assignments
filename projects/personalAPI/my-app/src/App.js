import React, { Component } from 'react';
import Home from "./Home"
import About from "./shared/About"
import Navbar from "./shared/Navbar"
import Inspire from "./shared/Inspire"
import {Switch, Route} from "react-router-dom"


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/inspire" component={Inspire}/>
        </Switch>
        
      </div>
    );
  }
}

export default App;
