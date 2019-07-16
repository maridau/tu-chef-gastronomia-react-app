import React from 'react';
import './event.css';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
  palette: {
    primary: '#96be1e', //verde
    secondary: '#323c46', //gris fuerte
  },
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

class EventRegister extends React.Component {
  constructor() {
    super();
    this.state = {
      newEventName: ''
    };
  }

  handleInput = e => {
    this.setState({
      newEventName: e.target.value
    });
    console.log(this.state.newEventName)
  }


  handleSubmit = (e) => {
    e.preventDefault();
    this.props.changeEventData('eventName', this.state.newEventName);
    this.setState({
      newEventName: '',
    });
  }

  render() {
    console.log(this.props.myEvent)
    return (
      <form className={this.props.classes.container} noValidate autoComplete="off">
        <Paper className={this.props.classes.paper}>
          <Typography variant="h5">
            ¿Qué vas a festejar?
          </Typography>
          <TextField
            required
            name="eventName"
            label="¡Contanos!"
            className={this.props.classes.textField}
            value={this.state.newEventName}
            onChange={this.handleInput}
            margin="normal"
          />

          <Button variant="contained" color="primary" className={this.props.classes.button} onClick={this.handleSubmit}>
            Guardar
                    </Button>
          <Button variant="contained" className={this.props.classes.button} onClick={this.props.goToEventStep1}>
            Siguiente
                    </Button>
        </Paper>
      </form>
    );
  }
}
export default withStyles(styles)(EventRegister);