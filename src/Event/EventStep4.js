import React from 'react';
import './event.css';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormLabel from '@material-ui/core/FormLabel';
import FormHelperText from '@material-ui/core/FormHelperText';


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


class EventStep4 extends React.Component {
    constructor() {
        super();
        this.state = {
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e) {
        const {name, value} = e.target;
        this.setState({[name]:value})
        console.log(name, value)
    }
    
    handleSubmit(e) {
        e.preventDefault();
        console.log('submit')
        this.props.onAddEventData(this.state);
        this.setState.handleInput='';
    }


    render() {
        console.log(this.props.myEvent)
        return (

            <form className={this.props.classes.container} noValidate autoComplete="off">
                <Paper className={this.props.classes.paper}>
                    <Typography variant="h5">
                    Seleccionar fecha
                    </Typography>
                        <FormLabel component="legend">¿Cuál va mejor con tu evento?</FormLabel>
                     

                        <FormHelperText>¡Sorprendé a tus invitados con algo diferente!</FormHelperText>
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
