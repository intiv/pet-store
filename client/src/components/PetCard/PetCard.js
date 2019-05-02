import React, { Component } from 'react';
import { Card, CardImg, CardTitle, CardBody } from 'reactstrap';
import PetModal from '../PetModal/PetModal';

import './PetCard.css';
class PetCard extends Component {
  render() {
    return (
      <Card inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardImg
          top
          width="100%"
          height="250px"
          src={this.props.pet.image}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>
            <b>Nombre:</b> {this.props.pet.name}
          </CardTitle>
          <CardTitle>
            <b>Especie:</b> {this.props.pet.species}
          </CardTitle>
          <CardTitle>
            <b>Raza:</b> {this.props.pet.breed}
          </CardTitle>
          <PetModal
            pet={this.props.pet}
            handleAdoptButton={this.props.handleAdoptButton}
          />
        </CardBody>
      </Card>
    );
  }
}

export default PetCard;
