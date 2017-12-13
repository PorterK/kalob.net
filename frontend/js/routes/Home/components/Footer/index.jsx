import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

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
        <Grid item xs={12} lg={6}>
          <Typography type="subheading" align="center" className={classes.footerText}>
            Made with <Heart className={classes.heart} /> in Indianapolis, IN
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Typography type="subheading" align="center" className={classes.footerText}>
            <a href="mailto:kalob@kalob.net">kalob@kalob.net</a>
          </Typography>
        </Grid>
      </Grid>
    );
  }
}
