import React from 'react';
import './event.css';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormLabel from '@material-ui/core/FormLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Avatar from "@material-ui/core/Avatar";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';



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
    bigAvatar: {
        margin: 5,
        width: 80,
        height: 80,
        display: "inline-block",
        border: "2px solid #96be1e",
        "&:not(:first-of-type)": {
            marginLeft: -theme.spacing.unit
        }
    }
});


class EventStep6 extends React.Component {
    constructor() {
        super();
        this.state = {
            chef: [
                { id:1, picture: "assets/chef1.png", name: 'Julio Gonzalez' },
                { id:2, picture: "assets/chef2.png", name: 'Pedro Rivero' },
                { id:3, picture: "assets/chef3.png", name: 'Santiago Lima' },
                { id:4, picture: "assets/chef4.png", name: 'Julio Rodriguez' },
                { id:5, picture: "assets/chef5.png", name: 'Melissa Perez' }
            ],
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value })
        console.log(name, value)
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log('submit')
        this.props.onAddEventData(this.state);
        this.setState.handleInput = '';
    }


    render() {

        return (
            <form className={this.props.classes.container} noValidate autoComplete="off">
                <Paper className={this.props.classes.paper}>
                    <Typography variant="h5">
                        Elegir un Chef
                    </Typography>
                    <FormLabel component="legend">¿Cuál va mejor con tu evento?</FormLabel>
                    <List>

                        {this.state.chef.map(chef => (
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar className={this.props.classes.bigAvatar} key={chef.id} src={chef.picture} />
                                </ListItemAvatar>
                                <ListItemText primary='Chef' secondary={chef.name} />
                            </ListItem>
                        )
                        )}

                    </List>

                    <FormHelperText>¡Sorprendé a tus invitados con algo diferente!</FormHelperText>
                    <Button variant="contained" color="primary" className={this.props.classes.button} onClick={this.handleSubmit}>
                        Guardar
                    </Button>
                    <Button variant="contained" className={this.props.classes.button} onClick={this.props.goToEventStep7}>
                        Siguiente
                    </Button>
                </Paper>
            </form>
        );
    }
}
export default withStyles(styles)(EventStep6);