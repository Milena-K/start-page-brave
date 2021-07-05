import React, { Component } from 'react';
import Category from './Category.js';

class Board extends Component {
  render() {
    return (
      <div className="board">
        <hr className="bars"/>
          <div className="title">CLOCK & WEATHER</div>
        <hr className="bars"/>
        <div className="content">
          <div className="categories">
            <Category className="category"/>
            <Category className="category"/>
            <Category className="category"/>
          </div>
        </div>
        <hr className="bars"/>
      </div>
    )
  }
}

export default Board;
