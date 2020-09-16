import { createMuiTheme, lighten, ThemeOptions } from '@material-ui/core/styles';

const greyPalette = {
  '50': 'rgba(233, 235, 236, 1)',
  '100': 'rgba(212, 215, 217, 1)',
  '200': 'rgba(190, 195, 198, 1)',
  '300': 'rgba(169, 175, 179, 1)',
  '400': 'rgba(147, 155, 160, 1)',
  '500': 'rgba(126, 135, 141, 1)',
  '600': 'rgba(104, 115, 122, 1)',
  '700': 'rgba(82, 94, 102, 1)',
  '800': 'rgba(61, 75, 84, 1)',
  '900': 'rgba(40, 55, 65, 1)'
};
const primaryPalette = {
  dark4: 'rgb(191, 205, 212)'
};
let primary = {
  main: 'rgb(0, 159, 218)',
  dark: 'rgb(0, 55, 85)',
  light: 'rgb(215, 233, 241)'
};
const darkThemePalette = {
  type: 'dark',
  background: {
    default: greyPalette['500'],
    paper: greyPalette['900']
  },
  divider: greyPalette['700'],
  action: {
    hover: greyPalette['800']
  },
  grey: greyPalette,
  text: {
    primary: '#fff'
  },
  primary
};
const lightThemePalette = {
  type: 'light',
  background: {
    default: '#f9fafa',
    paper: '#fff'
  },
  divider: lighten(primary.dark, 0.9),
  action: {
    hover: '#F0F7FA'
  },
  grey: greyPalette,
  text: {
    primary: primary.dark
  },
  primary
};
const createDistrictTheme = (palette) => {
  let theme = createMuiTheme({
    spacing: 6,
    palette: palette,
    typography: {
      fontFamily: 'DanskeText',
      h5: {
        fontWeight: 600,
        fontSize: 16
      }
    },
    shape: {
      borderRadius: 0
    },
    props: {
      MuiButtonBase: {
        disableRipple: true
      },
      MuiLink: {
        underline: 'none'
      }
    },
    mixins: {
      toolbar: {}
    }
  });

  theme = {
    ...theme,
    overrides: {
      MuiDrawer: {
        paper: {
          backgroundColor: theme.palette.grey['800']
        }
      },
      MuiButton: {
        label: {
          textTransform: 'none'
        },
        root: {
          borderRadius: '50px'
        },
        containedSecondary: {
          backgroundColor: theme.palette.primary.light,
          color: theme.palette.text.primary,
          '&:hover': {
            backgroundColor: theme.palette.primary.light
          }
        },
        contained: {
          boxShadow: 'none',
          '&:active': {
            boxShadow: 'none'
          }
        }
      },
      MuiTabs: {
        root: {
          minHeight: 0,
          marginLeft: theme.spacing(2)
        },
        indicator: {
          height: 2,
          backgroundColor:
            theme.palette.type === 'dark' ? theme.palette.common.white : theme.palette.primary.dark
        }
      },
      MuiTab: {
        root: {
          textTransform: 'none',
          fontSize: theme.typography.caption.fontSize,
          margin: theme.spacing(0, 1),
          minWidth: 0,
          minHeight: 0,
          padding: 0,
          [theme.breakpoints.up('md')]: {
            padding: 0,
            minWidth: 0
          }
        }
      },
      MuiListItem: {
        button: {
          padding: theme.spacing(3, 3),
          '&:hover': {
            color: theme.palette.primary.main
          }
        }
      },
      MuiIconButton: {
        root: {
          color: 'inherit',
          padding: theme.spacing(1)
        }
      },
      MuiTooltip: {
        tooltip: {}
      },
      MuiListItemText: {
        root: {
          marginTop: theme.spacing(0.5),
          marginBottom: theme.spacing(0.5)
        },
        primary: {
          fontWeight: theme.typography.fontWeightMedium
        }
      },
      MuiListItemIcon: {
        root: {
          color: 'inherit',
          minWidth: 'unset',
          marginRight: theme.spacing(3)
        }
      },
      MuiAvatar: {
        root: {
          width: 32,
          height: 32
        }
      },
      MuiCardHeader: {
        root: {
          padding: theme.spacing(2, 3)
        }
      }
    }
  };
  return theme;
};

export const defaultTheme = createMuiTheme();
const themes = {
  default: defaultTheme,
  district: createDistrictTheme(lightThemePalette),
  district_dark: createDistrictTheme(darkThemePalette)
};
export const themeName = (Object.keys(themes).find(
    type => type === new URLSearchParams(window.location.search).get('theme')
  )) || 'default';
export const setTheme = themeName => {
  window.location.href = window.location.origin + window.location.pathname + `?theme=${themeName}`;
};
export const theme = themes[themeName];
window.theme = theme;
