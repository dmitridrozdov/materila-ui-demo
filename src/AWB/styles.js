import { makeStyles } from '@material-ui/core/styles'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      backgroundColor: theme.palette.background.paper,
      color: 'black',
      padding: '10px 0',
    },
    appBarText: {
        fontFamily: 'Roboto Slab',
        marginLeft: '20px',
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
      marginTop: '20px',

    },
    list: {
        marginTop: '20px',
    },
    listItemName: {
        fontFamily: 'Arsenal', 
    },
    sectionName: {
      fontFamily: 'Roboto Slab',
      fontSize: '16px',
    },
    sectionCard: {
      marginBottom: '10px',
    },
    testName: {
      fontFamily: 'Arsenal',
      fontSize: '16px',
      marginLeft: '10px'
    },
    logs: {
      fontFamily: 'BioRhyme',
      fontSize: '12px',
    },
    statusIcon: {
      left: '0px',
    },
  }))

  export default useStyles