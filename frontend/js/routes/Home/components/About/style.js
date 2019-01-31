import { blue, grey } from '@material-ui/core/colors';

const style = () => ({
  container: {
    paddingTop: 50,
  },
  findMe: {
    padding: 10,
    '& p': {
      color: 'white !important',
      fontWeight: '200 !important',
      padding: '10px 0',
      maxWidth: 400,
      margin: '25px auto',
      background: grey[800],
      borderRadius: 8,
    },
    '& a': {
      textDecoration: 'none !important',
      color: blue[400],
    },
  },
});

export default style;
