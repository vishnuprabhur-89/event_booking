import React, { useEffect } from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import FindReplaceIcon from '@material-ui/icons/FindReplace';
import useStyles from './Styles';
import Axios from 'axios';

export default function FullWidthGrid() {
    const classes = useStyles();
    const [dataSample, setData] = React.useState([]);
    const [dataSample1, setData1] = React.useState([]);
    const [search, setSearch] = React.useState("");
    var matches = useMediaQuery('(min-width:650px)');
    var mobile = useMediaQuery('(max-width:1050px)');
    var status = matches === mobile ? true : false
    const [render, setRender] = React.useState(false);

    useEffect(() => {
        Axios.get("http://localhost:5000/access/data")
            .then(result => {
                setData(result.data)
                setData1(result.data)
            })
    }, [])

    const bookingEvent = (id) => {
        localStorage.setItem("id", JSON.stringify(id))
        setTimeout(() => {
            window.location.replace("http://localhost:3000/booking")
        }, 1000);
    }

    const searchupdate = (e) => {
        var split_string = e.target.value.split(/[^a-zA-Z ]/g)
        setSearch(split_string[0])
        var list = [];
        dataSample1.forEach(element => {
            if (element.name.substring(0, split_string[0].length).toLowerCase() === split_string[0].toLowerCase() && element.status === true) {
                list.push(element)
            }
        });
        setData(list)
        if (split_string[0].length === 0) {
            Axios.get("http://localhost:5000/access/data")
                .then(result => {
                    setData(result.data)
                })
        }
       if(list.length === 0){
            setRender(true)
       }
       else{
           setRender(false)
       }
    }

    return (
        <div className={classes.listing}>
            <Container className={classes.SearchWindow}>
                <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined" margin="dense">
                    <InputLabel htmlFor="outlined-adornment-password">Search</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        placeholder="SEARCH EVENTS"
                        value={search}
                        onChange={searchupdate}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    edge="end"
                                >
                                    <FindReplaceIcon />
                                </IconButton>
                            </InputAdornment>
                        }
                        labelWidth={70}
                    />
                </FormControl>
            </Container>
            <br />
            {render
                ?
                <Typography className={classes.Debug}>No results found!</Typography>
                :
                <Grid container spacing={status ? 2 : 3}>
                    {dataSample.map((i, j) =>
                        <Grid key={j} item xs={12} sm={3} >
                            <Paper className={classes.paper}>
                                <Typography className={classes.textStyle}>{i.name.toUpperCase()}</Typography>
                                <Grid
                                    container
                                    direction="row"
                                    justify="flex-start"
                                    alignItems="flex-start"
                                >
                                    <Grid item xs={status ? 12 : 6} sm={status ? 12 : 6}>
                                        <CardMedia
                                            className={classes.media}
                                            image={require(`${i.image}`)}
                                            title="Paella dish"
                                        />
                                    </Grid>
                                    <Grid item xs={status ? 12 : 6} sm={status ? 12 : 6}>
                                        {matches ? <br /> : <></>}
                                        <Typography className={classes.details}>DATE: {i.date}</Typography><br />
                                        <Typography className={classes.details}>SEATS<br />AVAILABLE: {i.seats}</Typography><br />
                                        <center>
                                            {i.status ?
                                                <Button onClick={() => bookingEvent(i._id)} size="small" className={classes.buttonStyle} variant="contained" color="secondary">Book Now</Button>
                                                :
                                                <Button variant="contained" color="secondary" size="small">Sold Out</Button>
                                            }
                                        </center>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    )}
                </Grid>
            }
        </div>
    );
}
