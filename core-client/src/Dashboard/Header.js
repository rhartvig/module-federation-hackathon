import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import {
  createStyles,
  fade,
  lighten,
  Theme,
  withStyles,
  WithStyles
} from '@material-ui/core/styles';

const lightColor = 'rgba(255, 255, 255, 0.7)';

const styles = theme => {
  const backgroundColor =
    theme.palette.type === 'dark'
      ? theme.palette.grey['600']
      : lighten(theme.palette.primary.dark, 0.9);
  const selectedTabBg =
    theme.palette.type === 'dark'
      ? theme.palette.grey['500']
      : lighten(theme.palette.primary.dark, 0.75);

  let tabBgColor =
    theme.palette.type === 'dark'
      ? theme.palette.grey['800']
      : lighten(theme.palette.primary.light, 0.9);
  return createStyles({
    secondaryBar: {
      zIndex: 0,
      paddingTop: theme.spacing(2),
      backgroundColor
    },
    menuButton: {
      marginLeft: -theme.spacing(1)
    },
    link: {
      textDecoration: 'none',
      color: lightColor,
      '&:hover': {
        color: theme.palette.common.white
      }
    },
    button: {
      borderColor: lightColor
    },
    tabsRoot: {
      minHeight: 36,
      margin: 0
    },
    tabsIndicator: {
      height: 0
    },
    tabRoot: {
      minHeight: 36,
      backgroundColor: tabBgColor,
      borderRight: `1px solid ${lighten(theme.palette.primary.dark, 0.75)}`,
      marginRight: 0,
      marginLeft: 0,
      fontSize: theme.typography.fontSize,
      opacity: 1,
      color: theme.palette.text.primary,
      padding: theme.spacing(0, 8)
    },
    selectedTab: {
      background: 'rgb(191, 205, 212)',
      fontWeight: 600
    }
  });
};

function Header({ classes }) {

  const [selectedTab, setSelectedTab] = useState(0);
  let tabClasses = { selected: classes.selectedTab, root: classes.tabRoot };
  return (
    <React.Fragment>
      <AppBar
        component="div"
        className={classes.secondaryBar}
        color="default"
        position="static"
        elevation={0}
      >
        <Tabs
          variant={'standard'}
          value={selectedTab}
          onChange={(_, i) => setSelectedTab(i)}
          textColor="inherit"
          classes={{
            indicator: classes.tabsIndicator,
            root: classes.tabsRoot
          }}
        >
          <Tab classes={tabClasses} label="Webpack 5" />
          <Tab classes={tabClasses} label="Dashboard 2" />
          <Tab classes={tabClasses} label="Templates" />
          <Tab classes={tabClasses} label="Usage" />
        </Tabs>
      </AppBar>
    </React.Fragment>
  );
}

export default withStyles(styles)(Header);
