import { blue } from '@material-ui/core/colors';

const imgHeight = 100;

const style = theme => ({
  img: {
    height: imgHeight,
    float: 'right',
    margin: '0 auto',
    display: 'block',
    [theme.breakpoints.down('md')]: {
      margin: '10 auto',
      float: 'none',
    },
  },
  title: {
    paddingTop: imgHeight / 4,
    margin: '5 50',
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
    },
  },
  desc: {
    fontFamily: 'Roboto',
    margin: '5 50',
    '& $a': {
      textDecoration: 'none',
      color: blue[500],
    },
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
    },
  },
  github: {
    float: 'right',
    marginRight: '20%',
  },
  dots: {
    width: 'calc( 50% - 2px )',
    content: '',
    borderRight: '4px dotted #c1c1c1',
    position: 'absolute',
    height: 50,
    marginTop: -50,
  },
  noLinkDots: {
    marginTop: '-25px !important',
  },
});

export default style;
