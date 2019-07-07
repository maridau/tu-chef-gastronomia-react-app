import React from 'react';
import './event.css';


class EventStep3 extends React.Component {
    constructor() {
        super();
        this.state = {
        };
    }

    render() {

        return (
            <div className="container">
                <h1>Tipo de comida</h1>
                <ul>
                    <li>Mediterranea</li>
                    <li>Italiana</li>
                    <li>Francesa</li>
                    <li>Japonesa</li>
                    <li>Mexicana</li>
                    <li>Dejarme sorprender</li>
                </ul>
                <button type="button" className="btn btn-primary" onClick={this.props.goToEventStep4}>Siguiente</button>
            </div>

        );
    }
}

export default EventStep3;