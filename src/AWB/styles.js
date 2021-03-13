import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
     
      },
    //   root: {
    //     backgroundColor: 'yellow',
    //     display: 'flex',
    //     height: '100%',
    //     overflow: 'hidden',
    //     width: '100%'
    //   },
    paper: {
        padding: theme.spacing(2),
        backgroundColor: 'white',
        height: '100%',
        // boxShadow: 'none',
        borderLeft: '1',
    },
    menu: {
        fontFamily: 'Roboto Slab',
    },
    content: {
        fontFamily: 'Quicksand',
    },

}))

export default useStyles