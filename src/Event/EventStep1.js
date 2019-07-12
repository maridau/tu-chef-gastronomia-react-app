import React from 'react';
import './event.css';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
        width: '100%',
    },
    textField: {
        marginRight: theme.spacing(4),
        width: '100%',
    },
    dense: {
        marginTop: 19,
    },
    button: {
        margin: theme.spacing(1),
    },
});



class EventStep1 extends React.Component {
    constructor() {
        super();
        this.state = {
            newEventGuests: ''
        };
    }

    handleInput = e => {
        this.setState({
            newEventGuests: e.target.value
        });
        console.log(this.state.newEventGuests)
    }


    handleSubmit = (e) => {
        e.preventDefault();
        this.props.changeEventData('guests', this.state.newEventGuests);
        this.setState({
            newEventGuests: '',
        });
    }

    render() {
        console.log(this.props.myEvent)
        return (
            <form className={this.props.classes.container} noValidate autoComplete="off">
                <Paper className={this.props.classes.paper}>
                    <Typography variant="h5">
                        ¿Cuántas personas van a ser?
                    </Typography>

                    <TextField
                        name="guests"
                        label="Invitados"
                        className={this.props.classes.textField}
                        value={this.state.newEventGuests}
                        onChange={this.handleInput}
                        margin="normal"
                    />
                    <Button variant="contained" color="primary" className={this.props.classes.button} onClick={this.handleSubmit}>
                        Guardar
                    </Button>
                    <Button variant="contained" className={this.props.classes.button} onClick={this.props.goToEventStep2}>
                        Siguiente
                    </Button>
                </Paper>
            </form>
        );
    }
}
export default withStyles(styles)(EventStep1);
