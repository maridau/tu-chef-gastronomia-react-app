import React from 'react';
import './header.css';

class Header extends React.Component {
    render() {

        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div class="container">
                        <a class="navbar-brand" href="#LOGO"><img src="assets/Logo-TuChef-08.png" alt="Tu Chef" title="Tu Chef" height="120px"></img></a>
                        <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="navbar-collapse collapse" id="navbarsExample07">
                            <ul class="navbar-nav mr-auto">
                                <li class="nav-item active">
                                    <a class="nav-link" href="#home">Home <span class="nav-link"></span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#ComoFunciona">Como funciona</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#IngresoChef">Registro de Chef</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="http://example.com/" id="dropdown07" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Contacto</a>
                                    <div class="dropdown-menu" aria-labelledby="dropdown07">
                                        <a class="dropdown-item" href="#tel">Telefono</a>
                                        <a class="dropdown-item" href="#fb">Facebook</a>
                                        <a class="dropdown-item" href="#ig">Instagram</a>
                                    </div>
                                </li>
                            </ul>
                            <form class="form-inline my-2 my-md-0">
                                <input class="form-control" type="text" placeholder="Search" aria-label="Search"></input>
                            </form>
                        </div>
                    </div>
                </nav>
                
            </div>

        );
    }
}

export default Header;