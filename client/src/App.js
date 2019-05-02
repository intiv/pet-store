import React, { Component } from 'react';
import './App.css';
import Pets from './containers/pets';
class App extends Component {
  render() {
    return (
      <div inverse style={{ backgroundColor: '#000' }} className="App">
        <h1 inverse style={{ color: '#FFF' }}>
          Adopta tu Mascota
        </h1>
        <br />
        <div inverse style={{ backgroundColor: '#000' }} className="container">
          <Pets />
        </div>
      </div>
    );
  }
}

export default App;
