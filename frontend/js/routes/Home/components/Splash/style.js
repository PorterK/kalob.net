import Logo from 'img/logo.png';

const styles = theme => ({
  main: {
    height: '100vh',
    background: 'rgb(45, 45, 45)',
  },
  code: {
    background: `url(${Logo})`,
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    '& pre': {
      background: 'rgba(45, 45, 45, 0.85) !important',
      [theme.breakpoints.down('md')]: {
        zoom: 0.8,
      },
      [theme.breakpoints.down('sm')]: {
        zoom: 0.6,
      },
    },
  },
  logo: {
    maxHeight: 250,
    margin: '0 auto',
    display: 'block',
  },
  splashText: {
    color: 'white',
  },
});

export default styles;
