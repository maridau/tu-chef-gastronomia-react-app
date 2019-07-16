import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import './event.css';


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
    componentWillMount() {
        const {checked} = this.props
        if (checked) {
            this.setState({
                switched: true,
            })
        }
    }

    constructor(props) {
        super(props);
        this.state= {
            restrictions: '',
            switched: props.checked,
            Vegetariana: 'Vegetariana',
            Gluten: 'Gluten',
            Mariscos: 'Mariscos',
            Lacteos: 'Lacteos',
            FrutosSecos: 'Frutos Secos'
        };
    }
   
    handleChange = (event, switched) => {
        this.setState({switched: !this.state.switched})
        if (switched === true) {
            this.setState({
                restrictions: this.restrictions + ', ' + event.target.value
            });
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.changeEventData('restrictions', this.state.restrictions);
        this.setState({
            restrictions: '',
        });
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
                                    {...this.props} 
                                    checked={this.state.switched}
                                    onChange={this.handleChange}
                                    value={this.state.Vegetariana}
                                />
                            }
                            label="Vegetariana"
                        />
                        <FormControlLabel
                            control={
                                <GreenCheckbox
                                    {...this.props} 
                                    checked={this.state.switched}
                                    onChange={this.handleChange}
                                    value={this.state.Gluten}
                                />
                            }
                            label="Gluten"
                        />
                        <FormControlLabel
                            control={
                                <GreenCheckbox
                                    {...this.props} 
                                    checked={this.state.switched}
                                    onChange={this.handleChange}
                                    value={this.state.Mariscos}
                                />
                            }
                            label="Mariscos"
                        />
                        <FormControlLabel
                            control={
                                <GreenCheckbox
                                    {...this.props} 
                                    checked={this.state.switched}
                                    onChange={this.handleChange}
                                    value={this.state.Lacteos}
                                />
                            }
                            label="Lacteos"
                        />
                        <FormControlLabel
                            control={
                                <GreenCheckbox
                                    {...this.props} 
                                    checked={this.state.switched}
                                    onChange={this.handleChange}
                                    value={this.state.FrutosSecos}
                                />
                            }
                            label="Frutos secos"
                        />
                    </FormControl>
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