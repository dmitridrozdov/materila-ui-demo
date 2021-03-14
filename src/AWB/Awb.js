import React, { useState } from 'react';

import { AppBar, Avatar, Drawer, CssBaseline, Toolbar, List, Typography, Divider, ListItem, ListItemIcon, ListItemText, Link } from '@material-ui/core'

import BlurOnIcon from '@material-ui/icons/BlurOn'
import AppleIcon from '@material-ui/icons/Apple'
import useStyles from './styles'
import cbaAvatar from '../images/cba.png'
import LineGraph from './LineGraph'


const Awb = () => {
  const classes = useStyles();
  const [section, setSection] = useState('Dashboard')

  const onItemClick = section => () => {
    setSection(section)
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position='fixed' className={classes.appBar}>
        <Toolbar>
          <Avatar alt='' src={cbaAvatar} />
          <Typography variant='h6' className={classes.appBarText}>
            <Link href='/' style={{ textDecoration: 'none', color: 'black' }}>CDO Quality Engineering Services </Link> | AWB
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List className={classes.list}>
            <Divider />
            <ListItem button onClick={onItemClick('Dashboard')}>
              <ListItemIcon> <BlurOnIcon /></ListItemIcon>
                <ListItemText
                  disableTypography
                  primary={<Typography className={classes.listItemName}>Dashboard</Typography>}
                />
            </ListItem>
            <Divider />
            <ListItem button onClick={onItemClick('1')}>
              <ListItemIcon> <AppleIcon /></ListItemIcon>
              <ListItemText
                  disableTypography
                  primary={<Typography className={classes.listItemName}>Calculations</Typography>}
                />
            </ListItem>
            <Divider />
          </List>
      
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        <Typography paragraph>
        {section === 'Dashboard' ? 
          ''
        : 
        <LineGraph />}
        </Typography>
      </main>
    </div>
  );
}

export default Awb

