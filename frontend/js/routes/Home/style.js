import letters from 'img/letters.png';

const style = (theme) => ({
  container: {
    height: '50vh',
    '&:before': {
      content: '""',
      width: '100%',
      position: 'absolute',
      height: 200,
      marginTop: 200,
      pointerEvents: 'none',
    },
    background: `url(${letters}), linear-gradient(to bottom, ${theme.palette.gradient.top}, ${theme.palette.gradient.bottom})`,
  },
  title: {
    color: theme.palette.title.bottom,
    fontWeight: 'bold',
    '&:before': {
      content: '"kalob.net"',
      color: theme.palette.title.middle,
      position: 'absolute',
      marginTop: -4,
      marginLeft: -4,
      pointerEvents: 'none',
    },
    '&:after': {
      content: '"kalob.net"',
      color: theme.palette.title.top,
      position: 'absolute',
      marginLeft: -218,
      marginTop: -8,
      pointerEvents: 'none',
    },
  },
  menu: {
    minHeight: 'calc(50vh)',
    background: theme.palette.gradient.bottom,
  },
  link: {
    color: theme.palette.common.white,
    fontFamily: theme.typography.mono,
    cursor: 'pointer',
  },
  bottomText: {
    color: theme.palette.common.white,
    fontFamily: theme.typography.mono,
    textAlign: 'center',
  },
});

export default style;
