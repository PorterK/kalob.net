import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import withWidth from '@material-ui/core/withWidth';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/styles/prism';

import style from './style';

@withWidth()
@withStyles(style)
export default class Splash extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    width: PropTypes.string.isRequired,
  }

  get skills() {
    const { width } = this.props;

    if (width === 'xs') {
      return `
      javascript: [
        'node.js', 'react', 'webpack',
        'jss', 'react-native'
      ],
      devOps: [
        'aws', 'kubernetes', 'serverless',
        'jenkins', 'ci/cd'
      ],
      architecture: [
        'data modeling', 'software design',
        'server architecture'
      ]
      basics: [
        'html', 'css', 'sass',
        'sql', 'mobile web design'
      ],
      `;
    }

    return `
      javascript: [
        'node.js', 'react', 'webpack', 'jss', 'react-native'
      ],
      devOps: [
        'aws', 'kubernetes', 'serverless', 'jenkins', 'ci/cd'
      ],
      architecture: [
        'data modeling', 'software design', 'server architecture'
      ]
      basics: [
        'html', 'css', 'sass', 'sql'
      ],
      `;
  }

  render() {
    const { classes } = this.props;

    return (
      <Grid container justify="center" alignItems="center" className={classes.main}>
        <Grid item>
          <Grid container>
            <Grid item xs={12} className={classes.code}>
              <SyntaxHighlighter language="javascript" style={tomorrow}>
                {
                  `
export default class Human extends HomoSapien {
  constructor (anatomy) {
    super(anatomy);

    this.firstName = 'Kalob';
    this.lastName = 'Porter';

    this.job = 'Software Engineer';

    this.skills = {
      ${this.skills}
    };
  }

  getPortfolio = () => {
    alert('Please scroll down');
  }
}
                  `
                }
              </SyntaxHighlighter>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
