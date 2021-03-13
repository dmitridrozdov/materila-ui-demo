import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function Progression() {
  const classes = useStyles();
  const [section, setSection] = useState('Home')

  // const onItemClick = (section) => {
  //   setSection(section)
  // }

  const onItemClick = section => () => {
    setSection(section);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Clipped drawer
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
          {/* <List>
            {['Home', 'Regression'].map((text, index) => (
              <ListItem button key={text} onClick={onItemClick('Home')}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text}/>
              </ListItem>
            ))}
          </List> */}
        <List>
          <ListItem button onClick={onItemClick('Home')}>
            <ListItemText>Home</ListItemText>
          </ListItem>
          <ListItem button onClick={onItemClick('1')}>
            <ListItemText>Page 2</ListItemText>
          </ListItem>
        </List>
          <Divider />
          {/* <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List> */}
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        <Typography paragraph>
        {section === 'Home' ? 
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt' + 
          'ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum'
        : 
          'Regression'}
          </Typography>
        
      </main>
    </div>
  );
}
