import React, { Component } from 'react';

import './Star.css';

class Star extends Component {
  render() {
    let starStyle = {
      top: Math.random() * 100 + '%',
  		left: Math.random() * 100 + '%',
  		animation: 'blinkAfter 10s infinite ' + Math.random() * 100 + 's ease-out',
  		width: Math.random() * 2 + 7 + 'px',
  		height: Math.random() * 2 + 7 + 'px',
  		opacity: Math.random() * 5 / 10 + 0.5
    };

    return (
      <div style={starStyle} className="Star">
        <div className="twinkle"></div>
      </div>
    );
  }
}

export default Star;
