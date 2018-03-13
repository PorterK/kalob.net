import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

import GuardianNews from 'img/guardian_news.jpg';
import Twitter from 'img/twitter.png';
import Dark from 'img/dark.svg';

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
    name: 'ThePoliticNews',
    desc: (
      <p>
        <a href="http://twitter.com/ThePoliticNews">@ThePoliticNews</a> is a twitter bot that I wrote and administered throughout the
        2016 election year.
      </p>
    ),
    link: 'https://github.com/PorterK/ThePoliticNews',
    image: Twitter,
  },
  {
    name: 'DnD Ninja',
    desc: (
      <p>
        As a pastime, developing <a href="https://dnd.ninja">DnD Ninja</a> is the biggest, most ambitious app I have started yet.
      </p>
    ),
    link: 'https://github.com/dnd-ninja',
    image: Dark,
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
          <Typography type="subheading" align="center">
            <div className={classes.findMe}>
              Find me on <a href="https://github.com/PorterK">GitHub</a> to see more open source work.
            </div>
          </Typography>
        </Grid>
      </Grid>
    );
  }
}
