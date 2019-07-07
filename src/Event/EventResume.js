import React from 'react';
import './event.css';


class EventResume extends React.Component {
    constructor() {
        super();
        this.state = {
        };
    }

    render() {
        console.log(this.props.myEvent)
        return (
            <div className="container">
                <h1>Resumen del evento registrado</h1>

                    {
                        this.props.myEvent.map((item)=>{
                    return(
                        <ul>
                            <li>{item}</li>
                        </ul>
                    )
                    })
 }

                <button type="button" className="btn btn-primary">Siguiente</button>
            </div>
        );
    }
}

export default EventResume;