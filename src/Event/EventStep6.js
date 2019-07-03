import React from 'react';
import './event.css';


class EventStep6 extends React.Component {
    constructor() {
        super();
        this.state = {
        };
    }

    render() {

        return (
            <div className="container">
                <h1>Elegir un Chef</h1>
                <button type="button" class="btn btn-primary" onClick={this.props.goToEventStep7}>Siguiente</button>
            </div>
        );
    }
}

export default EventStep6;