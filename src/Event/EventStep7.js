import React from 'react';
import './event.css';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
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
            name: '',
            email: '',
            phone: ''
        };
    }

    handleInputName = (e) => {
        this.setState({
            name: e.target.value
        });
    }
    handleInputEmail = (e) => {
        this.setState({
            email: e.target.value
        });
    }
    handleInputPhone = (e) => {
        this.setState({
            phone: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.changeEventData('contact', this.state);
        this.setState({
            name: '',
            email: '',
            phone: ''
        });
    }
    
    render() {
        console.log(this.props.myEvent)
        return (
            <form className={this.props.classes.container} noValidate autoComplete="off">
                <Paper className={this.props.classes.paper}>
                    <Typography variant="h5">
                        Tus datos de contacto
                    </Typography>
                    
                    <TextField
                        required
                        name="name"
                        label="Nombre"
                        className={this.props.classes.textField}
                        value={this.state.name}
                        onChange={this.handleInputName}
                        margin="normal"
                    />
                    <TextField
                        name="email"
                        label="Email"
                        className={this.props.classes.textField}
                        value={this.state.email}
                        onChange={this.handleInputEmail}
                        margin="normal"
                    />
                    <TextField
                        required
                        name="phone"
                        label="Teléfono"
                        className={this.props.classes.textField}
                        value={this.state.phone}
                        onChange={this.handleInputPhone}
                        margin="normal"
                    />
                   <FormHelperText>Precio estimado por {this.props.myEvent.guests} invitados: $ {this.props.myEvent.price}</FormHelperText>
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
