import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { lightBlue } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import './event.css';


class EventStep5 extends React.Component {
    constructor() {
        super();
        this.state = {
            checkedA: false,
            checkedB: false,
            checkedC: false,
            checkedD: false,
            checkedE: false
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange = name => event => {
        this.setState({ ...this.state, [name]: event.target.checked });
    };

    render() {
        const GreenCheckbox = withStyles({
            root: {
                color: lightBlue[300],
                '&$checked': {
                    color: lightBlue[600],
                },
            },
            checked: {},
        })(props => <Checkbox color="default" {...props} />);

        return (
            <div className="container">
                <h1>Restricciones de comida</h1>
                <FormGroup row>
                  <FormControlLabel
                        control={
                            <GreenCheckbox
                                checked={this.state.checkedA}
                                onChange={this.handleChange('checkedA')}
                                value="checkedA"
                            />
                        }
                        label="Vegetariana"
                    />
                    <FormControlLabel
                        control={
                            <GreenCheckbox
                                checked={this.state.checkedB}
                                onChange={this.handleChange('checkedB')}
                                value="checkedB"
                            />
                        }
                        label="Gluten"
                    />
                    <FormControlLabel
                        control={
                            <GreenCheckbox
                                checked={this.state.checkedC}
                                onChange={this.handleChange('checkedC')}
                                value="checkedC"
                            />
                        }
                        label="Mariscos"
                    />
                    <FormControlLabel
                        control={
                            <GreenCheckbox
                                checked={this.state.checkedD}
                                onChange={this.handleChange('checkedD')}
                                value="checkedD"
                            />
                        }
                        label="Lacteos"
                    />
                    <FormControlLabel
                        control={
                            <GreenCheckbox
                                checked={this.state.checkedE}
                                onChange={this.handleChange('checkedE')}
                                value="checkedE"
                            />
                        }
                        label="Frutos secos"
                    />
                   
                </FormGroup>

                <button type="button" className="btn btn-primary" onClick={this.props.goToEventStep6}>Siguiente</button>
            </div>
        );
    }
}

export default EventStep5;