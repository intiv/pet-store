import React, { Component } from 'react';

import './index.css';

import PetCard from '../../components/PetCard/PetCard';

class Pets extends Component {
  state = {
    pets: []
  };

  componentDidMount() {
    fetch('/api/pets')
      .then((res) => res.json())
      .then((pets) => this.setState({ ...this.state, pets }));
  }

  handleAdoptButton = (id) => {
    fetch(`/api/pets/adopt/${id}`)
      .then((res) => res.json())
      .then(() => {
        const newPets = this.state.pets.filter((pet) => pet.id !== id);
        this.setState({ ...this.state, pets: newPets });
      });
  };

  render() {
    return (
      <div className="grid">
        {this.state.pets.map((pet, index) => (
          <PetCard
            pet={pet}
            handleAdoptButton={this.handleAdoptButton}
            key={index}
          />
        ))}
      </div>
    );
  }
}

export default Pets;
