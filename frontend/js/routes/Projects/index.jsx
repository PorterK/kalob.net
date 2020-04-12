import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import { makeStyles } from '@material-ui/styles';

import Project from './Project';
import styles from './style';

const projectData = [
  {
    name: 'Guardian News JS Client',
    desc: (
      <>
        A JavaScript client that I wrote to go along with the
        {' '}
        <a href="http://open-platform.theguardian.com/documentation/">Guardian Open Platform</a>
      </>
    ),
    link: {
      type: 'github',
      url: 'https://github.com/PorterK/GuardianJSClient',
    },
    tech: [
      'JS',
    ],
  },
  {
    name: 'Robovise',
    desc: (
      <>
        A robo advisor built for the modern world.
      </>
    ),
    link: {
      type: 'site',
      url: 'https://robovise.com',
    },
    tech: [
      'JS', 'React', 'Webpack', 'AWS',
    ],
  },
  {
    name: 'Sump Thing',
    desc: (
      <>
        An open source aquarium monitoring hardware/software solution.
      </>
    ),
    link: {
      type: 'github',
      url: 'https://github.com/pyazo',
    },
    tech: [
      'C++', 'C#', 'JS', 'React', 'Arduino',
    ],
  },
  {
    name: 'Uncovered',
    desc: (
      <>
        A platform to use the power of collective impact to bring peace to
        families of murdered or missing people.
      </>
    ),
    link: {
      type: 'site',
      url: 'https://cases.uncovered.com',
    },
    tech: [
      'JS', 'React',
    ],
  },
];

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
        projectData.map((p, index) => <Project p={p} index={index} key={p.name} />)
      }
      <Grid item xs={12} sm={8}>
        <Grid container justify="space-between">
          <Typography variant="body2" className={classes.bottomText}>
            &copy; Kalob.NET 2020
          </Typography>
          <Typography variant="body2" className={classes.bottomText}>
            Indianapolis, IN
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
