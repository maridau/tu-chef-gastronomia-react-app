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

    };

    this.handleInput = this.handleInput.bind(this);
    this.addEventData = this.addEventData.bind(this);
  }

  handleInput(e) {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    })
    this.addEventData(name, value);
  }

  addEventData = (name, value) => {
    this.setState({
      //const myEvent = {...this.props.myEvent, eventName: name}
      //const newObject = {...oldObject, name: 'Modified name'}
      //myEvent: this.props.myEvent.map(event => event.eventName === name ? event.eventName : value)
      myEvent: this.props.myEvent.map(item => {
        if (item.eventName === name) {
          item = { ...this.props.myEvent, eventName: value };
        }
        return item; //me devuelve el nuevo evento
      })

    })
    console.log(this.item)
  }

  handleSubmit = () => {
    if (this.props.myEvent.id === 1) {
      this.props.addEventData(this.props.myEvent.id, {
        eventName: this.props.myEvent.eventName
      });
    }
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
            id="guests"
            label="¡Contanos!"
            className={this.props.classes.textField}
            //value={this.state.guests}
            onChange={this.handleInput}
            margin="normal"
          />

          <Button variant="contained"  className={this.props.classes.button} onClick={this.handleSubmit}>
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