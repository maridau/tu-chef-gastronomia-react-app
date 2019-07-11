import React from 'react';
import './event.css';

import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';


const styles = theme => ({
    palette: {
        primary: '#96be1e', //verde
        secondary:'#323c46', //gris fuerte
      },
    card: {
        maxWidth: 400,
        margin: "auto",
        transition: "0.3s",
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        "&:hover": {
            boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
        }
    },
    media: {
        paddingTop: "56.25%"
    },
    content: {
        textAlign: "left",
        padding: theme.spacing.unit * 3
    },
    divider: {
        margin: `${theme.spacing.unit * 3}px 0`
    },
    heading: {
        fontWeight: "bold"
    },
    subheading: {
        lineHeight: 1.8
    },
    bigAvatar: {
        margin: 10,
        width: 80,
        height: 80,
        display: "inline-block",
        border: "2px solid #96be1e",
        "&:not(:first-of-type)": {
            marginLeft: -theme.spacing.unit
        }
    }
});

class EventResume extends React.Component {
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
    }
    render() {
        const { classes } = this.props;

        console.log(this.props.myEvent)

        return (
            <div>
                    <Card className={classes.card}>
                    <CardMedia
                        className={classes.media}
                        image={
                            "assets/food1.jpg"
                        }
                    />
                    <CardContent className={classes.content}>
                        <Typography
                            className={classes.heading}
                            variant={"h4"}
                            gutterBottom>
                            Nombre del evento
                        </Typography>
                        <Typography
                            className={classes.subheading}
                            variant={"caption"}>
                            <ul>
                                <li>Fecha</li>
                                <li>Cantidad de personas</li>
                                <li>Almuerzo - Cena</li>
                                <li>Comida Italiana</li>
                                <li>Sin Gluten</li>
                                <li>Chef</li>
                            </ul>
                        </Typography>
                        <Divider className={classes.divider} light />
                        <List>
                            <ListItem>
                                <ListItemAvatar>

                                    {this.state.chef.map(chef => (
                                        <Avatar className={classes.bigAvatar} key={chef} src={chef} />
                                    ))}

                                </ListItemAvatar>
                                <ListItemText primary="Chef" secondary="Julio Gonzalez" />
                            </ListItem>
                        </List>

                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default withStyles(styles)(EventResume);
