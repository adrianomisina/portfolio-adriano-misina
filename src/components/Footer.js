import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles({
    root: {
        "& .MuiBottomNavigationAction-root": {
            minWidth: 0,
            maxWidth: 250,
        },
        "& .MuiSvgIcon-root": {
            fill:"tan",
            "&:hover": {
                fill: "#DAA520",
                fontSize: "1.8rem"
            }
        }
    }
})

const Footer = () => {
    const classes = useStyles()

    return (
        <BottomNavigation width="auto" style={{background: "#555"}}>
            <BottomNavigationAction
                className={classes.root}
                style={{padding:0}}
                icon={<GitHubIcon/>}
                href="https://github.com/adrianomisina"
                target="_blank"
            />

            <BottomNavigationAction
                className={classes.root}
                style={{padding:0}}
                icon={<LinkedInIcon/>}
                href="https://www.linkedin.com/in/adriano-takashi-misina-50b7591a8/"
                target="_blank"
            />

            <BottomNavigationAction
                className={classes.root}
                style={{padding:0}}
                icon={<InstagramIcon/>}
                href="https://www.instagram.com/adrianomisina/?hl=pt-br"
                target="_blank"
            />
        </BottomNavigation>
    )
}

export default Footer
