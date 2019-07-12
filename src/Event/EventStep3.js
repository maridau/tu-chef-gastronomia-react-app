import React from 'react';
import './event.css';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

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



class EventStep3 extends React.Component {
    constructor() {
        super();
        this.state = {
            newFoodType:'',
        };
    }

    handleInput = e => {
        this.setState({
            newFoodType: e.target.value
        });
        console.log(this.state.newFoodType)
    }


    handleSubmit = (e) => {
        e.preventDefault();
        this.props.changeEventData('mealType', this.state.newFoodType);
        this.setState({
            newFoodType: '',
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
                        Tipo de comida
                    </Typography>
                        <FormLabel component="legend">¿Cuál va mejor con tu evento?</FormLabel>
                        <RadioGroup
                            aria-label="Tipo de comida"
                            name="foodType"
                            className={this.props.classes.group}
                            value={this.state.newFoodType}
                            onChange={this.handleInput}
                        >
                            <FormControlLabel value="mediterranea" control={<GreenRadioButton />} label="Mediterranea" />
                            <FormControlLabel value="italiana" control={<GreenRadioButton />} label="Italiana" />
                            <FormControlLabel value="francesa" control={<GreenRadioButton />} label="Francesa" />
                            <FormControlLabel value="japonesa" control={<GreenRadioButton />} label="Japonesa" />
                            <FormControlLabel value="mexicana" control={<GreenRadioButton />} label="Mexicana" />
                            <FormControlLabel value="sorpresa" control={<GreenRadioButton />} label="¡Me dejo sorprender!" />
                            
                        </RadioGroup>
                        <FormHelperText>¡Sorprendé a tus invitados con algo diferente!</FormHelperText>
                    <Button variant="contained" color="primary" className={this.props.classes.button} onClick={this.handleSubmit}>
                        Guardar
                    </Button>
                    <Button variant="contained" className={this.props.classes.button} onClick={this.props.goToEventStep4}>
                        Siguiente
                    </Button>
                </Paper>
                </form>
        );
    }
}
export default withStyles(styles)(EventStep3);