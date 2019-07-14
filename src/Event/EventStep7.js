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
        };
    }

    render() {
        console.log(this.props.myEvent)
        return (
            <form className={this.props.classes.container} noValidate autoComplete="off">
                <Paper className={this.props.classes.paper}>
                    <Typography variant="h5">
                        Contact information
          </Typography>

                    <TextField
                        id="contactName"
                        label="Name"
                        className={this.props.classes.textField}
                        //value={this.state.contact.name}
                        //onChange={this.handleContactChange('name')}
                        margin="normal"
                    />

                    <TextField
                        id="contactEmail"
                        label="Email"
                        className={this.props.classes.textField}
                        //value={this.state.contact.email}
                        //onChange={this.handleContactChange('email')}
                        margin="normal"
                    />

                    <TextField
                        id="contactPhone"
                        label="Phone"
                        className={this.props.classes.textField}
                        //value={this.state.contact.phone}
                        //onChange={this.handleContactChange('phone')}
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
