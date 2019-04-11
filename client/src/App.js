import React, { Component } from 'react';
import './App.css';
import Homepage from './components/Homepage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <Homepage/>
      </div>
    );
  }
}

export default App;
