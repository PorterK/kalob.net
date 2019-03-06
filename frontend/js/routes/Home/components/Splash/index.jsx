import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ScrollMagic from 'scrollmagic';

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
    controller: PropTypes.object.isRequired,
  }

  state = {
    animationText: '',
  }

  get skills() {
    const { width } = this.props;
    const { animationText } = this.state;

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
      ],
      basics: [
        'html', 'css', 'sass',
        'sql', 'mobile', ${animationText}
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
      ],
      basics: [
        'html', 'css', 'sass', 'sql', ${animationText}
      ],
      `;
  }

  scene = new ScrollMagic.Scene({
    offset: 0,
    duration: 1000,
  });

  progressAnmiation = (e) => {
    const { animationText, lastStep } = this.state;

     const finalAnimationText = ' \'animation\'';

     const { progress } = e;

     const progression = progress.toFixed(2) * 100;

     const incrementPercent = 100 / finalAnimationText.length;

     const step = Math.floor(progression / incrementPercent);

     if (step === lastStep) return;

     this.setState({
      animationText: finalAnimationText.substring(0, step),
      lastStep: step
    });
  }

  componentDidMount() {
    const { controller } = this.props;

    this.scene.setPin('#test');

    this.scene.on('progress', this.progressAnmiation);

    controller.addScene(this.scene);
  }

  render() {
    const { classes } = this.props;

    return (
      <Grid container justify="center" alignItems="center" className={classes.main} id="test">
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
