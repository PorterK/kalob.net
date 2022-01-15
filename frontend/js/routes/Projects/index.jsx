import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import { makeStyles } from '@material-ui/styles';

import Project from './Project';
import styles from './style';
import data from './projects-data';

const useStyles = makeStyles(styles);

export default function Projects() {
  const classes = useStyles();

  return (
    <Grid container justify="center" className={classes.container}>
      <Grid item xs={12} sm={8}>
        <Grid container justify="space-between">
          <Grid item>
            <Link href="/">
              HOME
            </Link>
          </Grid>
          <Grid item>
            <Link href="/story">
              MY STORY
            </Link>
          </Grid>
          <Grid item>
            <Link href="https://blog.kalob.net" target="_blank" rel="noopener">
              BLOG
            </Link>
          </Grid>
        </Grid>
      </Grid>
      {
        data.map((p, index) => <Project p={p} index={index} key={p.name} />)
      }
      <Grid item xs={12} sm={8}>
        <Grid container justify="space-between">
          <Typography variant="body2" className={classes.bottomText}>
            &copy; Kalob.NET 2022
          </Typography>
          <Typography variant="body2" className={classes.bottomText}>
            Indianapolis, IN
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
