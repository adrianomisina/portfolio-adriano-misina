import React from 'react'
import {makeStyles} from "@material-ui/core/styles"
import { Typography, Box } from '@material-ui/core'
import Navbar from "./Navbar"

const useStyles = makeStyles(theme => ({
    mainContainer:{
        background: "#222"
    },
    timeLine : {
        position: "relative",
        padding: "1rem",
        margin: "0 auto",
        "&:before": {
            content: "''",
            position: "absolute",
            height:"100%",
            border: "1px solid tan",
            right: "40px",
            top: 0
        },
        "&:after": {
            content: "''",
            display: "table",
            clear: "both"
        },
        [theme.breakpoints.up("md")]:{
            padding: "2rem",
            "&:before": {
                left: "calc(50% - 1px)",
                right: "auto"
            }
        },
    },
    timeLineItem: {
        padding:"1rem",
        borderBottom: "2px solid tan",
        position: "relative",
        margin: "1rem 3rem 1rem 1rem",
        clear: "both",
        "&:after": {
            content:"''",
            position: "absolute"
        },
        "&:before": {
            content:"''",
            position: "absolute",
            right: "-0.625rem",
            top: "calc(50% - 5px)",
            borderStyle: "solid",
            borderColor: "tan tan transparent transparent",
            borderWidth:"0.625rem", 
            transform:"rotate(45deg)"
        },
        [theme.breakpoints.up("md")]: {
            width: "44%",
            margin: "1rem",
            "&:nth-of-type(2n)":{
                float: "right",
                margin: "1rem",
                borderColor: "tan"
            },
            "&:nth-of-type(2n):before": {
                right: "auto",
                left: "-0.625rem",
                borderColor:"transparent transparent tan tan"
            }
        }
    },

    timeLineYear :{
        textAlign : "center",
        maxWidth: "9.375rem",
        margin: "0 3rem 0 auto",
        fontSize: "1.8rem",
        background: "tan",
        color:"floralwhite",
        lineHeight: 1,
        padding: "0.5rem 0 1rem",
        "&:before": { 
            display: "none"
        },
        [theme.breakpoints.up("md")]: {
            textAlign: "center",
            margin: "0 auto",
            "&:nth-of-type(2n)": {
                float: "none",
                margin: "0 auto"
            },
            "&:nth-of-type(2n):before": {
                display: "none"
            }
        }
    },
    heading: {
        color:"#fff",
        padding: "3rem 0"  
    },

    subHeading: {
        color:"#FFD700",
        padding: "1rem",
        

    }
}))


const Resume = () => {
    const classes = useStyles()
    return (
        <>
        <Navbar />
        <Box component="header" className={classes.mainContainer}>
            <Typography variant="h4" align="center" className={classes.heading}>
                Working Experience
            </Typography>
        

            <Box component="div" className={classes.timeLine}>

                <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                   Dez 2019
                </Typography>

                <Box component="div" className={classes.timeLineItem}>
                    <Typography variant="h5" align="center" className={classes.subHeading}>
                    Frontend UX Developer :)
                    </Typography>

                    <Typography variant="body1" align="center" className={classes.subHeading} style={{color:"tan"}}>
                        Workana Freelancer: <i>Que Venham os Freelas :)</i>
                    </Typography>

                    <Typography variant="subtitle1" align="center" style={{color:"#fff"}}>
                        Atuação como Freelancer na plataforma Workana. 
                        Realizei diversos projetos, como: formulários, web-sites e landing pages para diversos segmentos. 
                        Destaque para as stacks: HTML5, CSS3, Java Script e Bootstrap.
                    </Typography>
                </Box>

                <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                    Fev 2021
                </Typography>

                <Box component="div" className={classes.timeLineItem}>
                    <Typography variant="h5" align="center" className={classes.subHeading}>
                    Analista de Sistemas Jr: Frontend UX Developer 
                    </Typography>

                    <Typography variant="body1" align="center" className={classes.subHeading} style={{color:"tan"}}>
                        Nanodata Tecnologia - Campinas - SP
                    </Typography>

                    <Typography variant="subtitle1" align="center" style={{color:"#fff"}}>
                        Atuei como Analista de Sistemas Jr no sistema Obzekiun 2 - Sistema de integração de notas fiscais e markplace entre fornecedores e compradores.
                        Destaque para as stacks: HTML5, CSS3, Java Script, Vue JS e Quasar Framework.
                    </Typography>
                </Box>

                <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                    Julho 2021
                </Typography>

                <Box component="div" className={classes.timeLineItem}>
                    <Typography variant="h5" align="center" className={classes.subHeading}>
                    Web Frontend Ux Developer 
                    </Typography>

                    <Typography variant="body1" align="center" className={classes.subHeading} style={{color:"tan"}}>
                        Sensedia Tecnologia - Campinas - SP
                    </Typography>

                    <Typography variant="subtitle1" align="center" style={{color:"#fff"}}>
                        Responsável pela criação dos portais dos clientes Sensedia na parte do Frontend com foco em UX. 
                        Destaque para as stacks: HTML5, CSS3, Java Script, Boostrap e React JS, além é claro de conceitos modernos de UX | UI no desenvolvimento dos portais dos clientes.
                    </Typography>
                </Box>
            </Box>
        </Box>
        </>
    )
}

export default Resume
