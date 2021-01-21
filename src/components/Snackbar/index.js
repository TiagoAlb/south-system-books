import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />
}

const SnackbarComponent = (props) => {
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }

        props.setConfig({ open: false, message: props.config.message, severity: props.config.severity })
    }

    return (
        <Snackbar open={props.config.open} autoHideDuration={5000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={props.config.severity}>
                {props.config.message}
            </Alert>
        </Snackbar>
    )
}

export default SnackbarComponent