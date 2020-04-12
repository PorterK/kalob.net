const style = (theme) => ({
  container: {
    padding: theme.spacing(2),
    background: `linear-gradient(to bottom right, ${theme.palette.projectsGradient.top}, ${theme.palette.projectsGradient.bottom})`,
    minHeight: '100vh',
    fontFamily: theme.typography.mono,
    color: theme.palette.common.white,
    '& a': {
      color: theme.palette.common.white,
    },
  },
  bottomText: {
    color: theme.palette.common.white,
    fontFamily: theme.typography.mono,
  },
  project: {
    background: 'rgba(255, 255, 255, 0.1)',
    padding: theme.spacing(2),
    borderRadius: theme.spacing(0.5),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1),
    },
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  name: {
    [theme.breakpoints.down('sm')]: {
      fontWeight: 800,
    },
  },
  description: {
    marginTop: theme.spacing(2),
  },
  tech: {
    textAlign: 'right',
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(2),
    },
  },
  link: {
    margin: '0 auto',
    display: 'block',
    '& svg': {
      fill: '#ffdcdd',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'initial',
      marginTop: theme.spacing(2),
      float: 'left',
      padding: 0,
    },
  },
});

export default style;
