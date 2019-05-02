import React, { Component } from 'react';
import {
    Button, CardImg, CardTitle, Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';

class PetModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            nestedModal: false,
            closeAll: false
        };

        this.toggle = this.toggle.bind(this);
        this.toggleNested = this.toggleNested.bind(this);
        this.toggleAll = this.toggleAll.bind(this);
    }

    componentDidMount() {
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    toggleNested() {
        this.setState({
            nestedModal: !this.state.nestedModal,
            closeAll: false
        });
    }

    toggleAll() {
        this.setState({
            nestedModal: !this.state.nestedModal,
            closeAll: true
        });
    }

    render() {
        return (
            <div>
                <Button color="info" onClick={this.toggle}>Ver Detalles</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} >
                    <ModalHeader toggle={this.toggle}>Adopta</ModalHeader>
                    <ModalBody>
                        <CardImg top width="100%" src={this.props.pet.image} alt="Card image cap" />
                        <CardTitle><b>Nombre:</b> {this.props.pet.name}</CardTitle>
                        <CardTitle><b>Especie:</b> {this.props.pet.species}</CardTitle>
                        <CardTitle><b>Raza:</b> {this.props.pet.breed}</CardTitle>
                        <CardTitle><b>Descripción:</b> {this.props.pet.description}</CardTitle>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            <br />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success" onClick={this.toggleNested}>Adoptar</Button>
                        <Modal isOpen={this.state.nestedModal} toggle={this.toggleNested} onClosed={this.state.closeAll ? this.toggle : undefined}>
                            <ModalHeader>Transacción realizada con éxito</ModalHeader>
                            <ModalBody>Felicidades! Has adoptado a tu nueva Mascota! :)</ModalBody>
                            <ModalFooter>
                                <Button color="info" onClick={this.toggleAll}>Ok</Button>
                            </ModalFooter>
                        </Modal>
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default PetModal;
