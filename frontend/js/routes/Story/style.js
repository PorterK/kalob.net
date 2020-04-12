const style = (theme) => ({
  container: {
    padding: theme.spacing(2),
    minHeight: '100vh',
    background: `linear-gradient(to bottom left, ${theme.palette.storyGradient.top}, ${theme.palette.storyGradient.bottom})`,
    fontFamily: theme.typography.mono,
    color: theme.palette.common.white,
    '& a': {
      color: theme.palette.common.white,
    },
  },
  topMenu: {
    marginBottom: theme.spacing(2),
  },
  bottomText: {
    color: theme.palette.common.white,
    fontFamily: theme.typography.mono,
    marginTop: theme.spacing(2),
  },
  storyCardContainer: {
    background: 'rgba(255, 255, 255, 0.1)',
    boxShadow: 'none',
  },
  expandIcon: {
    fill: theme.palette.common.white,
  },
  mono: {
    fontFamily: theme.typography.mono,
    color: theme.palette.common.white,
  },
});

export default style;
