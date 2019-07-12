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
            restrictions:'',
            checkedA: false,
            checkedB: false,
            checkedC: false,
            checkedD: false,
            checkedE: false,
            Vegetariana: '',
            Gluten: '',
            Mariscos: '',
            Lacteos: '',
            FrutosSecos: ''
        };
    }

    handleInput = name => e => {
        this.setState({
            ...this.state, [name]: e.target.checked
        });

        if(this.state.checkedA===true)
        this.setState({
            ...this.state, Vegetariana :'Vegetariana'
        });
        else if(this.state.checkedB===true)
        this.setState({
            ...this.state, Gluten :'Gluten'
        });
        else if(this.state.checkedC===true)
        this.setState({
            ...this.state, Mariscos :'Mariscos'
        });
        else if(this.state.checkedD===true)
        this.setState({
            ...this.state, Lacteos :'Lacteos'
        });
        else if(this.state.checkedD===true)
        this.setState({
            ...this.state, FrutosSecos :'Frutos Secos'
        });

        this.setState({
            ...this.state, restrictions: this.state.Vegetariana + ', ' + this.state.Gluten + ', ' + this.state.Mariscos + ', ' + this.state.Lacteos + ', ' + this.state.FrutosSecos
        });
        console.log(this.state.restrictions)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.changeEventData('restrictions', this.state.restrictions);
        this.setState({
            restrictions: '',
        });
    }
    render() {
        const GreenCheckbox = withStyles({
            root: {
                color: '#c9e86a',
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
                                    onChange={this.handleInput('checkedA')}
                                    value={this.state.Vegetariana}
                                />
                            }
                            label="Vegetariana"
                        />
                        <FormControlLabel
                            control={
                                <GreenCheckbox
                                    checked={this.state.checkedB}
                                    onChange={this.handleInput('checkedB')}
                                    value={this.state.Gluten}
                                />
                            }
                            label="Gluten"
                        />
                        <FormControlLabel
                            control={
                                <GreenCheckbox
                                    checked={this.state.checkedC}
                                    onChange={this.handleInput('checkedC')}
                                    value={this.state.Mariscos}
                                />
                            }
                            label="Mariscos"
                        />
                        <FormControlLabel
                            control={
                                <GreenCheckbox
                                    checked={this.state.checkedD}
                                    onChange={this.handleInput('checkedD')}
                                    value={this.state.Lacteos}
                                />
                            }
                            label="Lacteos"
                        />
                        <FormControlLabel
                            control={
                                <GreenCheckbox
                                    checked={this.state.checkedE}
                                    onChange={this.handleInput('checkedE')}
                                    value={this.state.FrutosSecos}
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