import {createStyles} from "@material-ui/core/styles";
import {withStyles} from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import React from "react";

const styles = themes => {
    return createStyles({
        container: {
            display: 'flex',
            'flexDirection': 'column',
            'alignItems': 'center',
            'justifyContent': 'center',
            width: '100%',
            height: '100%'
        }
    })
}

const WidgetSpinner = ({ classes }) =>
    <div className={classes.container}><CircularProgress/></div>

export default withStyles(styles)(WidgetSpinner);
