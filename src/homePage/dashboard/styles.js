import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    dashboardContainer: {
        padding: '20px 0',
        boxShadow: 'none',
    },
    paper: {
        padding: theme.spacing(2),
        boxShadow: 'none',
    },
    dashboard: {
        fontFamily: 'Roboto Slab',
    },
}))

export default useStyles