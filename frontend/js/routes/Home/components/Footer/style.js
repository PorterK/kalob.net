import { red, blue, grey } from 'material-ui/colors';

const fontSize = 16;

const style = () => ({
  container: {
    borderTop: `1px solid ${grey[200]}`,
    paddingTop: 10,
    paddingBottom: 10,
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
