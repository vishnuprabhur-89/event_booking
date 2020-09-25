import React, { useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import CardMedia from '@material-ui/core/CardMedia';
import useStyles from './Styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Axios from 'axios';
import { NavLink } from 'react-router-dom'

export default function Booking(props) {
    const classes = useStyles();
    const [name, setName] = React.useState('');
    const [seat, setSeat] = React.useState('');

    const [data, setData] = React.useState([])
    const [status, setStaus] = React.useState(false);
    const [username, setus] = React.useState('');
    const [validation1, set1] = React.useState({ username: "", error: false })
    const [email, setem] = React.useState('');
    const [validation2, set2] = React.useState({ username: "", error: false })
    const [seats, setsts] = React.useState(0);
    const [validation3, set3] = React.useState({ username: "", error: false })
    const [attendee, setattend] = React.useState('');
    const [validation4, set4] = React.useState({ username: "", error: false })
    const [disable, setDis] = React.useState(false)
    const [renderStatus, setrenderStatus] = React.useState(false)
    const Seats = ["Select Seats", "One", "Two", "Three", "Four", "Five", "Six"];

    useEffect(() => {
        var id = localStorage.getItem("id")
        console.log("_id", id)
        Axios.post(`http://localhost:5000/access/event`, { id: JSON.parse(id) })
            .then(result => {
                console.log("===>", result.data[0].name)
                setName(result.data[0].name)
                setSeat(result.data[0].seats)
                setData(result.data)
                setStaus(true)
            })
    }, [props])

    const username_validator = (e) => {
        setus(e.target.value)
        set1({ username: "", error: false })
    }
    const email_validator = (e) => {
        setem(e.target.value)
        set2({ username: "", error: false })
    }

    const seats_validator = (e) => {
        setsts(parseInt(e.target.value))
        set3({ username: "", error: false })
    }

    const attendee_validator = (e) => {
        setattend(e.target.value)
        set4({ username: "", error: false })
    }

    const submitValue = () => {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var s1 = false, 
        s2 = false, 
        s3 = false, 
        s4 = false;

        if (username.length > 1) {
            if (/\d/.test(username)) {
                set1({ username: "Only letters and spaces are allowed", error: true })
            } else {
                s1 = true
            }
        }
        else {
            set1({ username: "Please enter your name", error: true })
        }

        if (email.length > 1) {
            if (re.test(email)) {
                set2({ username: "", error: false })
                s2 = true
            }
            else {
                set2({ username: "Invalid email", error: true })
            }
        }
        else {
            set2({ username: "Please enter yout email", error: true })
        }

        if (parseInt(seats) >= 1) {
            if (parseInt(seats) <= seat) {
                set3({ username: "", error: false })
                s3 = true
            } else {
                set3({ username: "Number of seats selected is more than available seats", error: true })
            }
        }
        else {
            set3({ username: "Please enter the number of seats", error: true })
        }

        if (seats > 1) {
            let size = attendee.split("\n");
            size.filter(function (entry) { return entry.trim() });
            size.filter(function (entry) { return entry !== ''; });

            if (seats === size.length) {
                set4({ username: "", error: false })
                s4 = true
            }
            else {
                set4({ username: "Please enter the name of Attendees", error: true })
            }
        }
        else {
            s4 = true
        }
        if (s1 && s2 && s3 && s4) {
            setDis(true)
            setrenderStatus(true)
        }
    }
    return (
        <div className={classes.root}><br />
            <Grid className={classes.Body}>
                {renderStatus ? <Typography className={classes.titleStyle3}>Tickets booked</Typography> : <></>} <br />
                <Paper className={classes.paper}>
                    <Typography className={classes.titleStyle1}>{name}</Typography>
                    <Typography className={classes.titleStyle2}>Number of available seats: {seat}</Typography>
                    <Grid container>
                        <Grid item xs={12} sm={4} >
                            <Paper className={classes.paperImg}>
                                <CardMedia
                                    className={classes.media}
                                    image={status ? require(`${data[0].image}`) : ""}
                                    title="Paella dish"
                                />
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={8} direction="column" justify="flex-start" alignItems="flex-start" >
                            <Grid className={classes.FormStyle}>
                                <Grid item xs={12} sm={12} container direction="column" justify="flex-start" alignItems="flex-start">
                                    <TextField
                                        error={validation1.error}
                                        className={classes.formControl}
                                        id="outlined-error-helper-text"
                                        label="Name"
                                        helperText={validation1.username}
                                        variant="outlined"
                                        margin="dense"
                                        value={username}
                                        onChange={username_validator}
                                    />
                                    <TextField
                                        error={validation2.error}
                                        className={classes.formControl}
                                        id="outlined-error-helper-text"
                                        label="Email"
                                        helperText={validation2.username}
                                        variant="outlined"
                                        margin="dense"
                                        value={email}
                                        onChange={email_validator}
                                    />
                                    <FormControl variant="outlined" margin="dense" className={classes.formControl}>
                                        <InputLabel error={validation3.error} id="demo-simple-select-outlined-label">No. of Seats</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                            value={seats}
                                            onChange={seats_validator}
                                            label="No. of Seats"
                                            error={validation3.error}
                                        >
                                            {Seats.map((i, j) =>
                                                <MenuItem key={j} value={j}>{i}</MenuItem>
                                            )}
                                        </Select>
                                        <FormHelperText error={validation3.error}>{validation3.username}</FormHelperText>
                                    </FormControl>
                                    <TextareaAutosize
                                        className={classes.formControl}
                                        aria-label="minimum height"
                                        rowsMin={3}
                                        placeholder="Name of Attendees"
                                        onChange={attendee_validator}
                                    />
                                    <div className={classes.alignStyle} >
                                        <FormHelperText error={validation4.error}>{validation4.username}</FormHelperText>
                                    </div>
                                    <br /><br />
                                    <Grid container direction="row" justify="flex-start" alignItems="flex-start">
                                        <Grid item xs={6} container direction="row" justify="space-around" alignItems="flex-start">
                                            <Button disabled={disable} variant="contained" color="primary" onClick={submitValue}>SUBMIT</Button>
                                        </Grid>
                                        <Grid item xs={6} container direction="row" justify="space-around" alignItems="flex-start">
                                            <NavLink to={{ pathname: "/" }} style={{ textDecoration: 'none' }}><Button disabled={disable} variant="contained" color="secondary">CANCEL</Button></NavLink>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </div>
    );
}
