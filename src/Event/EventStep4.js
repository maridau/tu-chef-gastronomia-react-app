import React from 'react';
import './event.css';


class EventStep4 extends React.Component {
    constructor() {
        super();
        this.state = {
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e) {
        const {name, value} = e.target;
        this.setState({[name]:value})
        console.log(name, value)
    }
    
    handleSubmit(e) {
        e.preventDefault();
        console.log('submit')
        this.props.onAddEventData(this.state);
        this.setState.handleInput='';
    }


    render() {
        console.log(this.props.myEvent)
        return (
            <div className="container">
                <h1>Seleccionar fecha</h1>
                <form>
                    <input type="date" onChange={this.handleInput} name="eventDate"></input>
                </form>
                <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Guardar</button>
                <button type="button" className="btn btn-primary" onClick={this.props.goToEventStep5}>Siguiente</button>
                <button type="button" className="btn btn-primary" onClick={this.props.goToEventResume}>Final resumen</button>
            </div>

        );
    }
}

export default EventStep4;