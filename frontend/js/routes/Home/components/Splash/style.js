import Background from 'img/bg.png';

const styles = () => ({
  main: {
    height: '100vh',
    background: `url(${Background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
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
