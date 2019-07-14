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
        secondary: '#323c46', //gris fuerte
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
        margin: 3,
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
        };
    }
    render() {
        console.log(this.props.myEvent)
        console.log(this.props.eventChef)

        const { classes } = this.props;
        const newEvent = this.props.myEvent;

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
                            gutterBottom
                        >
                            {newEvent.eventName}
                        </Typography>
                        <Typography
                            className={classes.subheading}
                            variant={"caption"}>
                        </Typography>
                        <List>
                            <ListItem>
                                <ListItemText primary='Cantidad de invitados' secondary={newEvent.guests} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary='Momento del festejo' secondary={newEvent.mealType} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary='Tipo de comida' secondary={newEvent.foodType} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary='Fecha' secondary={newEvent.date.toString()} />
                            </ListItem>
                            
                        
                        </List>


                        <Divider className={classes.divider} light />
                        <List>
                            {this.props.eventChef.filter(item => item.id===newEvent.chef)
                                //.map((animalItem, i) => {
                                .map(item => (
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar className={classes.bigAvatar} key={item.id} src={item.picture} />
                                    </ListItemAvatar>
                                    <ListItemText primary="Chef" secondary={item.name} />
                                </ListItem>
                            ))}

                            

                        </List>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default withStyles(styles)(EventResume);
