import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import Heart from 'js/common/Heart';

import style from './style';

@withStyles(style)
export default class Footer extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  }

  render() {
    const { classes } = this.props;

    return (
      <Grid container className={classes.container}>
        <Grid item xs={12} lg={4}>
          <Typography type="subheading" align="center" className={classes.footerText}>
            Made with <Heart className={classes.heart} /> in Indianapolis, IN
          </Typography>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Typography type="subheading" align="center" className={classes.footerText}>
            <a href="https://blog.kalob.net" rel="noopener noreferrer" target="_blank">Read my blog</a>
          </Typography>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Typography type="subheading" align="center" className={classes.footerText}>
            <a href="mailto:kalob@kalob.net">kalob@kalob.net</a>
          </Typography>
        </Grid>
      </Grid>
    );
  }
}
