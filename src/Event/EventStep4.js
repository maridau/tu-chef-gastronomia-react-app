import React from 'react';
import './event.css';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormLabel from '@material-ui/core/FormLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import { DatePicker } from "@material-ui/pickers";
import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';


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
    datePicker:{
        marginTop: 20,
        marginBottom: 20
    },
});


class EventStep4 extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedDate: Date()
        };
    }

    handleDateChange = (date) => {
        this.setState({
            selectedDate: date
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.changeEventData('date', this.state.selectedDate);
        this.setState({
            selectedDate: Date()
        });
    }

    render() {
        console.log(this.props.myEvent)
        
        return (

            <form className={this.props.classes.container} noValidate autoComplete="off">
                <Paper className={this.props.classes.paper}>
                    <Typography variant="h5">
                    ¡Empieza la cuenta regresiva!"
                    </Typography>
                    <FormLabel component="legend"></FormLabel>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <DatePicker
                            className={this.props.classes.datePicker}
                            label="Seleccionar fecha"
                            name='date'
                            value={this.state.selectedDate}
                            onChange={this.handleDateChange}
                            animateYearScrolling
                        />
                        </MuiPickersUtilsProvider>

                        <FormHelperText>Precio estimado por {this.props.myEvent.guests} invitados: $ {this.props.myEvent.price}</FormHelperText>
                    <Button variant="contained" color="primary" className={this.props.classes.button} onClick={this.handleSubmit}>
                        Guardar
                    </Button>
                    <Button variant="contained" className={this.props.classes.button} onClick={this.props.goToEventStep5}>
                        Siguiente
                    </Button>
                </Paper>
            </form>

        );
    }
}

export default withStyles(styles)(EventStep4);
