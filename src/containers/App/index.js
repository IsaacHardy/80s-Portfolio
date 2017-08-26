import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Sun from '../../components/Sun/index';
import Star from '../../components/Star/index';
import './App.css';

class App extends Component {
  render() {
    let generateStars = () => {
      let amount = 250;
      let stars = [];

      for (let i = 0; i < amount; i++) {
        stars.push(<Star key={i+1}/>);
      }

      return stars;
    };
    return (
      <div className="App">
        <nav className="nav">
          <NavLink activeClassName="selected" className="navlink" to="/">Isaac Hardy</NavLink>
          <a target="_blank" rel="noopener noreferrer" className="gitHub" href="https://github.com/IsaacHardy"><i className="fa fa-github" aria-hidden="true"></i></a>
          <a target="_blank" rel="noopener noreferrer" className="linkedIn" href="https://www.linkedin.com/in/isaachardy/"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
        </nav>
        <div className="starContainer">
          {generateStars()}
        </div>
        <Sun />
        {this.props.children}
      </div>
    );
  }
}

export default App;
