import React from 'react';
import './event.css';


class EventStep7 extends React.Component {
    constructor() {
        super();
        this.state = {
        };
    }

    render() {

        return (
            <div className="container">
                <h1>Info de contacto</h1>
                <button type="button" class="btn btn-primary" onClick={this.props.goToEventResume}>Siguiente</button>
            </div>
        );
    }
}

export default EventStep7;