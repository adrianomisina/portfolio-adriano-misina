/* eslint-disable no-unused-vars */
// @ts-nocheck
import React from 'react';
import {Link} from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import MobilRightMenuSlider from "@material-ui/core/Drawer"
import {AppBar,Toolbar,ListItem,ListItemIcon,IconButton,ListItemText,Avatar,Divider,List,Typography,Box} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import {AssignmentInd,Home,Apps,ContactMail, Assessment} from "@material-ui/icons";
import avatar from "../images/avatar.jpg";
import { useState } from 'react';
import Footer from './Footer';

// CSS STYLES
const useStyles = makeStyles(theme=>({
    menuSliderContainer: {
        width: 250,
        background: "#222",
        height: "100%"
    },
    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13)
    },
    listItem: {
        color: "#D2B48C"
    }
}));

// Menu

const menuItems = [
    {
        listIcons: <Home/>,
        listText: "Home",
        listPath: "/"
    },
        {
        listIcons: <AssignmentInd/>,
        listText: "Resume",
        listPath:"/resume"
    },
        {
        listIcons: <Apps/>,
        listText: "Portfolio",
        listPath: "/portfolio"
    },
        {
        listIcons: <ContactMail/>,
        listText: "Contacts",
        listPath: "/contacts"
    }
]

const Navbar = () => {
    const [state, setState] = useState({
        right: false
    })

    const toggleSlider = (slider, open) => () => {
        setState({...state, [slider]: open})
    }
    const sideList = slider => (
        <Box className={classes.menuSliderContainer} component="div" onClick={toggleSlider(slider, false)}>
            <Avatar className={classes.avatar} src={avatar} alt="Adriano Misina" />
            <Divider />
            <List>
            {menuItems.map((lsItem, key)=>(
                <ListItem button key={key} component={Link} to={lsItem.listPath}>
                    <ListItemIcon className={classes.listItem}>{lsItem.listIcons} </ListItemIcon>
                    <ListItemText className={classes.listItem} primary={lsItem.listText}  />
                </ListItem>
            ))}
            </List>
        </Box>
    )

    const classes = useStyles()
    return (
        <>
            <Box component="nav">
                <AppBar position="static" style={{background:"#222"}}>
                    <Toolbar>
                        <IconButton onClick={toggleSlider("right", true)}>
                            <MenuIcon style={{color: "#D2B48C"}}/>
                        </IconButton>
                        <Typography variant="h5" style={{color: "#D2B48C"}}>
                            Portfolio :)
                        </Typography>
                        <MobilRightMenuSlider anchor="right" open={state.right} onClose={toggleSlider("right", false)}>
                            {sideList("right")}
                            <Footer />
                        </MobilRightMenuSlider>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Navbar
