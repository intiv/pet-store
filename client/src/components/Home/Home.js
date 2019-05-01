import React, { Component } from 'react';

class Home extends Component {
  
    constructor(){
        super();
        this.state = {
            gente: []
        }
    }

    componentDidMount() {
        fetch('/api/customers')
            .then(res => res.json())
            .then(gente => this.setState({gente}, () => console.log(gente)));
    }

    render() {
        return (
            <div className="App">
            <h2>Gente</h2>
            <ul>
                {this.state.gente.map(persona =>
                    <li key={persona.id}>{persona.id}. {persona.firstName} {persona.secondName}</li>    
                )}
            </ul>
            </div>
        );
    }
}

export default Home;
