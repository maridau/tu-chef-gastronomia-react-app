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
                                    <a class="nav-link" href="https://getbootstrap.com/docs/4.0/examples/navbars/#">Home <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="https://getbootstrap.com/docs/4.0/examples/navbars/#">Link</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link disabled" href="https://getbootstrap.com/docs/4.0/examples/navbars/#">Disabled</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="http://example.com/" id="dropdown07" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                    <div class="dropdown-menu" aria-labelledby="dropdown07">
                                        <a class="dropdown-item" href="https://getbootstrap.com/docs/4.0/examples/navbars/#">Action</a>
                                        <a class="dropdown-item" href="https://getbootstrap.com/docs/4.0/examples/navbars/#">Another action</a>
                                        <a class="dropdown-item" href="https://getbootstrap.com/docs/4.0/examples/navbars/#">Something else here</a>
                                    </div>
                                </li>
                            </ul>
                            <form class="form-inline my-2 my-md-0">
                                <input class="form-control" type="text" placeholder="Search" aria-label="Search"></input>
                            </form>
                        </div>
                    </div>
                </nav>
                <div class="jumbotron">
                    <div class="container">
                        <h1 class="display-3">Hello, world!</h1>
                        <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
                        <p><a class="btn btn-primary btn-lg" href="https://getbootstrap.com/docs/4.3/examples/jumbotron/#" role="button">Learn more »</a></p>
                    </div>
                </div>
            </div>

        );
    }
}

export default Header;