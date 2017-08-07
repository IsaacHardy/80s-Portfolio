import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Sun from '../../components/Sun/index';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="nav">
          <NavLink activeClassName="selected" className="navlink" to="/">Isaac Hardy</NavLink>
          <a target="_blank" className="gitHub" href="https://github.com/IsaacHardy"><i className="fa fa-github" aria-hidden="true"></i></a>
          <a target="_blank" className="linkedIn" href="https://www.linkedin.com/in/isaachardy/"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
        </nav>
        <Sun />
        {this.props.children}
      </div>
    );
  }
}

export default App;
