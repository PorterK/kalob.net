import { blue } from 'material-ui/colors';

const imgHeight = 100;

const style = theme => ({
  img: {
    height: imgHeight,
    float: 'right',
    [theme.breakpoints.down('md')]: {
      margin: '0 auto',
      float: 'none',
      display: 'block',
    },
  },
  title: {
    paddingTop: imgHeight / 4,
  },
  desc: {
    fontFamily: 'Roboto',
    '& $a': {
      textDecoration: 'none',
      color: blue[500],
    },
  },
  github: {
    float: 'right',
    marginRight: '20%',
  },
  dots: {
    width: '50%',
    content: '',
    borderRight: '4px dotted #c1c1c1',
    position: 'absolute',
    height: 50,
    marginTop: -50,
  },
});

export default style;
