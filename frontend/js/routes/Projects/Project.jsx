import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Grow from '@material-ui/core/Grow';
import IconButton from '@material-ui/core/IconButton';

import { makeStyles } from '@material-ui/styles';

import LinkIcon from '@material-ui/icons/Link';

import Github from 'js/common/Github';

import styles from './style';

const useStyles = makeStyles(styles);

export default function Project({ p, index }) {
  const classes = useStyles();

  return (
    <Grow in timeout={500 * (index + 1)}>
      <Grid item xs={12} sm={8}>
        <Grid container alignItems="center" className={classes.project}>
          <Grid item xs={12} md={3} className={classes.name}>
            {p.name}
          </Grid>
          <Grid item xs={12} md={4} className={classes.description}>
            {p.desc}
          </Grid>
          <Grid item xs={6} md={2}>
            <IconButton
              className={classes.link}
              onClick={
                () => {
                  window.open(p.link.url, '_blank');
                }
              }
            >
              {
                p.link.type === 'github'
                  ? <Github />
                  : <LinkIcon />
              }
            </IconButton>
          </Grid>
          <Grid item xs={6} md={3} className={classes.tech}>
            {
              // Render commas between all of the tech entries, but don't leave a trailing comma
              p.tech.map((t, i) => (i < p.tech.length - 1 ? `${t}, ` : t))
            }
          </Grid>
        </Grid>
      </Grid>
    </Grow>
  );
}

Project.propTypes = {
  p: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};
