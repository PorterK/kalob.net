import { blue, grey } from 'material-ui/colors';

const style = () => ({
  container: {
    paddingTop: 50,
  },
  findMe: {
    padding: 10,
    maxWidth: 400,
    margin: '25 auto',
    background: grey[800],
    color: 'white',
    fontWeight: 200,
    borderRadius: 8,
    '& $a': {
      textDecoration: 'none',
      color: blue[400],
    },
  },
});

export default style;
