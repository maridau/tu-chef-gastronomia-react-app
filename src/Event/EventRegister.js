import React from 'react';
import './event.css';


class EventRegister extends React.Component {
    constructor() {
        super();
        this.state = {
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleInput(e) {
        const { name, value} = e.target;
        this.setState({[name]: value})
        
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onAddEventData(this.state);
        this.setState.handleInput = ''
    }
   
    render() {
        console.log(this.props.myEvent)
        return (
            <div className="container">
                <h1>Registro de Evento</h1>
                <h3>¿Qué vas a festejar? ¡Contanos!</h3>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleInput} name="eventName"></input>
                </form>
                <button type="submit" className="btn btn-primary" onClick={this.props.goToEventStep1}>Comenzar</button>
            </div>

        );
    }
}

export default EventRegister;