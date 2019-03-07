import { red, blue, grey } from '@material-ui/core/colors';
import { relative } from 'path';

const fontSize = 16;

const style = theme => ({
  container: {
    borderTop: `1px solid ${grey[200]}`,
    paddingTop: 10,
    paddingBottom: 10,
    position: 'fixed',
    bottom: 0,
    background: '#fff',
    [theme.breakpoints.down('md')]: {
      position: 'relative',
      bottom: 'initial',
    }
  },
  footerText: {
    fontSize,
    '& $a': {
      textDecoration: 'none',
      color: blue[400],
    },
  },
  heart: {
    height: fontSize,
    '& $path': {
      fill: red[600],
    },
  },
});

export default style;
