import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {Box, Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography} from "@material-ui/core"
import Navbar from "./Navbar"
import project1 from "../images/agropet-meta-tag-img.png"
import project2 from "../images/to-do-in-js.png"
import project3 from "../images/go-dev.png"
import project4 from "../images/projeto-lofi.png"
import project5 from "../images/starbucks.png"
import project6 from "../images/netflix.png"
import project7 from "../images/hi-doc.png"
import project8 from "../images/atmosphere-jkd.png"
import project9 from "../images/medicenter.png"
import project10 from "../images/projeto-pizzaria.png"




const useStyles = makeStyles({
    mainContainer:{
        background: "#444",
        height: "100%"
    },
    heading: {
        color:"tan",
        padding: "3rem 0"  
    },
    cardContainer: {
        maxWidth: 380,
        margin: "6rem auto"
    },
    linkGit: {
        color:"tan",
        textDecoration: "none"
    }
})

const Portfolio = () => {

    const classes = useStyles()

    return (
        <Box component="div" className={classes.mainContainer}>
            <Navbar />
            <Box component="div">
                <Typography variant="h4" align="center" className={classes.heading}>
                    My Projects
                </Typography>
            </Box>
            <Grid container justify="center">
                {/* Project 1 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia component="img" alt="project1" height="160" image={project1}/>

                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Projeto Agropet Barão
                                </Typography>

                                <Typography variant="body2" color="textSecondary" component="p">
                                    Website desenvolvido em HTML5, CSS3, Java-Script e Boostrap5.
                                </Typography>
                            </CardContent>

                            <CardActions>
                                <Button size="small" color="primary" href="https://github.com/adrianomisina/agropet-barao" target="_blank">
                                    Code 
                                </Button>

                                <Button size="small" color="primary" href="https://agropetbarao.netlify.app/" target="_blank">
                                    Live Demo
                                </Button>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                </Grid>

                {/* Project 2 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia component="img" alt="project1" height="160" image={project2}/>

                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    To Do Tasks (in Java Script)
                                </Typography>

                                <Typography variant="body2" color="textSecondary" component="p">
                                    Projeto organizador de tarefas para Desktop feiro em HTML5, CSS3 e Java Script.
                                </Typography>
                            </CardContent>

                            <CardActions>
                                <Button size="small" color="primary" href="https://github.com/adrianomisina/to-do-tasks" target="_blank">
                                    Code 
                                </Button>

                                <Button size="small" color="primary" href="https://2do-tasks.netlify.app/" target="_blank">
                                    Live Demo
                                </Button>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                </Grid>

                {/* Project 3 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia component="img" alt="project1" height="160" image={project3}/>

                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Projeto Go-Dev
                                </Typography>

                                <Typography variant="body2" color="textSecondary" component="p">
                                    Rede social entre Desenvolvedores Frontend Jr que procuram expor seus projetos para empresas que buscam por novos taletos.
                                    Plataforma ainda em fase de desenvolvimento. Destaque para as Stacks: HTML5, CSS3, Java Script, React JS e Material UI.
                                </Typography>
                            </CardContent>

                            <CardActions>
                                <Button size="small" color="primary" href="#" target="_blank" disabled>
                                    Code 
                                </Button>

                                <Button size="small" color="primary" href="#" target="_blank" disabled>
                                    Live Demo
                                </Button>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                </Grid>

                {/* Project 4 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia component="img" alt="project1" height="160" image={project4}/>

                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Projeto Lofi
                                </Typography>

                                <Typography variant="body2" color="textSecondary" component="p">
                                    Um protótipo de Single Page Aplication voltada para o cenário musical Lo-fi e produtores / compositores independentes. 
                                    Plataforma ainda em fase de desenvolvimento. Destaque para as Stacks: HTML5, CSS3, Java Script, Vue JS e Quasar Framework.
                                </Typography>
                            </CardContent>

                            <CardActions>
                                <Button size="small" color="primary" href="https://github.com/adrianomisina/projeto-lofi" target="_blank" >
                                    Code 
                                </Button>

                                <Button size="small" color="primary" href="https://adrianomisina.github.io/projeto-lofi/#/" target="_blank" >
                                    Live Demo
                                </Button>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                </Grid>

                {/* Project 5 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia component="img" alt="project1" height="160" image={project5}/>

                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Projeto Starbucks - CSS Frid
                                </Typography>

                                <Typography variant="body2" color="textSecondary" component="p">
                                    Landing Page do Startbucks feita apenas em HTML5 e CSS3. Utilizei apenas CSS Grid.
                                </Typography>
                            </CardContent>

                            <CardActions>
                                <Button size="small" color="primary" href="https://github.com/adrianomisina/starbucks-clone" target="_blank" >
                                    Code 
                                </Button>

                                <Button size="small" color="primary" href="https://adrianomisina.github.io/starbucks-clone/" target="_blank" >
                                    Live Demo
                                </Button>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                </Grid>

                {/* Project 6 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia component="img" alt="project1" height="160" image={project6}/>

                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Projeto Netflix
                                </Typography>

                                <Typography variant="body2" color="textSecondary" component="p">
                                    Clone do Netflix apenas em HTML5, CSS3 e Java Script. Utilizei Java Script para as animações.
                                </Typography>
                            </CardContent>

                            <CardActions>
                                <Button size="small" color="primary" href="#" target="_blank" disabled>
                                    Code 
                                </Button>

                                <Button size="small" color="primary" href="https://adrianomisina.github.io/digital-innovation-one-bootcamp-everis-full-stack-developer-netflix-clone/" target="_blank" >
                                    Live Demo
                                </Button>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                </Grid>

                {/* Project 7 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia component="img" alt="project1" height="160" image={project7}/>

                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Projeto Hi-Doc
                                </Typography>

                                <Typography variant="body2" color="textSecondary" component="p">
                                    Single Page para o atendimento médico - telemedicina e agendamento de consultas.
                                    Destaque para as Stacks: HTML5, CSS3, Java Script e Bootstrap. 
                                </Typography>
                            </CardContent>

                            <CardActions>
                                <Button size="small" color="primary" href="https://github.com/adrianomisina/hidoc" target="_blank" >
                                    Code 
                                </Button>

                                <Button size="small" color="primary" href="https://adrianomisina.github.io/hidoc" target="_blank" >
                                    Live Demo
                                </Button>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                </Grid>

                {/* Project 8 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia component="img" alt="project1" height="160" image={project8}/>

                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Projeto Atmosphere JKD
                                </Typography>

                                <Typography variant="body2" color="textSecondary" component="p">
                                    Landing Page para venda de cursos online da equipe Atmosphere JKD. Destaque para as 
                                    Stacks HTML5, CSS3, Java Script e Bootstrap.
                                </Typography>
                            </CardContent>

                            <CardActions>
                                <Button size="small" color="primary" href="https://github.com/adrianomisina/atmosphere_jkd_site_new_version" target="_blank" >
                                    Code 
                                </Button>

                                <Button size="small" color="primary" href="https://adrianomisina.github.io/atmosphere_jkd_site_new_version/" target="_blank" >
                                    Live Demo
                                </Button>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                </Grid>

                {/* Project 9 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia component="img" alt="project1" height="160" image={project9}/>

                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Projeto Medicenter
                                </Typography>

                                <Typography variant="body2" color="textSecondary" component="p">
                                    Projeto Medicenter - Template feito em aula no curso de Full Stack - B7Web (professor Bonieky Lacerda). 
                                    Destaque para a metodologia Flexbox Grid CSS.
                                </Typography>
                            </CardContent>

                            <CardActions>
                                <Button size="small" color="primary" href="https://github.com/adrianomisina/CursoB7Web_medicenter" target="_blank" >
                                    Code 
                                </Button>

                                <Button size="small" color="primary" href="https://adrianomisina.github.io/CursoB7Web_medicenter/" target="_blank" >
                                    Live Demo
                                </Button>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                </Grid>

                {/* Project 10 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia component="img" alt="project1" height="160" image={project10}/>

                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Projeto Pizzaria Online
                                </Typography>

                                <Typography variant="body2" color="textSecondary" component="p">
                                    Projeto Pizzaria - projeto desenvolvido em aula pelo curso B7Web.
                                    Destaque para o e-commerce feito em Java Script.
                                </Typography>
                            </CardContent>

                            <CardActions>
                                <Button size="small" color="primary" href="https://github.com/adrianomisina/cursob7web_projeto_pizza_java_script" target="_blank" >
                                    Code 
                                </Button>

                                <Button size="small" color="primary" href="https://adrianomisina.github.io/cursob7web_projeto_pizza_java_script/" target="_blank" >
                                    Live Demo
                                </Button>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                </Grid>

                <Box component="div">
                <Typography variant="h6" align="center" className={classes.heading}>
                    Veja mais projetos em: <a href="https://github.com/adrianomisina" className={classes.linkGit} target="_blank" >https://github.com/adrianomisina</a>
                </Typography>
            </Box>


            </Grid>
        </Box>
    )
}

export default Portfolio
