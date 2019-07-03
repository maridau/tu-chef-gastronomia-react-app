import React from 'react';
import './event.css';


class EventStep4 extends React.Component {
    constructor() {
        super();
        this.state = {
        };
    }

    render() {

        return (
            <div className="container">
                <h1>Seleccionar fecha</h1>
                <button type="button" class="btn btn-primary" onClick={this.props.goToEventStep5}>Siguiente</button>
            </div>

        );
    }
}

export default EventStep4;