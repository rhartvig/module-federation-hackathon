import React from "react";
import InvoiceList from "./InvoiceList";
import {
  createStyles,
  withStyles,
} from '@material-ui/core/styles';
import {CardContent, CardHeader} from "@material-ui/core";

const styles = theme => {
  const backgroundColor = 'rgb(191, 205, 212)';
    // theme.palette.type === 'dark'
    //   ? theme.palette.background.default
    //   : lighten(theme.palette.primary.dark, 0.85);

  return createStyles({
    container: {
      width: '100%',
      height: '100%',
      padding: theme.spacing(2),
      backgroundColor
    },
    card: {
      display: 'inline-block',
      backgroundColor: 'white',
      verticalAlign: 'top',
      marginRight: theme.spacing(1),
      marginTop: theme.spacing(1),
      boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
      borderRadius: '4px'
    },
    cardContent: {
      padding: theme.spacing(0)
    },
  });
};

function Workspace({ classes }) {
  return (
    <>

      <div style={{display: 'flex'}}>
      <div className={classes.container} style={{width: '100vw', height: '100vh'}}>
      <h2>Axeptia workspace</h2>
        <div className={classes.card}>
        <CardContent className={classes.cardContent} style={{ width: 420, height: 300 }}>
          <InvoiceList />
        </CardContent>
          
        </div>
      </div>
    </div>
      
    </>
  );
}
export default withStyles(styles)(Workspace);