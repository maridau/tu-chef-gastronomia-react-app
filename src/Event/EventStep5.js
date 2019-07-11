import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import './event.css';


const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        width: '100%',
    },
    paper: {
        padding: theme.spacing(3, 2),
        margin: theme.spacing(2, 0),
        width: '100%'
    },
    dense: {
        marginTop: 19,
    },
    button: {
        margin: theme.spacing(1),
    },
});


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
                color: '#96be1e',
                '&$checked': {
                    color: '#96be1e',
                },
            },
            checked: {},
        })(props => <Checkbox color="default" {...props} />);

        return (
            <form className={this.props.classes.container} noValidate autoComplete="off">
                <Paper className={this.props.classes.paper}>
                    <Typography variant="h5">
                        Restricciones
                    </Typography>
                    <FormControl component="fieldset" className={this.props.classes.formControl}>
                        <FormLabel component="legend">Para tener en cuenta</FormLabel>
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
                    </FormControl>
                    <Button variant="contained" color="primary" className={this.props.classes.button} onClick={this.handleSubmit}>
                        Guardar
                    </Button>
                    <Button variant="contained" className={this.props.classes.button} onClick={this.props.goToEventStep6}>
                        Siguiente
                    </Button>

                </Paper>
            </form>
        );
    }
}

export default withStyles(styles)(EventStep5);