import React from 'react';
import './event.css';


class EventResume extends React.Component {
    constructor() {
        super();
        this.state = {
        };
    }

    render() {

        return (
            <div className="container">
                <h1>Resumen del evento registrado</h1>
                <button type="button" className="btn btn-primary">Siguiente</button>
            </div>
        );
    }
}

export default EventResume;