import React from 'react';
import './event.css';


class EventStep2 extends React.Component {
    constructor() {
        super();
        this.state = {
        };
    }

    render() {
        console.log(this.props.myEvent)
        return (
            <div className="container">
                <h1>¿Almuerzo o Cena?</h1>
                <button type="button" className="btn btn-primary" onClick={this.props.goToEventStep3}>Siguiente</button>
            </div>

        );
    }
}

export default EventStep2;