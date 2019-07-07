import React from 'react';
import './event.css';


class EventStep2 extends React.Component {
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
                <h1>¿Almuerzo o Cena?</h1>
                <form>
                    <input type="text" onChange={this.handleInput} name="eventMeal"></input>
                </form>
                <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Guardar</button>
                <button type="button" className="btn btn-primary" onClick={this.props.goToEventStep3}>Siguiente</button>
            </div>

        );
    }
}

export default EventStep2;