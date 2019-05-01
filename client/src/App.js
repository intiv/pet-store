import React, { Component } from 'react';
import './App.css';
import Home from './components/Home/Home';

class App extends Component {
  render(){
    return (
      <div className="App">
        <h1>React App</h1>
        <Home></Home>
      </div>
    );
  }
}

export default App;
