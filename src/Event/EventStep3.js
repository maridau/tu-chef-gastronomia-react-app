import React from 'react';
import './event.css';


class EventStep3 extends React.Component {
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
                <h1>Tipo de comida</h1>
                <ul>
                    <li>Mediterranea</li>
                    <li>Italiana</li>
                    <li>Francesa</li>
                    <li>Japonesa</li>
                    <li>Mexicana</li>
                    <li>Dejarme sorprender</li>
                </ul>
                <form>
                    <input type="text" onChange={this.handleInput} name="eventFoodType"></input>
                </form>
                <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Guardar</button>
                <button type="button" className="btn btn-primary" onClick={this.props.goToEventStep4}>Siguiente</button>
            </div>

        );
    }
}

export default EventStep3;