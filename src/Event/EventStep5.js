import React from 'react';
import './event.css';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';


const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
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


class EventStep5 extends React.Component {
      constructor(props) {
        super(props);
        this.state= {
            Vegetariana: false,
            Gluten: false,
            Mariscos: false,
            Lacteos: false,
            FrutosSecos: false
        };
    }
   
    handleChangeVegetariana = (e) => {
        this.setState({
            Vegetariana: !this.state.Vegetariana
        })
    }

    handleChangeGluten = (e) => {
        this.setState({
            Gluten: !this.state.Gluten
        })
    }
    handleChangeMariscos = (e) => {
        this.setState({
            Mariscos: !this.state.Mariscos
        })
    }
    handleChangeLacteos = (e) => {
        this.setState({
            Lacteos: !this.state.Lacteos
        })
    }
    handleChangeFrutosSecos = (e) => {
        this.setState({
            FrutosSecos: !this.state.FrutosSecos
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.changeEventData('restrictions', this.state);
    }

    render() {
        console.log(this.props.myEvent)

          const GreenCheckbox = withStyles({
            root: {
                color: '#c9e86a',
                '&$checked': {
                    color: '#96be1e',
                },
            },
            checked: {},
        })(props => <Checkbox color="default" {...props} />);

        return (
            <form className={this.props.classes.container} noValidate autoComplete="off">
                <Paper className={this.props.classes.paper}>
                    <Typography variant="h5">
                        Restricciones
                    </Typography>
                    <FormControl component="fieldset" className={this.props.classes.formControl}>
                        <FormLabel component="legend">Para tener en cuenta</FormLabel>
                        <FormControlLabel
                            control={
                                <GreenCheckbox
                                
                                    checked={this.state.Vegetariana}
                                    onChange={this.handleChangeVegetariana}
                                    value={this.state.Vegetariana}
                                />
                            }
                            label="Vegetariana"
                        />
                        <FormControlLabel
                            control={
                                <GreenCheckbox
                                    checked={this.state.Gluten}
                                    onChange={this.handleChangeGluten}
                                    value={this.state.Gluten}
                                />
                            }
                            label="Gluten"
                        />
                        <FormControlLabel
                            control={
                                <GreenCheckbox
                                    checked={this.state.Mariscos}
                                    onChange={this.handleChangeMariscos}
                                    value={this.state.Mariscos}
                                />
                            }
                            label="Mariscos"
                        />
                        <FormControlLabel
                            control={
                                <GreenCheckbox
                                    checked={this.state.Lacteos}
                                    onChange={this.handleChangeLacteos}
                                    value={this.state.Lacteos}
                                />
                            }
                            label="Lacteos"
                        />
                        <FormControlLabel
                            control={
                                <GreenCheckbox
                                  
                                    checked={this.state.FrutosSecos}
                                    onChange={this.handleChangeFrutosSecos}
                                    value={this.state.FrutosSecos}
                                />
                            }
                            label="Frutos secos"
                        />
                    </FormControl>
                    <FormHelperText>Precio estimado por {this.props.myEvent.guests} invitados: $ {this.props.myEvent.price}</FormHelperText>
                    <Button variant="contained" color="primary" className={this.props.classes.button} onClick={this.handleSubmit}>
                        Guardar
                    </Button>
                    <Button variant="contained" className={this.props.classes.button} onClick={this.props.goToEventStep6}>
                        Siguiente
                    </Button>

                </Paper>
            </form>
        );
    }
}

export default withStyles(styles)(EventStep5);