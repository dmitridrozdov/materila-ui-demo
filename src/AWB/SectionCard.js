import React, { useState } from 'react'
import Expand from 'react-expand-animated'
import { Typography, Card, CardContent } from '@material-ui/core'
import useStyles from './styles'
import TestCard from './TestCard'

const SectionCard = ({ sectionName, subSections }) => {
    const classes = useStyles()
    const [expandState, SetExpandState] = useState(false)

    const toggle = () => {
        SetExpandState(!expandState)
    }

    const noPointer = {cursor: 'pointer'};

    return (        
        <Card className={classes.sectionCard} variant='outlined' >
            <CardContent>
                <Typography gutterBottom variant='h5' className={classes.sectionName} onClick={toggle} style={noPointer}>
                    {sectionName}
                </Typography>
                <Expand open={expandState}>
                    <Typography className={classes.serviceContent}>
                        {subSections.map(subsection => <TestCard subsection={subsection} /> )}
                    </Typography>
                </Expand>
            </CardContent>
        </Card>
    )
}

export default SectionCard
