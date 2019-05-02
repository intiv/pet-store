import React, { Component } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Pets from './components/Pets/Pets';
class App extends Component {
  render(){
    return (
      <div className="App">
        <h1>React App</h1>
        <Home></Home>
        <Pets></Pets>
      </div>
    );
  }
}

export default App;
