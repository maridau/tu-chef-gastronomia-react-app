import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        textAlign: 'center',
    },
    formControl: {
        width: '100%',
    },
    paper: {
        padding: theme.spacing(3, 2),
        margin: theme.spacing(2, 0),
        width: '100%'
    },
    dense: {
        marginTop: 19,
    },
    button: {
        margin: theme.spacing(1),
    },
});

class Home extends React.Component {
    render() {

        return (
            <form className={this.props.classes.container} noValidate autoComplete="off">
                <Paper className={this.props.classes.paper}>
                    <img src="assets/Eventos-07.png" height='150px' alt='Eventos' />
                    <Typography variant="h6">
                       Una experiencia diferente 
                       en la comodidad de tu casa
                        o en el lugar que hayas elegido
                         para tu evento.<br></br>
                         Mediante estas preguntas recogeremos la información necesaria
                         para sugerirte las mejores opciones para tu evento.
                    </Typography>
                    <Button variant="contained" color="primary"  className={this.props.classes.button} onClick={this.props.goToEventRegister}>
                        Comenzar
                    </Button>
</Paper>
            </form>
        );
    }
}

export default withStyles(styles)(Home);