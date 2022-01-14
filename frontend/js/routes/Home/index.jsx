import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import { makeStyles } from '@material-ui/styles';

import style from './style';

const useStyles = makeStyles(style);

export default function Home() {
  const classes = useStyles();

  return (
    <>
      <Grid container justify="center" alignItems="center" className={classes.container}>
        <Grid item xs={12}>
          <Typography variant="h3" align="center" className={classes.title}>
            kalob.net
          </Typography>
        </Grid>
      </Grid>
      <Grid container justify="center" alignItems="center" className={classes.menu}>
        <Grid item xs={12}>
          <Typography variant="h6" align="center">
            <Link className={classes.link} href="/projects">
              projects
            </Link>
          </Typography>
          <Typography variant="h6" align="center">
            <Link className={classes.link} href="/story">
              my story
            </Link>
          </Typography>
          <Typography variant="h6" align="center" className={classes.link}>
            <Link href="https://blog.kalob.net" className={classes.link} target="_blank" rel="noopener">
              blog
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={6}>
              <Typography variant="body2" className={classes.bottomText}>
                &copy; Kalob.NET 2022
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" className={classes.bottomText}>
                Indianapolis, IN
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
