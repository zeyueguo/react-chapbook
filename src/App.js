import React, { Component } from 'react';

import LikeButton from './componet/10'
import EventEmitter from './componet/EventEmitter'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <EventEmitter />
        
      {/*  <LikeButton /> */}

      </div>
    );
  }
}

export default App;
