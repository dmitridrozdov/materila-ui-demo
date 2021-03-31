import React from 'react'
import useStyles from './styles'
import { Typography, Card, CardContent, Avatar, Toolbar } from '@material-ui/core'
import passImg from '../images/pass.png'
import failImg from '../images/fail.png'

const TestCard = ({ subsection }) => {
    const classes = useStyles()
    return (
        <Card className={classes.sectionCard} variant='outlined'>
            <CardContent>
                <Toolbar>
                    <Avatar alt="" src={subsection.status === 'pass' ? passImg : failImg} className={classes.statusIcon}/>
                    <Typography gutterBottom variant='h5' className={classes.testName}>
                        {subsection.subsection} 
                    </Typography>
                </Toolbar>
                <Typography className={classes.logs}>
                    {subsection.logs}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default TestCard
