import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

import Logo from 'img/logo.png';

import style from './style';

@withStyles(style)
export default class Splash extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  }

  render() {
    const { classes } = this.props;

    return (
      <Grid container justify="center" alignItems="center" className={classes.main}>
        <Grid item>
          <Grid container>
            <Grid item xs={12}>
              <img src={Logo} alt="my face" className={classes.logo} />
            </Grid>
            <Grid item xs={12}>
              <Typography align="center" type="display2" className={classes.splashText}>
                Hello world,
              </Typography>
              <Typography align="center" type="subheading" className={classes.splashText}>
                welcome to my humble abode here on the internet.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
