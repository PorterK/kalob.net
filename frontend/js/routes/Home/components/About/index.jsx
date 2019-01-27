import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import GuardianNews from 'img/guardian_news.jpg';
import Robovise from 'img/robovise.png';
import SumpThing from 'img/sump-thing.png';

import Project from './components/Project';

import style from './style';

const projectData = [
  {
    name: 'Guardian News JS Client',
    desc: (
      <p>
        A JavaScript client that I wrote to go along with the
        <a href="http://open-platform.theguardian.com/documentation/"> Guardian Open Platform</a>
      </p>
    ),
    link: 'https://github.com/PorterK/GuardianJSClient',
    image: GuardianNews,
  },
  {
    name: 'Robovise',
    desc: (
      <p>
        <a href="https://robovise.com">Robovise</a> is a robo advisor built for the modern world.
      </p>
    ),
    image: Robovise,
  },
  {
    name: 'Sump Thing',
    desc: (
      <p>
        <a href="https://github.com/pyazo/sump-thing">Sump Thing</a> is an open source aquarium monitoring hardware/software solution.
      </p>
    ),
    link: 'https://github.com/pyazo/sump-thing',
    image: SumpThing,
  },
];

@withStyles(style)
export default class About extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.container}>
        {
          projectData.length > 0 &&
          projectData.map(data => <Project {...data} />)
        }
        <Grid item xs={12}>
          <div className={classes.findMe}>
            <Typography type="subheading" align="center">
              Find me on <a href="https://github.com/PorterK">GitHub</a> to see more open source work.
            </Typography>
          </div>
        </Grid>
      </Grid>
    );
  }
}
