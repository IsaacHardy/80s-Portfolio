import React, { Component } from 'react';
import Square from '../../components/Square/index';
import './Home.css';

class Home extends Component {
  render() {
    let win = window,
      doc = document,
      el = doc.documentElement,
      g = doc.getElementsByTagName('body')[0],
      x = win.innerWidth || el.clientWidth || g.clientWidth,
      y = win.innerHeight || el.clientHeight || g.clientHeight;

    let boxesPerRow = Math.ceil(x / 75);
    let numberOfRows = Math.floor(y / 100);

    let median = boxesPerRow % 2 === 0 ? (boxesPerRow / 2) : Math.round(boxesPerRow / 2);

    let rowStyle = {
      display: 'flex'
    };

    let data = [];

    for (let row = 1; row <= numberOfRows; row++) {
      let squares = [];

      for (let box = 1; box <= boxesPerRow; box++) {
        squares.push(<Square key={box}/>);
      }

      data.push(<div className="squareRows" style={rowStyle} key={row}>{squares}</div>);
    }

    return (
      <div className="Home">
        {data}
      </div>
    );
  }
}

export default Home;
