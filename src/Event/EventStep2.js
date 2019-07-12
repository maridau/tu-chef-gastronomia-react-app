import React from 'react';
import './event.css';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';


const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    paper: {
        padding: theme.spacing(3, 2),
        margin: theme.spacing(2, 0),
        width: '100%'
    },
    formControl: {
        margin: theme.spacing(3),
        width: '100%'
    },
    group: {
        margin: theme.spacing(3),
        width: '100%'
    },
    dense: {
        marginTop: 19,
    },
    button: {
        margin: theme.spacing(1),
    },
});

class EventStep2 extends React.Component {
    constructor() {
        super();
        this.state = {
            newMealType:''
        };
    }

    handleInput = e => {
        this.setState({
            newMealType: e.target.value
        });
        console.log(this.state.newMealType)
    }


    handleSubmit = (e) => {
        e.preventDefault();
        this.props.changeEventData('mealType', this.state.newMealType);
        this.setState({
            newMealType: '',
        });
    }

    render() {
        console.log(this.props.myEvent)
        const GreenRadioButton = withStyles({
            root: {
                color: '#96be1e',
                '&$checked': {
                    color: '#96be1e',
                },
            },
            checked: {},
            })(props => <Radio color="default" {...props} />);

        return (
            <form className={this.props.classes.container} noValidate autoComplete="off">
                <Paper className={this.props.classes.paper}>
                    <Typography variant="h5">
                        ¿Qué comida preferís?
                    </Typography>

                    <FormLabel component="legend">¿Cuál va mejor con tu evento?</FormLabel>
                    <RadioGroup
                        aria-label="Comida"
                        name="mealType"
                        className={this.props.classes.group}
                        value={this.state.newMealType}
                        onChange={this.handleInput}
                    >
                        <FormControlLabel value="desayuno" control={<GreenRadioButton />} label="Desayuno" />
                        <FormControlLabel value="almuerzo" control={<GreenRadioButton />} label="Almuerzo" />
                        <FormControlLabel value="merienda" control={<GreenRadioButton />} label="Merienda" />
                        <FormControlLabel value="cena" control={<GreenRadioButton />} label="Cena" />


                    </RadioGroup>
                    <FormHelperText>¡Salí de la rutina y festejá distinto!</FormHelperText>

                    <Button variant="contained" color="primary" className={this.props.classes.button} onClick={this.handleSubmit}>
                        Guardar
                    </Button>
                    <Button variant="contained" className={this.props.classes.button} onClick={this.props.goToEventStep3}>
                        Siguiente
                    </Button>
                </Paper>
            </form>
        );
    }
}

export default withStyles(styles)(EventStep2);