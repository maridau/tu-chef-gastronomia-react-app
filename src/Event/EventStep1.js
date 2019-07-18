import React from 'react';
import './event.css';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

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
    slider: {
        marginTop: 40,
        margin: theme.spacing(1),
    },
});

const marks = [
    {
        value: 5,
        label: '',
    },
    {
        value: 10,
        label: '',
    },
    {
        value: 20,
        label: '',
    },
    {
        value: 30,
        label: '',
    },
    {
        value: 50,
        label: '',
    },
];

class EventStep1 extends React.Component {
    constructor() {
        super();
        this.state = {
            newEventGuests: 1,
            initialPrice:200,
            newPrice:1
        };
    }

    handleInput = (e) => {
        this.setState({
            newEventGuests: parseInt(e.target.innerText),
        });
        this.handlePrice();
        console.log(e.target.innerText)
    }

    handlePrice = () => {
        this.setState({
           newPrice: this.state.initialPrice*this.state.newEventGuests
        });
        this.props.changePrice(this.state.newPrice)
     }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.changeEventData('guests', this.state.newEventGuests);
        this.setState({
            newEventGuests: 0
        });
     }

    render() {
        console.log(this.props.myEvent)

        return (
            <form className={this.props.classes.container} noValidate autoComplete="off">
                <Paper className={this.props.classes.paper}>
                    <Typography variant="h5">
                       Cantidad de invitados:
                    </Typography>
                    <Slider
                        onChange={this.handleInput}
                        className={this.props.classes.slider}
                        defaultValue={50}
                        aria-labelledby="discrete-slider-always"
                        step={5}
                        marks={marks}
                        valueLabelDisplay="on"
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
