import React from 'react';
import './event.css';


class EventStep1 extends React.Component {
    constructor() {
        super();
        this.state = {
        };
    }


    render() {
    console.log(this.props.myEvent1)
        return (
            <div className="container">
                <h1>¿Cuántas personas van a ser?</h1>
                <button type="button" className="btn btn-primary" onClick={this.props.goToEventStep2}>Siguiente</button>
            </div>

        );
    }
}

export default EventStep1;