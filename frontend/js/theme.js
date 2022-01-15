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
      top: '#fa8dee',
      bottom: '#ff8b8f',
    },
    projectsGradient: {
      top: '#5289ff',
      bottom: '#057713',
    },
    storyGradient: {
      top: '#3800b1',
      bottom: '#5f3c5d',
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
