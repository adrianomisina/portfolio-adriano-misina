import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import { TextField, Typography, Button, Grid, Box, TextareaAutosize } from '@material-ui/core'
import SendIcon from "@material-ui/icons/Send"
import Navbar from "./Navbar"
import { Translate } from "@material-ui/icons"



const InputField = withStyles({
    root: {
        "& label.Mui-focused": {
            color:"tan",
        },
        "& label":{
            color: "tan",
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor:"tan"
            },
            "&:hover fieldset": {
                borderColor:"tan"
            },
            "&.Mui-focused fieldset": {
                borderColor: "tan"
            }
        }
    },
})(TextField)

const useStyles = makeStyles(theme=>({

    form: {
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        position:"absolute"
    },

    button: {
        marginTop: "1rem",
        color: "tan",
        borderColor:"tan"
    },
    
    textArea: {
        width:"100%",
        resize: "none",
        marginTop: 15
    }     
}))

const Contacts = () => {

    const classes = useStyles()

    return (
        <Box component="div">
            <Navbar />
            <Grid container justify="center">
                <Box component="form" className={classes.form}  action="https://formspree.io/f/mpzkkyaa" method="POST">
                    <Typography variant="h4" align="center" style={{color:"tan"}}>
                        Contate-me:
                    </Typography>
                    <InputField fullWidth={true} type="name"  name="name" label="Name" variant="outlined" margin="dense" size="medium" inputProps={{style:{color:"floralwhite"}}} />
                    <br />
                    <InputField fullWidth={true} type="email" name="_replyto" label="Email" variant="outlined" margin="dense" size="medium" inputProps={{style:{color:"floralwhite"}}}/>
                    <br />
                    <TextareaAutosize name="message" type="text" field="message" aria-label="minimum height" minRows={6} placeholder="Sua Mensagem" className={classes.textArea}/>
                    <br />
                    <Button type="submit" className={classes.button} variant="outline" fullWidth={true} endIcon={<SendIcon/>}>Enviar</Button>
                </Box>
            </Grid>
        </Box>
    )
}

export default Contacts
