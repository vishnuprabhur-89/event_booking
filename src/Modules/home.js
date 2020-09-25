import React from 'react';
import { BrowserRouter as Router, Switch, NavLink, Route } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Listing from './listing';
import Booking from './booking';
import useStyles from './Styles';

export default function Home() {
    const classes = useStyles();

    return (
        <Router className={classes.root}>
            <AppBar position="sticky">
                <Toolbar className={classes.ToolbarStyle}>
                    <NavLink to="/" style={{ textDecoration: 'none', color:"white", cursor:"pointer" }}><Typography variant="h6" className={classes.title}>
                        Event Booking Application
                    </Typography>
                    </NavLink>
                </Toolbar>
            </AppBar>
            <Switch>
                <Route exact path="/" component={Listing} />
                <Route path="/booking" component={Booking} />
            </Switch>
        </Router>
    );
}
