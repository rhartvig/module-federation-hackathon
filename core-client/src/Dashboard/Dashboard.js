import React from 'react';
import {
  createStyles,
  fade,
  lighten,
  Theme,
  withStyles,
  WithStyles
} from '@material-ui/core/styles';
import Header from './Header';

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
      verticalAlign: 'top',
      marginRight: theme.spacing(1),
      marginTop: theme.spacing(1)
    },
    cardContent: {
      padding: theme.spacing(0)
    },
    cardAction: {
      marginTop: 0,
      fontSize: theme.typography.body1.fontSize
    }
  });
};

function Dashboard({ classes, children }) {
  return (
    <div style={{display: 'flex'}}>
      <div style={{width: '100vw', height: '100vh'}}>
        <Header />
        <div className={classes.container}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(Dashboard);
