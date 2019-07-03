import React from 'react';
import './event.css';


class EventRegister extends React.Component {
    constructor() {
        super();
        this.state = {
        };
    }

    render() {

        return (
            <div className="container">
                <h1>Registro de Evento</h1>
                <h3>¿Qué vas a festejar? ¡Contanos!</h3>
                <button type="button" class="btn btn-primary" onClick={this.props.goToEventStep1}>Comenzar</button>
            </div>

        );
    }
}

export default EventRegister;