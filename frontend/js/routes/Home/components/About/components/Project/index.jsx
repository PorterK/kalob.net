import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';

import GitHub from 'js/common/GitHub';

import style from './style';

@withStyles(style)
export default class Project extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    desc: PropTypes.element.isRequired,
    link: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired,
  }

  render() {
    const { name, desc, link, image, classes } = this.props;
    return (
      <Grid item xs={12}>
        <Grid container justify="center" alignItems="center" className={classes.project}>
          <Grid item xs={12} lg={4}>
            <img src={image} className={classes.img} alt="logo" />
          </Grid>
          <Grid item xs={12} lg={8}>
            <Typography type="title" className={classes.title}>
              {name}
            </Typography>
            <div className={classes.desc}>
              {desc}
            </div>
          </Grid>
          <Grid item xs={12}>
            <IconButton href={link} target="_blank" rel="noopener norefferer" className={classes.github}>
              { link && <GitHub /> }
            </IconButton>
          </Grid>
          <Grid item xs={12}>
            <div className={`${classes.dots} ${!link && classes.noLinkDots}`} />
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
