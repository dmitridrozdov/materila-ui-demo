import React, { useState } from 'react';

import { AppBar, Avatar, Drawer, CssBaseline, Toolbar, List, Typography, Divider, ListItem, ListItemIcon, ListItemText, Link } from '@material-ui/core'

import BlurOnIcon from '@material-ui/icons/BlurOn'
import AppleIcon from '@material-ui/icons/Apple'
import useStyles from './styles'
import cbaAvatar from '../images/cba.png'
import LineGraph from './LineGraph'
import DSSwoop from './DSSwoop'


const Awb = () => {
  const classes = useStyles();
  const [section, setSection] = useState('Dashboard')

  const onItemClick = (section) => {
    setSection(section)
  }

  const menuList = [
    {
      name: 'Dashboard',
      icon: <BlurOnIcon />,
    },
    {
      name: 'DS.swoop Regression',
      icon: <AppleIcon />,
    },
    {
      name: 'Scooring pipeline Regression',
      icon: <AppleIcon />,
    },
    {
      name: 'AQDQ Regression',
      icon: <AppleIcon />,
    },
  ]

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
            {menuList.map((menuItem) => (
              <div key={menuItem.name}>
                <ListItem  button onClick={() => onItemClick(menuItem.name)} selected={menuItem.name === section}>
                  <ListItemIcon> {menuItem.icon} </ListItemIcon>
                  <ListItemText
                    disableTypography
                    primary={<Typography className={classes.listItemName}>{menuItem.name}</Typography>}
                  />
                </ListItem>
                <Divider />
              </div>
            ))}
          </List>
      
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        {
          {
            'Dashboard': <LineGraph />,
            'DS.swoop Regression': <DSSwoop />,
            'Scooring pipeline Regression': <LineGraph />,
          }[section]
        }
      </main>
    </div>
  );
}

export default Awb

