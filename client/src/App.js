import React, { Component } from 'react';
import './App.css';
import PetCard from './components/PetCard/PetCard';
class App extends Component {
  render() {
    return (
      <div inverse style={{ backgroundColor: '#000' }} className="App">
        <h1 inverse style={{ color: '#FFF' }}>Adopta tu Mascota</h1>
        <br></br>
        <div inverse style={{ backgroundColor: '#000' }} className="container">
          <PetCard></PetCard>
        </div>
      </div>
    );
  }
}

export default App;
