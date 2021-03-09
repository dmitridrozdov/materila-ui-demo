import React from 'react'
import useStyles from './styles'
import { Typography, AppBar, Card, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Paper } from '@material-ui/core'

const Dashboard = () => {
    const classes = useStyles()
    return (
        <Container className={classes.dashboardContainer} maxWidth='md'>
            <Paper className={classes.paper}>
                <Typography gutterBottom variant='h4' className={classes.dashboard}>
                    Dashboard
                </Typography>
            </Paper>
        </Container>
    )
}

export default Dashboard
