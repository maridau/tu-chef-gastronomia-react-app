import React from 'react';
import './event.css';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormLabel from '@material-ui/core/FormLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Avatar from "@material-ui/core/Avatar";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
        width: '100%',
    },
    select: {
        height:'100px',
        marginTop: theme.spacing(2),
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
        width: 60,
        height: 60,
        display: "inline-block",
        border: "2px solid #96be1e",
        "&:not(:first-of-type)": {
            marginLeft: theme.spacing(1),
        }
    }
});


class EventStep6 extends React.Component {
    constructor() {
        super();
        this.state = {
            newChef: 1
        };
    }

c

    render() {
        const { classes } = this.props;
        console.log(this.props.myEvent)

        return (
            <form className={this.props.classes.container} noValidate autoComplete="off">
                <Paper className={this.props.classes.paper}>
                    <Typography variant="h5">
                        Elegir un Chef
                    </Typography>
                    <FormLabel component="legend">¿Cuál va mejor con tu evento?</FormLabel>

                    <FormControl className={classes.formControl}>
                        <Select
                            className={classes.select}
                            value={this.state.newChef}
                            onChange={this.handleInput}
                            inputProps={{
                                name: 'Chef',
                                id: 'nuevoChef',
                            }}
                        >
                            {this.props.chef.map(chef => (
                                <MenuItem key={chef.id} value={chef.id}>
                                    <ListItem>
                                            <Avatar className={this.props.classes.bigAvatar} src={chef.picture} />
                                        <ListItemText primary='Chef' secondary={chef.name} />
                                    </ListItem>
                                </MenuItem>
                            )

                            )}

                        </Select>
                    </FormControl>

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