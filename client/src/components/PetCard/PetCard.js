import React, { Component } from 'react';
import {
    Card, CardImg, CardTitle, CardColumns, CardBody
} from 'reactstrap';
import PetModal from '../PetModal/PetModal';
class PetCard extends Component {

    constructor() {
        super();
        this.state = {
            pets: [
                {
                    id: 0,
                    name: 'Bruno',
                    image: 'https://images.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                    species: 'Perro',
                    breed: 'Chihuahua',
                    description: 'Recién nacido',
                },
                {
                    id: 1,
                    name: 'Luna',
                    image: 'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                    species: 'Perro',
                    breed: 'Husky',
                    description: 'Recién nacido',
                },
                {
                    id: 2,
                    name: 'Nina',
                    image: 'https://images.pexels.com/photos/1472999/pexels-photo-1472999.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                    species: 'Gato',
                    breed: 'N/A',
                    description: '3 meses',
                },
                {
                    id: 3,
                    name: 'Stan & Lee',
                    image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                    species: 'Perro',
                    breed: 'Labrador',
                    description: '3 meses',
                },
                {
                    id: 4,
                    name: 'Pepe',
                    image: 'https://images.pexels.com/photos/1485637/pexels-photo-1485637.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                    species: 'Perro',
                    breed: 'Labrador',
                    description: '3 meses',
                }
            ],
        };

    }

    componentDidMount() {
    }

    render() {
        return (
            <CardColumns>
                {this.state.pets.map(pet =>
                    <Card inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                        <CardImg top width="100%" src={pet.image} alt="Card image cap" />
                        <CardBody>
                            <CardTitle><b>Nombre:</b> {pet.name}</CardTitle>
                            <CardTitle><b>Especie:</b> {pet.species}</CardTitle>
                            <CardTitle><b>Raza:</b> {pet.breed}</CardTitle>
                            <PetModal pet={pet}></PetModal>
                        </CardBody>
                    </Card>
                )}
            </CardColumns>
        );
    }
}

export default PetCard;
