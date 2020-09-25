import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        fontFamily: "Frank Ruhl Libre,Arial,Helvetica,sans-serif"
    },
    ToolbarStyle: {
        backgroundColor: "#673ab7"
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.primary,
    },
    paperImg: {
        padding: theme.spacing(2),
    },
    listing: {
        margin: theme.spacing(1, 5, 1, 5),
        [theme.breakpoints.down(1050)]: {
            margin: theme.spacing(2)
        },
        [theme.breakpoints.down(650)]: {
            margin: theme.spacing(1, 2, 1, 2)
        }
    },
    media: {
        height: 0,
        paddingTop: '90.25%', // 16:9
        borderRadius: "25px",
        cursor: "pointer",
        border: "solid grey 2px",
        opacity: 1,
        '&:hover': {
            opacity: .9
        },
    },
    SearchWindow: {
        width: "50%",
        [theme.breakpoints.down(650)]: {
            width: "100%"
        }
    },
    searchBox: {
        width: "100%"
    },
    margin: {
        margin: theme.spacing(1),
        [theme.breakpoints.down(650)]: {
            margin: theme.spacing(0),
        }
    },
    textField: {
        width: '100%',
    },
    textStyle: {
        fontFamily: "Frank Ruhl Libre,Arial,Helvetica,sans-serif",
        textAlign: "center",
        fontSize: "1.7vmin",
        fontWeight: 800,
        height: "10vmin",
        [theme.breakpoints.down(1050)]: {
            fontSize: "1.2vmin",
            height: "9vmin",
        },
        [theme.breakpoints.down(650)]: {
            fontSize: "3vmin",
            height: "15vmin",
        }
    },
    details: {
        fontFamily: "Frank Ruhl Libre,Arial,Helvetica,sans-serif",
        textAlign: "center",
        fontWeight: "700",
        fontSize: "1.6vmin",
        [theme.breakpoints.down(650)]: {
            fontSize: "3vmin",
        }
    },
    buttonStyle: {
        backgroundColor: "green",
        "&:hover": {
            backgroundColor: "green",
        }
    },
    Body: {
        margin: theme.spacing(5),
        [theme.breakpoints.down(650)]: {
            margin: theme.spacing(2),
        }
    },
    formControl: {
        margin: theme.spacing(1.5),
        marginLeft: theme.spacing(5),
        minWidth: "80%",
        [theme.breakpoints.down(650)]: {
            margin: theme.spacing(1),
            minWidth: "100%",
        },
    },
    FormStyle: {
        margin: theme.spacing(1, 1, 1, 2),
        [theme.breakpoints.down(650)]: {
            margin: theme.spacing(1),
        }
    },
    buttonView: {
        margin: theme.spacing(1, 1, 1, 2),
    },
    btn1: {
        display: "inline",
    },
    btn2: {
        display: "inline",
    },
    titleStyle1: {
        textAlign: "center",
        fontFamily: "Frank Ruhl Libre,Arial,Helvetica,sans-serif",
        fontSize: "3vmin",
        fontWeight: "600",
        [theme.breakpoints.down(650)]: {
            fontSize: "4.3vmin",
        }
    },
    titleStyle2: {
        textAlign: "center",
        fontFamily: "Frank Ruhl Libre,Arial,Helvetica,sans-serif",
        fontSize: "3vmin",
        [theme.breakpoints.down(650)]: {
            fontSize: "4.3vmin",
        }
    },
    Status: {
        '& label.Mui-focused': {
            color: 'red',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'red',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'red',
            },
            '&:hover fieldset': {
                borderColor: 'red',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'red',
            },
        },
        margin: theme.spacing(1.5),
        marginLeft: theme.spacing(5),
        minWidth: "80%",
        [theme.breakpoints.down(650)]: {
            margin: theme.spacing(1),
            minWidth: "100%",
        },
    },
    Debug: {
        fontFamily: "Frank Ruhl Libre,Arial,Helvetica,sans-serif",
        textAlign: "center",
        fontSize: "3vmin",
        fontWeight: 800,
        height: "10vmin",
        [theme.breakpoints.down(1050)]: {
            fontSize: "1.2vmin",
            height: "9vmin",
        },
        [theme.breakpoints.down(650)]: {
            fontSize: "3vmin",
            height: "15vmin",
        }
    },
    alignStyle: {
        marginLeft: "40px",
        [theme.breakpoints.down(1050)]: {
            marginLeft: "40px",
        },
        [theme.breakpoints.down(650)]: {
            marginLeft: "10px",
        }
    },
    titleStyle3: {
        textAlign: "center",
        fontFamily: "Frank Ruhl Libre,Arial,Helvetica,sans-serif",
        fontSize: "4vmin",
        fontWeight: "600",
        color: "green",
        [theme.breakpoints.down(650)]: {
            fontSize: "4.3vmin",
        }
    },
}));

export default useStyles;   