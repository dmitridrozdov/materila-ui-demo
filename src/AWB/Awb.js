import React from 'react'
import { Grid, Typography, Paper } from '@material-ui/core'
import useStyles from './styles'
import LineGraph from './LineGraph'

const Awb = () => {
    const classes = useStyles()
    return (
        <>
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12} >
                <Grid container justify="center" spacing={2} className={classes.firstItem}>
                    <Grid item xs={2}>
                        <Paper className={classes.paper}> 
                        <Typography gutterBottom variant='h5' className={classes.menu}>
                            Results
                        </Typography>
                        <Typography gutterBottom variant='h5' className={classes.menu}>
                            Logs
                        </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={10}>
                        <Paper className={classes.paper}>
                        <Typography gutterBottom  className={classes.content}>
                            super a lot of information super a lot of informationsuper a lot of informationsuper a lot of informationsuper a lot of informationsuper a lot of information
                            super a lot of information
                            super a lot of informationsuper a lot of informationsuper a lot of informationsuper a lot of informationsuper a lot of information
                            super a lot of informationsuper a lot of informationsuper a lot of information
                        </Typography>
                        <LineGraph />
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        </>
    )
}

export default Awb
