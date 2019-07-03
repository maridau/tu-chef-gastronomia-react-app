import React from 'react';
import './header.css';

class Header extends React.Component {
    render() {

        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container">
                        <a className="navbar-brand" href="#LOGO"><img src="assets/Logo-TuChef-08.png" alt="Tu Chef" title="Tu Chef" height="120px"></img></a>
                        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="navbar-collapse collapse" id="navbarsExample07">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#home" onClick={this.props.goToHome}>Home <span class="nav-link"></span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#EventRegister" onClick={this.props.goToEventRegister}>Tu evento</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#RegistroChef" onClick={this.props.goToRegisterChef}>Registro de Chef</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#ContactUs" onClick={this.props.goToContactUs}>Contacto</a>
                                </li>
                            </ul>
                            <form className="form-inline my-2 my-md-0">
                                <input className="form-control" type="text" placeholder="Search" aria-label="Search"></input>
                            </form>
                        </div>
                    </div>
                </nav>
                
            </div>

        );
    }
}

export default Header;