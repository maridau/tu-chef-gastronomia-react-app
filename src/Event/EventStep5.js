import React from 'react';
import './event.css';


class EventStep5 extends React.Component {
    constructor() {
        super();
        this.state = {
        };
    }

    render() {

        return (
            <div className="container">
                <h1>Restricciones de comida</h1>
                <ul>
                    <li>Vegetariana</li>
                    <li>Gluten</li>
                    <li>Mariscos</li>
                    <li>Lacteos</li>
                    <li>Frutos secos</li>
                </ul>
                <button type="button" class="btn btn-primary" onClick={this.props.goToEventStep6}>Siguiente</button>
            </div>
        );
    }
}

export default EventStep5;