import { createMuiTheme } from '@material-ui/core/styles';

import indigo from '@material-ui/core/colors/indigo';
import red from '@material-ui/core/colors/red';

const theme = createMuiTheme({
  palette: {
    common: {
      black: '#000',
      white: '#fff',
    },
    primary: indigo,
    secondary: {
      light: '#f1cc51',
      main: '#edb600',
      dark: '#daa800',
      contrastText: '#fff',
    },
    error: red,
    title: {
      top: '#fff100',
      middle: '#ff7575',
      bottom: '#68abff',
    },
    gradient: {
      top: '#ff9898',
      bottom: '#ff8bf6',
    },
    projectsGradient: {
      top: '#5289ff',
      bottom: '#6dc277',
    },
    storyGradient: {
      top: '#ce5e00',
      bottom: '#f1c62d',
    },
  },
  sizes: {
    card: {
      width: 250,
      height: 250,
    },
  },
  typography: {
    fontFamily: [
      'Montserrat',
      'sans-serif',
    ].join(','),
    mono: 'AndaleMono, monospace',
  },
  background: {
    paper: '#fff',
    default: '#fafafa',
  },
});

export default theme;
