import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, AppBar, Card, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Avatar } from '@material-ui/core'
import useStyles from './styles'
import cbaAvatar from '../images/cba.png'
import progressionImage from '../images/progression-plan.jpg'
import clouderaImage from '../images/cloudera-upgrade2.png'
import awbImage from '../images/awb-regression.jpg'
import Dashboard from './dashboard/Dashboard'

const services = [
    {
        name: 'Progression tool',
        image: progressionImage,
        link: '/progression',
    },
    {
        name: 'Cloudera upgrade',
        image: clouderaImage,
        link: '/cloudera',
    },
    {
        name: 'AWB Regression tests',
        image: awbImage,
        link: '/awb',
    }
]

const HomePage = () => {
    const classes = useStyles()
    return (
        <>
            <CssBaseline />
            <AppBar position='relative' className={classes.header}>
                <Toolbar>
                    <Avatar alt="" src={cbaAvatar} />
                    <Typography variant='h6' className={classes.headerText}>
                        CDO Quality Engineering Services
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <Dashboard />
                <Container className={classes.cardGrid} maxWidth='md'>
                    <Grid container spacing={4}>
                        {services.map((service) => (
                            <Grid item xs={12} sm={6} md={4}>
                                <Link to={service.link} style={{ textDecoration: 'none' }}>
                                    <Card className={classes.card}>
                                        <CardMedia 
                                            className={classes.cardMedia}
                                            // image='https://source.unsplash.com/random'
                                            image={service.image}
                                            title={service.name}
                                        />
                                        <CardContent className={classes.CardContent}>
                                            <Typography gutterBottom variant='h5' className={classes.serviceName}>
                                                {service.name}
                                            </Typography>
                                            <Typography className={classes.serviceContent}>
                                                This is a media card. Describe of the service content here.
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Link>  
                            </Grid>           
                        ))}
                    </Grid>
                </Container>
            </main>
            <footer className={classes.footer}>
                <Typography variant='h6' align='center' gutterBottom>
                    {/* Footer */}
                </Typography>
                <Typography className={classes.footerText} variant='subtitle1' align='center' color='textSecondary'>
                    © 2021 Commonwealth Bank of Australia ABN 48 123 123 124 AFSL and Australian credit licence 234945
                </Typography>
            </footer>
        </>
    )
}

export default HomePage
