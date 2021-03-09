import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: 'yellow',
        padding: theme.spacing(8, 0, 6)
    },
    icon: {
        marginRight: '20px'
    },
    buttons: {
        marginTop: '40px'
    },
    cardGrid: {
        padding: '20px 0'
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    cardMedia: {
        paddingTop: '56.25%'
    },
    cardContent: {
        flexGrow: 1
    },
    header: {
        backgroundColor: theme.palette.background.paper,
        color: 'black',
        padding: '10px 0'
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: '30px 0'
    },
    headerText: {
        fontFamily: 'Roboto Slab',
        marginLeft: '20px',
    },
    serviceName: {
        fontFamily: 'Roboto Slab',
    },
    serviceContent: {
        fontFamily: 'Quicksand',
        // fontSize: 16,
    },
    footerText: {
        fontFamily: 'Quicksand',
        fontSize: 12,
    },
}))

export default useStyles