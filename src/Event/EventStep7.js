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


class EventStep7 extends React.Component {
    constructor() {
        super();
        this.state = {
            newContactEmail:''
        };
    }

    handleInput = (e) => {
        this.setState({
            newContactEmail: e.target.value
        });
        console.log(e.target.value)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.changeEventData('contactEmail', this.state.newContactEmail);
        this.setState({
            newContactEmail: '',
        });
    }
    
    render() {
        console.log(this.props.myEvent)
        return (
            <form className={this.props.classes.container} noValidate autoComplete="off">
                <Paper className={this.props.classes.paper}>
                    <Typography variant="h5">
                        Te enviamos más detalles sobre tu evento
                    </Typography>
                    
                    <TextField
                        name="contactEmail"
                        label="Email"
                        className={this.props.classes.textField}
                        value={this.state.newContactEmail}
                        onChange={this.handleInput}
                        margin="normal"
                    />
                   
                    <Button variant="contained" color="primary" className={this.props.classes.button} onClick={this.handleSubmit}>
                        Guardar
                    </Button>
                    <Button variant="contained" className={this.props.classes.button} onClick={this.props.goToEventResume}>
                        Siguiente
                    </Button>
                </Paper>
            </form>
        );
    }
}
export default withStyles(styles)(EventStep7);
