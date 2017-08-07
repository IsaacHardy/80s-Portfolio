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
          <NavLink activeClassName="selected" className="navlink" to="/">Home</NavLink>
        </nav>
        <Sun />
        {this.props.children}
      </div>
    );
  }
}

export default App;
