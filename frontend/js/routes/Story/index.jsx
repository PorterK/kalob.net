import React from 'react';

import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/styles';

import styles from './style';

import data from './story-data';
import StoryCard from './StoryCard';

const useStyles = makeStyles(styles);

export default function Story() {
  const classes = useStyles();

  return (
    <Grid container justify="center" className={classes.container}>
      <Grid item xs={12} sm={8} className={classes.topMenu}>
        <Grid container justify="space-between">
          <Grid item>
            <Link href="/">
              HOME
            </Link>
          </Grid>
          <Grid item>
            <Link href="https://blog.kalob.net" target="_blank" rel="noopener">
              BLOG
            </Link>
          </Grid>
          <Grid item>
            <Link href="/projects">
              PROJECTS
            </Link>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={8}>
        {
          data.map((d) => <StoryCard story={d} key={d.name} />)
        }
      </Grid>
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
